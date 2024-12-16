'use client';

import { useForm } from 'react-hook-form';
import { checkoutProducts } from '@/lib/dbActions';
import { Container, Row, Col, Button } from 'react-bootstrap';
import CartCard from '@/components/CartCard';
import { Product } from '@prisma/client';

interface CartPageProps {
  products: Product[];
}

export default function CartPage({ products }: CartPageProps) {
  const { handleSubmit } = useForm();

  const onCheckout = async () => {
    try {
      const owner = products.length > 0 ? products[0].owner : '';
      await checkoutProducts(owner); // Update the 'checkedout' field in the database
      swal('Success', 'Your checkout is complete', 'success', {
        timer: 2000,
      }).then(() => {
        window.location.href = '/auth/account'; // Redirect to the account page
      });
    } catch (error) {
      console.error('Checkout failed', error);
      swal('Error', 'Checkout failed. Please try again.', 'error');
    }
  };

  return (
    <main>
      <Container id="list" fluid className="py-3">
        <Row>
          <Col>
            <h2 className="text-center">Cart</h2>
            <Row xs={1} md={2} lg={3} className="g-4">
              {products.map((item) => (
                <Col key={item.id}>
                  <CartCard product={item} />
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col className="d-flex justify-content-center">
            {/* Checkout Button */}
            <form onSubmit={handleSubmit(onCheckout)}>
              <Button type="submit" variant="success">
                Checkout
              </Button>
            </form>
          </Col>
        </Row>
      </Container>
    </main>
  );
}
