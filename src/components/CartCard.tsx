'use client';

import { Product } from '@prisma/client';
import { Card, Button, Alert } from 'react-bootstrap';
import { useState } from 'react';

/* Renders a single row in the List Stuff table. See list/page.tsx. */

const CartCard = ({ product }: { product: Product }) => {
  const [isDeleting, setIsDeleting] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const handleDelete = async () => {
    setIsDeleting(true);
    try {
      const response = await fetch('/api/cart/delete', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: product.id }),
      });

      if (response.ok) {
        // alert('Item deleted successfully');
        window.location.reload(); // Refresh the page to reflect changes.
      } else {
        setMessage('Failed to delete item');
      }
    } catch (error) {
      console.error('Error deleting item:', error);
      setMessage('Error deleting item');
    } finally {
      setIsDeleting(false);
    }
  };

  return (
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

        {message && (
          <Alert variant={message.includes('success') ? 'success' : 'danger'}>
            {message}
          </Alert>
        )}

        <Button
          variant="danger"
          size="sm"
          onClick={handleDelete}
          disabled={isDeleting}
        >
          {isDeleting ? 'Deleting...' : 'Remove From Cart'}
        </Button>
      </Card.Body>
    </Card>
  );
};

export default CartCard;
