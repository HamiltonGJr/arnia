import { Router } from 'express';
import authRouter from './auth.routes';
import userRoutes from './user.routes';
import taskRoutes from './task.routes';

const router = Router();

router.use('/auth', authRouter);
router.use('/users', userRoutes);
router.use('/tasks', taskRoutes);

export default router;
