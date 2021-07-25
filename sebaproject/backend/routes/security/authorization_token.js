//Checks to see if there is a login token (if a user is logged in) then it extracts it and exports it

const jwt = require('jsonwebtoken');
const JwtSecret = "Very Secret";

//checks to see if the login token from the authorization header is as defined in the auth.js route (checks if the signature key is appropriate and if the token is not expired)
const verifyData = async (token) => {
    try {
       await jwt.verify(token, JwtSecret,  {expiresIn: 86400});
    } catch (err) {
        console.trace(err);
        throw new Error("Error at verifying the integrity of the token!");
    }
};

const authorizeToken = async (req, res, next) => {
    //checks to see if the authorization header exists, otherwise throws an error
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

//exports the token
module.exports = {
    authorizeToken
};
