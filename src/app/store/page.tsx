'use client';

import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Link from 'next/link';

/* Product data maybe tie to db later */
type Product = {
  id: number;
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
  redirect: string;
  size: { min: number; max: number };
  pickupInperson?: boolean;
};

const products: Product[] = [
  {
    id: 1, // Needs to be diff or breaks code completely
    name: 'Crystal Dragon',
    type: 'dragon',
    dragon: true,
    primaryColor: ['red', 'blue', 'green'], // Array of color names
    secondaryColor: ['red', 'blue'], // Array of color names
    thirdColor: [],
    price: '$25',
    image: '/images/Products/crystaldragon_blackgold_1.jpg',
    redirect: 'crystaldragon',
    size: {
      // Adjustable size range
      min: 0.5, // Minimum size
      max: 1.2, // Maximum size
    },
    pickupInperson: true,
  },
  {
    id: 2, // Needs to be diff or breaks code completely
    name: 'Winged Crystal Dragon',
    type: 'dragon',
    dragon: true,
    primaryColor: ['red', 'blue', 'green'], // Array of color names
    secondaryColor: ['red', 'blue'], // Array of color names
    thirdColor: [],
    price: '$25',
    image: '/images/Products/wingedcrystal_blueshimmer_1.jpg',
    redirect: 'wingedcrystal',
    size: {
      // Adjustable size range
      min: 0.5, // Minimum size
      max: 1.2, // Maximum size
    },
    pickupInperson: true,
  },
  {
    id: 3,
    name: 'Mech dragon',
    type: 'dragon',
    dragon: true,
    primaryColor: ['red', 'blue'], // Array of color names
    secondaryColor: [], // Array of color names
    thirdColor: [],
    price: '$25',
    image: '/images/Products/mechanical_dragon_blk_1.jpg',
    redirect: 'mechdragon',
    size: {
      // Adjustable size range
      min: 0.5, // Minimum size
      max: 1.2, // Maximum size
    },
  },
  // add adjustable price later dont know how to make without making a new
  {
    id: 4,
    name: 'Frog',
    type: 'animal',
    animal: true,
    primaryColor: ['red', 'blue'], // Array of color names
    secondaryColor: [], // Array of color names
    thirdColor: [],
    price: '$10',
    image: '/images/Products/frog_gradiant_1.jpg',
    redirect: 'frog',
    size: {
      // Adjustable size range
      min: 0.5, // Minimum size
      max: 1.2, // Maximum size
    },
  },
  {
    id: 5,
    name: 'Axolotl',
    type: 'animal',
    animal: true,
    primaryColor: ['red', 'blue'], // Array of color names
    secondaryColor: [], // Array of color names
    thirdColor: [],
    price: '$20',
    image: '/images/Products/axolotl_pink_1.jpg',
    redirect: 'axolotl',
    size: {
      // Adjustable size range
      min: 0.5, // Minimum size
      max: 1.2, // Maximum size
    },
  },
  {
    id: 6,
    name: 'Gecko',
    type: 'animal',
    animal: true,
    primaryColor: ['red', 'blue'], // Array of color names
    secondaryColor: [], // Array of color names
    thirdColor: [],
    price: '$20',
    image: '',
    redirect: 'gecko',
    size: {
      // Adjustable size range
      min: 0.5, // Minimum size
      max: 1.2, // Maximum size
    },
  },
  {
    id: 7,
    name: 'Rat',
    type: 'animal',
    animal: true,
    primaryColor: ['red', 'blue'], // Array of color names
    secondaryColor: [], // Array of color names
    thirdColor: [],
    price: '$25',
    image: '/images/Products/rat_brwnpnk_1.jpg',
    redirect: 'rat',
    size: {
      // Adjustable size range
      min: 0.5, // Minimum size
      max: 1.2, // Maximum size
    },
  },
  {
    id: 8,
    name: 'Ferret',
    type: 'animal',
    animal: true,
    primaryColor: ['red', 'blue'], // Array of color names
    secondaryColor: [], // Array of color names
    thirdColor: [],
    price: '$30',
    image: '',
    redirect: '',
    size: {
      // Adjustable size range
      min: 0.5, // Minimum size
      max: 1.2, // Maximum size
    },
  },
  {
    id: 9,
    name: 'Bengal',
    type: 'animal',
    animal: true,
    primaryColor: ['red', 'blue'], // Array of color names
    secondaryColor: [], // Array of color names
    thirdColor: [],
    price: '$35',
    image: '/images/Products/bengal_1.jpg',
    redirect: 'bengal',
    size: {
      // Adjustable size range
      min: 0.5, // Minimum size
      max: 1.2, // Maximum size
    },
  },
  {
    id: 10,
    name: 'Imperial Dragon',
    type: 'animal',
    dragon: true,
    primaryColor: ['red', 'blue'], // Array of color names
    secondaryColor: [], // Array of color names
    thirdColor: [],
    price: '$25',
    image: '',
    redirect: '',
    size: {
      // Adjustable size range
      min: 0.5, // Minimum size
      max: 1.2, // Maximum size
    },
  },
  {
    id: 11,
    name: 'Knight',
    type: 'animal',
    person: true,
    primaryColor: ['red', 'blue'], // Array of color names
    secondaryColor: ['red', 'blue'], // Array of color names
    thirdColor: ['red', 'blue'], // Array of color names
    price: '$20',
    image: '',
    redirect: '',
    size: {
      // Adjustable size range
      min: 0.5, // Minimum size
      max: 1.2, // Maximum size
    },
  },
  {
    id: 12,
    name: 'Samurai',
    type: 'animal',
    person: true,
    primaryColor: ['red', 'blue'], // Array of color names
    secondaryColor: ['red', 'blue'], // Array of color names
    thirdColor: ['red', 'blue', 'green'], // Array of color names
    price: '$20',
    image: '',
    redirect: '',
    size: {
      // Adjustable size range
      min: 0.5, // Minimum size
      max: 1.2, // Maximum size
    },
  },
];

