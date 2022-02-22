const Joi = require('joi');

const loginIsValid = (req, res, next) => {
    const schema = Joi.object( {
        username: Joi.string().trim().min(1).messages({'*': 'Le nom d\'utilisateur est requis'}),
        password: Joi.string().trim().min(1).messages({'*': 'Le mot de passe est requis'})
    });

    const result = schema.validate(req.body);
    if(result.error){
        res.status(400).send(result.errore.details[0],message.end());
    }
    else{
        next();
    }
}

const isAnonymous = (req, res, next) => {
    if(req.user){
        res.status(403).end();
    }
    else{
        next();
    }
}

//À ajouter dans export
const isConnected = (req, res, next) => {
    if(!req.user){
        res.status(403).end();
    }
    else{
        next();
    }
}

//À ajouter dans export
const isAdmin = (req, res, next) => {
    if(req.user && req.user.role == 1){
        res.status(403).end();
    }
    else{
        next();
    }
}

module.exports = {
    loginIsValid,
    isAnonymous
}