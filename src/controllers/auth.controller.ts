import { Request, Response } from 'express';
import { signupService, loginService } from '../services/auth.service';

export const signupController = async (req: Request, res: Response) => {
  const { email, password, role } = req.body;
  try {
    const token = await signupService(email, password, role);
    res.json({ message: 'Signup successful', token });
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ message: error.message });
    } else {
      res.status(400).json({ message: 'An unknown error occurred' });
    }
  }
};

export const loginController = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const token = await loginService(email, password);
    res.json({ message: 'Login successful', token });
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ message: error.message });
    } else {
      res.status(400).json({ message: 'An unknown error occurred' });
    }
  }
};
