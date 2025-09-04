import { Router } from 'express';
import { authMiddleware, tryCatchWrapper } from '../../../utils/middlewares';
import {
  createGameController,
  getUserGamesController,
} from '../controllers/game';

const router = Router();

router.use(authMiddleware);

router.post('/', tryCatchWrapper(createGameController));
router.get('/', tryCatchWrapper(getUserGamesController));

export default router;
