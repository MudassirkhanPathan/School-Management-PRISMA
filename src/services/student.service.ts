import prisma from '../db/db.config';

export const createStudent = async (userId: string, studentData: any) => {
  return await prisma.student.create({
    data: {
      ...studentData,
      userId,
    },
  });
};

export const updateStudent = async (id: string, studentData: any) => {
  return await prisma.student.update({
    where: { id: Number(id) },  // Casting string to number
    data: studentData,
  });
};

export const getStudent = async (id: string) => {
  return await prisma.student.findUnique({
    where: { id: Number(id) },  // Casting string to number
  });
};

export const deleteStudent = async (id: string) => {
  return await prisma.student.delete({
    where: { id: Number(id) },  // Casting string to number
  });
};
