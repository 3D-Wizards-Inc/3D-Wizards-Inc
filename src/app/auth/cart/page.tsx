import { getServerSession } from 'next-auth';
import { Col, Container, Row } from 'react-bootstrap';
import { loggedInProtectedPage } from '@/lib/page-protection';
import authOptions from '@/lib/authOptions';
import { Product } from '@prisma/client';
import CartCard from '@/components/CartCard';
import { prisma } from '@/lib/prisma';

/** Render a list of stuff for the logged in user. */
const CartPage = async () => {
  // Protect the page, only logged in users can access it.
  const session = await getServerSession(authOptions);
  loggedInProtectedPage(
    session as {
      user: { email: string; id: string; randomKey: string };
      // eslint-disable-next-line @typescript-eslint/comma-dangle
    } | null,
  );
  const owner = session?.user!.email ? session.user.email : '';
  const product: Product[] = await prisma.product.findMany({
    where: {
      owner,
    },
    select: {
      id: true,
      option: true,
      size: true,
      color1: true,
      color2: true,
      color3: true,
      quantity: true,
      owner: true,
    },
  });
  return (
    <main>
      <Container id="list" fluid className="py-3">
        <Row>
          <Col>
            <h2 className="text-center">Cart</h2>
            <Row xs={1} md={2} lg={3} className="g-4">
              {product.map((item) => (
                <Col key={item.option}>
                  <CartCard product={item as Product} />
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default CartPage;
