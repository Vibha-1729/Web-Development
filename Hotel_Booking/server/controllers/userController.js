// GET /api/user/

export const getUserData = async (req, res) => {
  try {

    const role = req.user?.role || "user";
    const recentsearchedCities = req.user?.recentsearchedCities || [];

    res.json({
      success: true,
      role,
      recentsearchedCities
    });

  } catch (error) {
    res.status(500).json({
      success:false,
      message:error.message
    });
  }
};

// store user recent searched cities
export const storeRecentSearchedCities = async (req,res)=>{
  try{

    const { recentsearchedCity } = req.body;
    const user = req.user;

    if(!user.recentsearchedCities){
        user.recentsearchedCities = [];
    }

    if(user.recentsearchedCities.length < 3){
        user.recentsearchedCities.push(recentsearchedCity);
    }else{
        user.recentsearchedCities.shift();
        user.recentsearchedCities.push(recentsearchedCity);
    }

    await user.save();

    res.json({
      success:true,
      message:"City added"
    });

  }catch(error){
    res.status(500).json({
      success:false,
      message:error.message
    });
  }
}