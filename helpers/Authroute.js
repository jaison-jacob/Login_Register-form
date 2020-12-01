const {token_validator} = require("./webtoken");

module.exports = async (req,res,next) => {
    
    try {
        console.log("it come");
    const {jwt} = req.cookies;
    console.log(jwt);
    const valid = await token_validator(jwt);
    console.log("valid or not : "+valid)
    if(valid){
        next();
    }else{
        console.log("it come1");
        res.send({
            messsage : "access denied"
        });
    }
    } catch (error) {
        res.send({
            error
        });
    }
    
    
    
    
}