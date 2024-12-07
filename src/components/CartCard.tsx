'use client';

import { Product } from '@prisma/client';
import { Card } from 'react-bootstrap';

/* Renders a single row in the List Stuff table. See list/page.tsx. */
const CartCard = ({ product }: { product: Product }) => (
  <Card className="h-100">
    <Card.Header>
      <Card.Title>
        {product.option}
      </Card.Title>
      <Card.Subtitle>
        Quantity:
        {product.quantity}
      </Card.Subtitle>
    </Card.Header>
    <Card.Body>
      <Card.Text>
        Primary:
        {product.color1}
        <br />
        Secondary:
        {product.color2}
        <br />
        Tertiary:
        {product.color3}
        <br />
        Size:
        {product.size}
      </Card.Text>
    </Card.Body>
  </Card>
);

export default CartCard;
