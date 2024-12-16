/* eslint-disable import/prefer-default-export */
import { prisma } from '@/lib/prisma';
import { getServerSession } from 'next-auth';
import { NextResponse } from 'next/server';
import authOptions from '@/lib/authOptions';

async function fetchProducts() {
  const session = await getServerSession(authOptions);
  const owner = session?.user?.email ?? '';

  if (!session) {
    return { error: 'Unauthorized', status: 401 };
  }

  try {
    const products = await prisma.product.findMany({
      where: { owner },
    });
    return { products, status: 200 };
  } catch (error) {
    console.error('Error fetching products:', error);
    return { error: 'Failed to fetch products', status: 500 };
  }
}

// Directly export the HTTP method handler
export async function GET() {
  const { products, error, status } = await fetchProducts();
  if (error) {
    return NextResponse.json({ error }, { status });
  }
  return NextResponse.json(products);
}
