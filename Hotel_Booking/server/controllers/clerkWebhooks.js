import User from "../models/user.js";

const clerkWebhooks = async (req, res) => {
  try {

    console.log("Webhook received:", req.body.type);

    const { data, type } = req.body;

    switch (type) {

      case "user.created":{
        const userData = {
          _id: data.id,
          username: (data.first_name || "") + " " + (data.last_name || ""),
          email: data.email_addresses?.[0]?.email_address || "temp@email.com",
          image: data.image_url || data.profile_image_url || ""
        };
        await User.findByIdAndUpdate(
          data.id,
          userData,
          {
            upsert: true,
            new: true,
            setDefaultsOnInsert: true
          }
        );
        const user = await User.findById(data.id);
        console.log("Saved user in DB:", user);
        break;
      }

      case "user.updated":{
        const userData = {
          _id: data.id,
          username: (data.first_name || "") + " " + (data.last_name || ""),
          email: data.email_addresses?.[0]?.email_address || "temp@email.com",
          image: data.image_url || data.profile_image_url || ""
        };
        await User.findByIdAndUpdate(data.id, userData);
        console.log("User updated");
        break;
      }

      case "user.deleted":{
        await User.findByIdAndDelete(data.id);
        console.log("User deleted");
        break;
      }

    }

    res.json({ success: true });

  } catch (error) {
    console.log("Webhook error:", error);
    res.json({ success: false });
  }
}

export default clerkWebhooks;