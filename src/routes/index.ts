import { Express } from 'express';
import authRoutes from './auth.routes';
import studentRoutes from './student.routes';
import teacherRoutes from './teacher.routes';

export const registerRoutes = (app: Express) => {
  app.use('/api/auth', authRoutes);
  app.use('/api/students', studentRoutes);
  app.use('/api/teachers', teacherRoutes);
};