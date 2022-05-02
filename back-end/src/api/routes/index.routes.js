import Router from 'express/Router';
import { route as loginRoute } from './login.routes';

const route = Router();

route.use('/login', loginRoute);

export default route;
