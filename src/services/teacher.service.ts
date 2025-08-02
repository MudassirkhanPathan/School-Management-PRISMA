import prisma from '../db/db.config';

export const updateTeacher = async (id: string, teacherData: any) => {
  return await prisma.teacher.update({
    where: { id: Number(id) },  
    data: teacherData,
  });
};
