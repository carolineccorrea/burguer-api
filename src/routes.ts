import { Router } from 'express';
import { CreateCateogoryController } from './controllers/category/CreateCategoryController';
import { CreateUserController } from './controllers/user/CreateUserController';
import { DetailUserController } from './controllers/user/DetailUserController';
import { AuthUserController } from './controllers/user/Login/AuthUserController';
import { isAuthenticated } from './middlewares/isAuthenticated';

const router = Router();

router.post('/users', new CreateUserController().handle)
router.post('/login', new AuthUserController().handle)
router.get('/me', isAuthenticated, new DetailUserController().handle)
router.post('/category', isAuthenticated, new CreateCateogoryController().handle)

export { router }; 