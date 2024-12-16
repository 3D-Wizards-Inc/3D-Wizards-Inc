import { getServerSession } from 'next-auth';
import authOptions from '@/lib/authOptions';
import { prisma } from '@/lib/prisma';
import CartPage from './CartPage';

export default async function Page() {
  const session = await getServerSession(authOptions);

  if (!session?.user?.email) {
    return {
      redirect: {
        destination: '/auth/signin',
        permanent: false,
      },
    };
  }

  const owner = session.user.email;
  const products = await prisma.product.findMany({
    where: { owner, checkedout: false },
    select: {
      id: true,
      option: true,
      size: true,
      color1: true,
      color2: true,
      color3: true,
      quantity: true,
      checkedout: true,
      owner: true, // Ensure this is included
    },
  });

  return <CartPage products={products} />;
}
