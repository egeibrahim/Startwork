const bcrypt = require('bcryptjs');

const validateUserInput = (username, password) => {
    return username && password;
};

const comparePassword = (password, hashedPassword) => {
    return bcrypt.compareSync(password, hashedPassword);
}

module.exports = {
    validateUserInput,
    comparePassword
};