import { Router } from 'express';
import multer from 'multer';
import { CreateCategoryController } from './controllers/category/CreateCategoryController';
import { ListCategoryController } from './controllers/category/ListCategoryController';
import { CreateProductController } from './controllers/product/CreateProductController';
import { CreateUserController } from './controllers/user/CreateUserController';
import { DetailUserController } from './controllers/user/DetailUserController';
import { AuthUserController } from './controllers/user/Login/AuthUserController';
import { isAuthenticated } from './middlewares/isAuthenticated';
import uploadConfig from './config/multer'
import { adaptRoute } from './adapters/express-route-adapter';

const router = Router();
const upload = multer(uploadConfig.upload('./tmp'))

router.post('/users', adaptRoute(new CreateUserController()))
router.post('/login', adaptRoute(new AuthUserController()))
router.get('/me', isAuthenticated, adaptRoute(new DetailUserController()))

router.post('/category', isAuthenticated, adaptRoute(new CreateCategoryController()))
router.get('/category', isAuthenticated, adaptRoute(new ListCategoryController()))

router.post('/product', isAuthenticated, upload.single('file'), adaptRoute(new CreateProductController()))

export { router }; 