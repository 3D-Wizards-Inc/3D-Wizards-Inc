'use client';

import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';
import { yupResolver } from '@hookform/resolvers/yup';
import { Product, Option, Size, Color } from '@prisma/client';
import { EditProductSchema } from '@/lib/validationSchemas';
import { editProduct } from '@/lib/dbActions';

const onSubmit = async (data: Product) => {
  // console.log(`onSubmit data: ${JSON.stringify(data, null, 2)}`);
  await editProduct(data);
  swal('Success', 'Your product has been updated', 'success', {
    timer: 2000,
  });
};

// size related option stuff
const allowedSizes = Object.values(Size);
const formatSize = (value: string) => value.replace('x', '').replace('_', '.'); // size formatting in option

// option (product) option stuff
const allowedOptions = Object.values(Option);
const formatOption = (option: string) => option // option enum formatting in option dropdown
  .split('_')
  .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
  .join(' ');

// color mapping
const allowedColors = Object.values(Color);

const EditProductForm = ({ product }: { product: Product }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Product>({
    resolver: yupResolver(EditProductSchema),
  });
  // console.log(stuff);

  return (
    <Container className="py-3">
      <Row className="justify-content-center">
        <Col xs={5}>
          <Col className="text-center">
            <h2>Edit Product</h2>
          </Col>
          <Card>
            <Card.Body>
              <Form onSubmit={handleSubmit(onSubmit)}>
                <input type="hidden" {...register('id')} value={product.id} />
                <Form.Group>
                  <Form.Label>Option</Form.Label>
                  <select
                    {...register('option')}
                    className={`form-control ${errors.option ? 'is-invalid' : ''}`}
                    defaultValue={product.option}
                  >
                    {allowedOptions.map((option) => ( // maps objects in prisma schema to option elements
                      <option key={option} value={option}>
                        {formatOption(option)}
                      </option>
                    ))}
                  </select>
                  <div className="invalid-feedback">{errors.option?.message}</div>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Size</Form.Label>
                  <select
                    {...register('size')}
                    className={`form-control ${errors.size ? 'is-invalid' : ''}`}
                    defaultValue={product.size}
                  >
                    {allowedSizes.map((size) => (
                      <option key={size} value={size}>
                        {formatSize(size)}
                      </option>
                    ))}
                  </select>
                  <div className="invalid-feedback">{errors.size?.message}</div>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Quantity</Form.Label>
                  <input
                    type="number"
                    {...register('quantity')}
                    defaultValue={product.quantity}
                    className={`form-control ${errors.quantity ? 'is-invalid' : ''}`}
                  />
                  <div className="invalid-feedback">{errors.quantity?.message}</div>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Primary Color</Form.Label>
                  <select
                    {...register('color1')}
                    className={`form-control ${errors.color1 ? 'is-invalid' : ''}`}
                    defaultValue={product.color1}
                  >
                    {allowedColors.map((color) => (
                      <option key={color} value={color}>
                        {color}
                      </option>
                    ))}
                  </select>
                  <div className="invalid-feedback">{errors.color1?.message}</div>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Secondary Color</Form.Label>
                  <select
                    {...register('color2')}
                    className={`form-control ${errors.color2 ? 'is-invalid' : ''}`}
                    defaultValue={product.color2}
                  >
                    {allowedColors.map((color) => (
                      <option key={color} value={color}>
                        {color}
                      </option>
                    ))}
                  </select>
                  <div className="invalid-feedback">{errors.color2?.message}</div>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Tertiary Color</Form.Label>
                  <select
                    {...register('color3')}
                    className={`form-control ${errors.color3 ? 'is-invalid' : ''}`}
                    defaultValue={product.color3}
                  >
                    {allowedColors.map((color) => (
                      <option key={color} value={color}>
                        {color}
                      </option>
                    ))}
                  </select>
                  <div className="invalid-feedback">{errors.color3?.message}</div>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Change checked out status</Form.Label>
                  <select
                    {...register('checkedout')}
                    className={`form-control ${errors.checkedout ? 'is-invalid' : ''}`}
                    defaultValue={String(product.checkedout)}
                  >
                    <option key="true" value="true">Checked out</option>
                    <option key="false" value="false">Not checked out</option>
                  </select>
                  <div className="invalid-feedback">{errors.color1?.message}</div>
                </Form.Group>
                <input type="hidden" {...register('owner')} value={product.owner} />
                <Form.Group className="form-group">
                  <Row className="pt-3">
                    <Col>
                      <Button type="submit" variant="primary">
                        Submit
                      </Button>
                    </Col>
                    <Col>
                      <Button type="button" onClick={() => reset()} variant="warning" className="float-right">
                        Reset
                      </Button>
                    </Col>
                  </Row>
                </Form.Group>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default EditProductForm;
