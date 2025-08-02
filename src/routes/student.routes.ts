import express from 'express';
import { createStudentController, updateStudentController, getStudentController, deleteStudentController } from '../controllers/student.controller';
import { authMiddleware } from '../middleware/auth.middleware';
import { roleMiddleware } from '../middleware/role.middleware';
import { Role } from '@prisma/client';

const router = express.Router();

router.post('/', authMiddleware, createStudentController);
router.put('/:id', authMiddleware, roleMiddleware([Role.TEACHER, Role.PRINCIPAL]), updateStudentController);
router.get('/:id', authMiddleware, getStudentController);
router.delete('/:id', authMiddleware, roleMiddleware([Role.PRINCIPAL]), deleteStudentController);

export default router;
