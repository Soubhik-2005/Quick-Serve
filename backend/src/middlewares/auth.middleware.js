const jwt = require("jsonwebtoken");


 function currentUser (req,res,next){
    const token = req.cookies.token;
    

    if(!token) return res.status(400).json({message:"token not found"});

    try{
    const decodedToken = jwt.verify(token,process.env.JWT_SECRET);
    req.userId = decodedToken.userId;
    next();
    }
    catch(err){
        console.log(err);
        return res.status(401).json({message:"unauthorized"});
    }
}

module.exports = currentUser;