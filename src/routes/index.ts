import { Router } from 'express';
import { DiscountController } from '../controllers';

const router = Router();
const discountController = new DiscountController();

export const setRoutes = (app) => {
    app.use('/api/discounts', router);
    router.get('/', discountController.getDiscounts.bind(discountController));
};