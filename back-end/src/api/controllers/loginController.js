import { findByEmail } from '../services/loginService';
import Router from 'express/Router';
const rescue = require('express-rescue');
const loginRouter = Router();

loginRouter.get('/', rescue(async (req, res) => {
  const { email } = req.body;
  const user = await findByEmail(email);
  return res.status(200).json({ user });
}));

export default loginRouter;
