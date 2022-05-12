import { Router } from 'express';

import { CreateUserController } from './controllers/user/CreateUserController'
import { AuthUserController } from './controllers/user/Login/AuthUserController';

const router = Router();

router.post('/users', new CreateUserController().handle)
router.post('/login', new AuthUserController().handle)

export { router }; 