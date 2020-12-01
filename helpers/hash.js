const bcrypt = require('bcryptjs');
const saltlevel = 10;

const hashgenerate = async (plainpassword) => {

    try {
        console.log("hhbijdsbij ds  " +plainpassword);

  
    
    const salt = await bcrypt.genSalt(saltlevel);
    console.log("salt : "+salt + "  "+plainpassword);
    const hash = await bcrypt.hash(plainpassword,salt);
    console.log(hash);
    return hash;
    } catch (error) {
        console.log(error);
    }

    
}

//validator 

const validatepassword = async (plainpassword,hashpassword) => {



        const result = await bcrypt.compare(plainpassword,hashpassword);
        return result;
        
    
}

module.exports.hashgenerate = hashgenerate;
module.exports.validatepassword = validatepassword;