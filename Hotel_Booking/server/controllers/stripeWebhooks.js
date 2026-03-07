import stripe from "stripe"
import Booking from "../models/Booking";

export const stripeWebhook = async (req, res) => {
    // stripe gateway initialize
    const stripeInstance = new stripe(process.env.STRIPE_SECRET_KEY);
    const sig = req.headers['stripe-signature'];
    let event;

    try{
        event = stripeInstance.webhooks.constructEvent(req.body, sig, process.env.STRIPE_WEBHOOK_SECRET);
    } catch (err) {
        console.error(`Error while verifying webhook: ${err.message}`);
        return res.status(400).send(`Webhook Error: ${err.message}`);
    }

    // handle the event
    if (event.type === 'payment_intent.succeeded') {
        const paymentIntent = event.data.object;
        const paymentIntentId = paymentIntent.id;

        // getting session Metadata
        const session = await stripeInstance.checkout.sessions.list({
            payment_intent: paymentIntentId,
        });

        const bookingId = session.data[0].metadata;

        // mark payment as paid
        await Booking.findByIdAndUpdate(bookingId, { isPaid: true, paymentMethod:"Stripe" });
    }else{
        console.log("Unhandled event type: " , event.type);
    }
    res.json({ received: true });

}