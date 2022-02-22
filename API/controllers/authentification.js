const User = require('../models/user')

const login = async(req,res) => {
    res.cookie('session-info', true, {maxAge: 1000 * 60 * 24 * 7});
    res.sendStatus(204);
}

module.exports = {
    login
}