import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
import { getSession } from 'next-auth/react';

const prisma = new PrismaClient();

interface UserRequestBody {
  email: string;
  password: string;
  role: 'USER' | 'ADMIN';
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Check if the user is authenticated
  const session = await getSession({ req });
  if (!session) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  if (req.method === 'POST') {
    const { email, password, role }: UserRequestBody = req.body;

    try {
      const user = await prisma.user.upsert({
        where: { email },
        update: { password, role },
        create: { email, password, role },
      });

      return res.status(200).json({ message: 'User updated successfully', user });
    } catch (error) {
      console.error('Error saving user:', error);
      return res.status(500).json({ message: 'Internal server error' });
    } finally {
      await prisma.$disconnect();
    }
  } else {
    return res.status(405).json({ message: 'Method not allowed' });
  }
}
