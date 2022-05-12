const jwt = require('jsonwebtoken');
const fs = require('fs');
const userService = require('../services/loginService');

const JWT_SECRET = fs.readFileSync('./jwt.evaluation.key', { encoding: 'utf-8' });

const jwtConfig = { algorithms: ['HS256'] };

module.exports = async (req, res) => {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({ message: 'Token not found' });
    }

    try {
        const { email } = jwt.verify(token, JWT_SECRET, jwtConfig);

        await userService.findByEmail(email);

        return res.status(200).json({ message: 'ok' });
    } catch (err) {
        res.status(409).json({ message: 'Expired or invalid token' });
    }
};
