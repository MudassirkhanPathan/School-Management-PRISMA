import { Request, Response, NextFunction } from 'express';
import { Role } from '@prisma/client';

interface JwtPayload {
  id: string;
  email: string;
  role: Role;
}

export const roleMiddleware = (roles: Role[]) => {
  return (req: Request, res: Response, next: NextFunction): void => {
    const user = req.user as JwtPayload | undefined;

    
    if (!user) {
      res.status(401).json({ message: 'User not authenticated' });  
      return; 
    }

    
    if (!roles.includes(user.role)) {
      res.status(403).json({ message: 'Access forbidden: insufficient role' });  
      return; 
    }

    
    next();  
  };
};
