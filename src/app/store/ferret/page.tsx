'use client';

import React from 'react';
import { Container, Button, Row, Col, Card, Form } from 'react-bootstrap';
import { yupResolver } from '@hookform/resolvers/yup';
import { redirect } from 'next/navigation';
import { Color, Option, Size } from '@prisma/client';
import { addProduct } from '@/lib/dbActions';
import { AddProductSchema } from '@/lib/validationSchemas';
import swal from 'sweetalert';
import { useSession } from 'next-auth/react';
import { useForm } from 'react-hook-form';
import LoadingSpinner from '@/components/LoadingSpinner';

const onSubmit = async (data: {
  option: Option;
  size: Size;
  color1: Color;
  color2: Color;
  color3: Color;
  quantity: number;
  owner: string;
}) => {
  await addProduct(data);
  swal('Success', 'Your item has been added', 'success', {
    timer: 2000,
  });
};

/* Product data maybe tie to db later */
type Product = {
  name: string;
  type: string;
  dragon?: boolean;
  animal?: boolean;
  egg?: boolean;
  person?: boolean;
  primaryColor: string[];
  secondaryColor?: string[];
  thirdColor?: string[];
  price?: string;
  basePrice?: string;
  image: string;
  size: { min: number; max: number };
  pickupInperson?: boolean;
};

const ferret: Product = {
  name: 'Ferret',
  type: 'animal',
  animal: true,
  primaryColor: ['red', 'blue'], // Array of color names
  secondaryColor: [], // Array of color names
  thirdColor: [],
  price: '$30',
  image: '', // array of images depending on the color selected
  size: {
    min: 0.5, // Minimum size
    max: 1.2, // Maximum size
  },
};

const FerretPage: React.FC = () => {
  const { data: session, status } = useSession();
  const currentUser = session?.user?.email || '';
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(AddProductSchema),
  });
  if (status === 'loading') {
    return <LoadingSpinner />;
  }
  if (status === 'unauthenticated') {
    redirect('/auth/signin');
  }

  return (
    <Container fluid>
      <Row className="mt-4">
        {/* Image Section */}
        <Col md={6} className="d-flex justify-content-center align-items-center">
          <Card className="border-0">
            <Card.Img
              variant="top"
              src={ferret.image}
              alt={ferret.name}
              className="img-fluid"
              style={{ height: '500px' }}
            />
          </Card>
        </Col>

        {/* Details Section */}
        <Col md={6}>
          <h1>{ferret.name}</h1>
          <h2>{ferret.price}</h2>
          <hr />
          <Form onSubmit={handleSubmit(onSubmit)}>
            <h5 className="mt-4">Primary Colors</h5>
            <Form.Group controlId="primaryColors">
              <Form.Label>Select Primary Color</Form.Label>
              <select {...register('color1')} className={`form-control ${errors.color1 ? 'is-invalid' : ''}`}>
                <option value="red">Red</option>
                <option value="pink">Pink</option>
                <option value="orange">Orange</option>
                <option value="yellow">Yellow</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
                <option value="purple">Purple</option>
                <option value="brown">Brown</option>
                <option value="black">Black</option>
                <option value="gray">Gray</option>
                <option value="white">White</option>
              </select>
              <div className="invalid-feedback">{errors.color1?.message}</div>
            </Form.Group>

            <h5 className="mt-4">Secondary Colors</h5>
            <Form.Group controlId="secondaryColors">
              <Form.Label>Select Secondary Color</Form.Label>
              <select {...register('color2')} className={`form-control ${errors.color2 ? 'is-invalid' : ''}`}>
                <option value="red">Red</option>
                <option value="pink">Pink</option>
                <option value="orange">Orange</option>
                <option value="yellow">Yellow</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
                <option value="purple">Purple</option>
                <option value="brown">Brown</option>
                <option value="black">Black</option>
                <option value="gray">Gray</option>
                <option value="white">White</option>
              </select>
              <div className="invalid-feedback">{errors.color2?.message}</div>
            </Form.Group>

            <h5 className="mt-4">Third Colors</h5>
            <Form.Group controlId="thirdColors">
              <Form.Label>Select Third Color</Form.Label>
              <select {...register('color3')} className={`form-control ${errors.color3 ? 'is-invalid' : ''}`}>
                <option value="red">Red</option>
                <option value="pink">Pink</option>
                <option value="orange">Orange</option>
                <option value="yellow">Yellow</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
                <option value="purple">Purple</option>
                <option value="brown">Brown</option>
                <option value="black">Black</option>
                <option value="gray">Gray</option>
                <option value="white">White</option>
              </select>
              <div className="invalid-feedback">{errors.color3?.message}</div>
            </Form.Group>

            <h5 className="mt-3">Size</h5>
            <Form.Group controlId="size">
              <Form.Label>Select Size</Form.Label>
              <select {...register('size')} className={`form-control ${errors.size ? 'is-invalid' : ''}`}>
                <option value="x0_5">0.5</option>
                <option value="x1">1</option>
                <option value="x2">2</option>
                <option value="x3">3</option>
              </select>
              <div className="invalid-feedback">{errors.size?.message}</div>
            </Form.Group>
            <h5 className="mt-3">Quantity</h5>
            <Form.Group controlId="quantity">
              <Form.Label>Select Quantity</Form.Label>
              <select {...register('quantity')} className={`form-control ${errors.quantity ? 'is-invalid' : ''}`}>
                {Array.from({ length: 10 }, (_, i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
                <option value="10+">10+</option>
              </select>
              <div className="invalid-feedback">{errors.quantity?.message}</div>
            </Form.Group>
            {/* Hidden inputs */}
            <input type="hidden" {...register('owner')} value={currentUser} />
            <input type="hidden" {...register('option')} value="FERRET" />
            <input type="hidden" {...register('quantity')} value={1} />
            <Form.Group className="form-group">
              <Row className="pt-3">
                <Col>
                  <Button type="submit" variant="primary">
                    Add to Cart
                  </Button>
                </Col>
              </Row>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default FerretPage;
