const bcrypt = require('bcryptjs');
var salt = bcrypt.genSaltSync(10);

// Encryption of the string password
function encryptMe (password){
    return bcrypt.hashSync(password, salt);
}

function compareMePlease(hashedCode,password){
    return bcrypt.compareSync(password,hashedCode);
}

module.exports = {encryptMe, compareMePlease};