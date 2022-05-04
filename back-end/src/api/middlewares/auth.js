const jwt = require('jsonwebtoken');
const fs = require('fs');
const userService = require('../services/loginService');

const JWT_SECRET = fs.readFileSync('./jwt.evaluation.key', { encoding: 'utf-8' });

const NOT_FOUND_ERROR = new Error();
NOT_FOUND_ERROR.code = 'AlreadyExists';
NOT_FOUND_ERROR.message = 'User already registered';

const jwtConfig = { algorithms: ['HS256'] };

module.exports = async (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({ message: 'Token not found' });
    }

    try {
        const { email } = jwt.verify(token, JWT_SECRET, jwtConfig);

        const user = await userService.findByEmail(email);

        req.user = user;

        next();
    } catch (err) {
        res.status(401).json({ message: 'Expired or invalid token' });
    }
};
