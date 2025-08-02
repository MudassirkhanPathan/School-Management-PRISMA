import { Request, Response } from 'express';
import { updateStudent } from '../services/student.service';

export const updateStudentByTeacherController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, age, gender, address, class: studentClass, section, phone } = req.body;
  try {
    const student = await updateStudent(id, { name, age, gender, address, class: studentClass, section, phone });
    res.json({ message: 'Student updated by teacher', student });
  } catch (error) {
    
    if (error instanceof Error) {
      res.status(400).json({ message: error.message });
    } else {
      res.status(400).json({ message: 'An unexpected error occurred' });
    }
  }
};
