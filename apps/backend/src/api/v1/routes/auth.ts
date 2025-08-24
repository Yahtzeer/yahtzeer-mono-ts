import { Router } from 'express';
import { tryCatchWrapper } from '../../../utils/middlewares';
import {
  createUserController,
  currentUser,
  loginController,
} from '../controllers/auth';

const router = Router();

router.get('/me', tryCatchWrapper(currentUser));
router.post('/register', tryCatchWrapper(createUserController));
router.post('/login', tryCatchWrapper(loginController));

export default router;
