import express from 'express';
import { updateStudentByTeacherController } from '../controllers/teacher.controller';
import { authMiddleware } from '../middleware/auth.middleware';
import { roleMiddleware } from '../middleware/role.middleware';
import { Role } from '@prisma/client';

const router = express.Router();

router.put('/:id', authMiddleware, roleMiddleware([Role.TEACHER, Role.PRINCIPAL]), updateStudentByTeacherController);

export default router;