const StorePage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const displayedProducts = products.filter((product) => {
    const searchFilter = product.name.toLowerCase().includes(searchTerm.toLowerCase());

    return searchFilter;
  });

  return (
    <Container fluid>
      <Row>
        {/* Sidebar */}
        <Col md={3} className="border-end">
          {/* Does nothing */}
          <ul className="list-unstyled">
            <Link href="/auth/cart" passHref>
              <Button variant="link" className="d-flex align-items-center">
                Cart
              </Button>
            </Link>
          </ul>
          <h5 className="mt-4">Search</h5>
          <form
            onSubmit={(e) => {
              e.preventDefault(); // Prevent page reload on Enter
            }}
          >
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Product Name"
                value={searchTerm}
                aria-label="Search"
                onChange={(e) => setSearchTerm(e.target.value)} // Update search term
              />
              <button className="btn btn-dark" type="submit">
                Search
              </button>
            </div>
          </form>
        </Col>

        {/* Product Grid */}
        <Col md={9}>
          <Row>
            <Col className="d-flex justify-content-between align-items-center mb-3">
              <h4>Items</h4>
            </Col>
          </Row>
          <Row>
            {/* Each "Product" info image, name, cost, etc */}
            {displayedProducts.map((product) => (
              <Col md={4} key={product.id} className="mb-4">
                <Card>
                  <Card.Img
                    variant="top"
                    src={product.image}
                    style={{
                      width: '100%', // Ensures it takes the full width of the card
                      height: '300px', // Sets a fixed height
                      objectFit: 'cover', // Maintains aspect ratio and fills the area
                    }}
                  />
                  <Card.Body>
                    <Link href={`/store/${product.redirect}`} passHref>
                      <Card.Title>{product.name}</Card.Title>
                    </Link>
                    <Card.Text>{product.type}</Card.Text>
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
};

export default StorePage;
