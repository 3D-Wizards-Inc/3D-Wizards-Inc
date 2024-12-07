'use client';

import { Container, Row, Col, Card } from 'react-bootstrap';

/* Filter top seller products */
/* Product data maybe tie to db later */
const products = [
  {
    id: 1,
    name: 'Crystal Dragon',
    dragon: true,
    primaryColor: ['red', 'blue'], // Array of color names
    secondaryColor: ['red', 'blue'], // Array of color names
    price: '$25',
    image: '/images/3d-wizards-lowres.png',
    size: { // Adjustable size range
      min: 0.5, // Minimum size
      max: 1.2, // Maximum size
    },
  },
  {
    id: 2,
    name: 'Mech dragon',
    dragon: true,
    primaryColor: ['red', 'blue'], // Array of color names
    price: '$25',
    image: '/images/3d-wizards-lowres.png',
    size: { // Adjustable size range
      min: 0.5, // Minimum size
      max: 1.2, // Maximum size
    },
  },
  // add adjustable price later
  {
    id: 3,
    name: 'Baby dragon',
    dragon: true,
    primaryColor: ['red', 'blue'], // Array of color names
    secondaryColor: ['red', 'blue'], // Array of color names
    thirdColor: ['red', 'blue'], // Array of color names
    basePrice: '$20',
    image: '/images/3d-wizards-lowres.png',
    size: { // Adjustable size range
      min: 0.5, // Minimum size
      max: 1.2, // Maximum size
    },
    egg: false,
  },
  {
    id: 4,
    name: 'Frog',
    animal: true,
    primaryColor: ['red', 'blue'], // Array of color names
    price: '$20',
    image: '/images/3d-wizards-lowres.png',
    size: { // Adjustable size range
      min: 0.5, // Minimum size
      max: 1.2, // Maximum size
    },
  },
  {
    id: 5,
    name: 'Axolotl',
    animal: true,
    primaryColor: ['red', 'blue'], // Array of color names
    price: '$20',
    image: '/images/3d-wizards-lowres.png',
    size: { // Adjustable size range
      min: 0.5, // Minimum size
      max: 1.2, // Maximum size
    },
  },
  {
    id: 6,
    name: 'Gecko',
    animal: true,
    primaryColor: ['red', 'blue'], // Array of color names
    price: '$20',
    image: '/images/3d-wizards-lowres.png',
    size: { // Adjustable size range
      min: 0.5, // Minimum size
      max: 1.2, // Maximum size
    },
  },
  {
    id: 7,
    name: 'Rat',
    animal: true,
    primaryColor: ['red', 'blue'], // Array of color names
    price: '$25',
    image: '/images/3d-wizards-lowres.png',
    size: { // Adjustable size range
      min: 0.5, // Minimum size
      max: 1.2, // Maximum size
    },
  },
  {
    id: 8,
    name: 'Ferret',
    animal: true,
    primaryColor: ['red', 'blue'], // Array of color names
    price: '$30',
    image: '/images/3d-wizards-lowres.png',
    size: { // Adjustable size range
      min: 0.5, // Minimum size
      max: 1.2, // Maximum size
    },
  },
  {
    id: 9,
    name: 'Imperial Dragon',
    dragon: true,
    primaryColor: ['red', 'blue'], // Array of color names
    price: '$25',
    image: '/images/3d-wizards-lowres.png',
    size: { // Adjustable size range
      min: 0.5, // Minimum size
      max: 1.2, // Maximum size
    },
  },
  {
    id: 9,
    name: 'Knight',
    person: true,
    primaryColor: ['red', 'blue'], // Array of color names
    secondaryColor: ['red', 'blue'], // Array of color names
    thirdColor: ['red', 'blue'], // Array of color names
    price: '$20',
    image: '/images/3d-wizards-lowres.png',
    size: { // Adjustable size range
      min: 0.5, // Minimum size
      max: 1.2, // Maximum size
    },
  },
  {
    id: 9,
    name: 'Samurai',
    person: true,
    primaryColor: ['red', 'blue'], // Array of color names
    secondaryColor: ['red', 'blue'], // Array of color names
    thirdColor: ['red', 'blue'], // Array of color names
    price: '$20',
    image: '/images/3d-wizards-lowres.png',
    size: { // Adjustable size range
      min: 0.5, // Minimum size
      max: 1.2, // Maximum size
    },
  },
].filter((product) => product.dragon);

const TopSellersPage = () => (
  <Container fluid>
    <Row>
      <Col>
        <Row className="d-flex justify-content-between align-items-center mb-3">
          <h4>Top Sellers</h4>
        </Row>
        <Row>
          {products
            .filter((product) => product.dragon) // Filter top sellers directly here if needed
            .map((product) => (
              <Col md={4} key={product.id} className="mb-4">
                <Card>
                  <Card.Img variant="top" src={product.image} />
                  <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>{product.dragon}</Card.Text>
                    <Card.Text>
                      {product.primaryColor}
                      Primary
                    </Card.Text>
                    <Card.Text>
                      {product.secondaryColor}
                      Secondary
                    </Card.Text>
                    <Card.Text>
                      {product.thirdColor}
                      Third
                    </Card.Text>
                    <Card.Text>{product.price}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
        </Row>
      </Col>
    </Row>
  </Container>
);

export default TopSellersPage;
