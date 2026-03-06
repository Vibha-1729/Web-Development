import Hotel from "../models/Hotel.js";
import User from "../models/user.js";

export const registerHotel = async (req,res)=>{
  try{

    const {name,address,contact,city} = req.body;

    if(!req.user){
      return res.json({success:false,message:"User not authenticated"});
    }

    const owner = req.auth().userId;  // <-- THIS IS THE IMPORTANT PART

    // check if hotel already exists
    const hotel = await Hotel.findOne({owner});

    if(hotel){
      return res.json({success:false,message:"Hotel Already Registered"});
    }

    await Hotel.create({
      name,
      address,
      contact,
      city,
      owner
    });

    await User.findByIdAndUpdate(owner,{role:"hotelOwner"});

    res.json({success:true,message:"Hotel registered successfully"});

  }catch(error){
    console.log(error);
    res.json({success:false,message:error.message});
  }
}