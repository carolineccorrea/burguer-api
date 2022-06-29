import { Router } from 'express';
import multer from 'multer';
import { CreateCategoryController } from '../application/controllers/category/CreateCategoryController';
import { ListCategoryController } from '../application/controllers/category/ListCategoryController';
import { CreateProductController } from '../application/controllers/product/CreateProductController';
import { CreateUserController } from '../application/controllers/user/CreateUserController';
import { DetailUserController } from '../application/controllers/user/DetailUserController';
import { AuthUserController } from '../application/controllers/user/Login/AuthUserController';
import { isAuthenticated } from './middlewares/isAuthenticated';
import uploadConfig from './config/multer'
import { adaptRoute } from './adapters/express-route-adapter';
import { ListByCategoryController } from '../application/controllers/product/ListByCategoryController';

const router = Router();
const upload = multer(uploadConfig.upload('./tmp'))

router.post('/users', adaptRoute(new CreateUserController()))
router.post('/login', adaptRoute(new AuthUserController()))
router.get('/me', isAuthenticated, adaptRoute(new DetailUserController()))

router.post('/category', isAuthenticated, adaptRoute(new CreateCategoryController()))
router.get('/category', isAuthenticated, adaptRoute(new ListCategoryController()))

router.post('/product', isAuthenticated, upload.single('file'), adaptRoute(new CreateProductController()))

router.post('/product/bycategory', isAuthenticated, adaptRoute(new ListByCategoryController()))

export { router }; 