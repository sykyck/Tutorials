import { Router } from 'express';
import { verifyToken, isAdmin } from '../middleware/auth.middleware';
import { login, signup } from '../controllers/auth.controller';

const router = Router();

router.post('/signup', signup);
router.post('/login', login);
router.get('/admin-only', verifyToken, isAdmin, (req, res) => {
  res.json({ message: 'Welcome Admin!' });
});

export default router;
