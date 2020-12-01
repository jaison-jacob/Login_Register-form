const jwt = require('jsonwebtoken');

const tokengenerator = (email) => {

    const token = jwt.sign({email},process.env.SECRET_KEY,{expiresIn: "1min"});

return token;
}

//check token
const token_validator = (token) => {
    const validate = jwt.verify(token,process.env.SECRET_KEY);
    return validate;
}
module.exports.tokengenerator = tokengenerator;
module.exports.token_validator = token_validator;