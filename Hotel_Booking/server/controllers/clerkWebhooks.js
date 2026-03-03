const clerkWebhooks = async (req, res) => {
  try {
    console.log("Webhook hit");

    const { data, type } = req.body;
    console.log("Event type:", type);

    const userData = {
      _id: data.id,
      email: data.email_addresses?.[0]?.email_address,
      username: data.first_name + " " + data.last_name,
      image: data.image_url,
    };

    console.log("Prepared userData:", userData);

    switch (type) {
      case "user.created": {
        const saved = await User.create(userData);
        console.log("User saved:", saved);
        break;
      }

      case "user.updated": {
        const updated = await User.findByIdAndUpdate(data.id, userData);
        console.log("User updated:", updated);
        break;
      }

      case "user.deleted": {
        const deleted = await User.findByIdAndDelete(data.id);
        console.log("User deleted:", deleted);
        break;
      }
    }

    res.json({ success: true });
  } catch (error) {
    console.log("ERROR:", error);
    res.status(500).json({ success: false, error: error.message });
  }
};