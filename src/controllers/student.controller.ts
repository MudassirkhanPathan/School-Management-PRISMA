import { Request, Response } from 'express';
import { createStudent, updateStudent, getStudent, deleteStudent } from '../services/student.service';

export const createStudentController = async (req: Request, res: Response): Promise<void> => {
  const { name, age, gender, address, class: studentClass, section, phone } = req.body;
  
  const userId = req.user?.id;  

  if (!userId) {
    res.status(401).json({ message: 'User is not authenticated' });
    return;
  }

  try {
    const student = await createStudent(userId, { name, age, gender, address, class: studentClass, section, phone });
    res.json({ message: 'Student created', student });
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ message: error.message });
    } else {
      res.status(400).json({ message: 'An unexpected error occurred' });
    }
  }
};

export const updateStudentController = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  const { name, age, gender, address, class: studentClass, section, phone } = req.body;
  try {
    const student = await updateStudent(id, { name, age, gender, address, class: studentClass, section, phone });
    res.json({ message: 'Student updated', student });
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ message: error.message });
    } else {
      res.status(400).json({ message: 'An unexpected error occurred' });
    }
  }
};

export const getStudentController = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  try {
    const student = await getStudent(id);
    res.json({ student });
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ message: error.message });
    } else {
      res.status(400).json({ message: 'An unexpected error occurred' });
    }
  }
};

export const deleteStudentController = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  try {
    await deleteStudent(id);
    res.json({ message: 'Student deleted' });
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ message: error.message });
    } else {
      res.status(400).json({ message: 'An unexpected error occurred' });
    }
  }
};
