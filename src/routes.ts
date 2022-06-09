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

const router = Router();
const upload = multer(uploadConfig.upload('./tmp'))

router.post('/users', new CreateUserController().handle)
router.post('/login', new AuthUserController().handle)
router.get('/me', isAuthenticated, new DetailUserController().handle)

router.post('/category', new CreateCategoryController().handle)
router.get('/category', isAuthenticated, new ListCategoryController().handle)

router.post('/product', upload.single('file'), new CreateProductController().handle)

export { router }; 