const jwt = require('jsonwebtoken');
const JwtSecret = "Very Secret";

const verifyData = async (token) => {
	
    try {
       await jwt.verify(token, JwtSecret,  {expiresIn: 86400});
    } catch (err) {
        console.trace(err);
        throw new Error("Error at verifying the integrity of the token!");
    }
};

const authorizeToken = async (req, res, next) => {
    try {
        if (!req.headers.authorization) {
           throw new Error('The authorization header is missing!');
        }
       
      	//the format of the header is "Bearer 1qwei..." and we need only the token(1qwei...)
      	const token = req.headers.authorization.split(" ")[1];
      
 
    	await verifyData(token);
   
      	next();
    } catch (err) {
       	next(err);
    }
};

module.exports = {
    authorizeToken
};
