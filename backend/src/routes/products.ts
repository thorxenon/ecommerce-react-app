import * as controllers from '../controllers/productController';
import { Router } from 'express';

const router = Router();

router.get('/api/v1/products', controllers.getProduct);

export default router;