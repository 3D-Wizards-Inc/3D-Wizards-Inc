'use client';

import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
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
    image: '',
    redirect: '',
    size: {
      // Adjustable size range
      min: 0.5, // Minimum size
      max: 1.2, // Maximum size
    },
    pickupInperson: true,
  },
  {
    id: 2,
    name: 'Mech dragon',
    type: 'dragon',
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
  // add adjustable price later dont know how to make without making a new
  {
    id: 3,
    name: 'Baby dragon',
    type: 'dragon',
    dragon: true,
    primaryColor: ['red', 'blue', 'green'], // Array of color names
    secondaryColor: ['red', 'blue', 'green'], // Array of color names
    thirdColor: ['red', 'blue'], // Array of color names
    basePrice: '$10',
    image: '',
    redirect: '',
    size: {
      // Adjustable size range
      min: 0.5, // Minimum size
      max: 1.2, // Maximum size
    },
    egg: false,
  },
  {
    id: 4,
    name: 'Frog',
    type: 'animal',
    animal: true,
    primaryColor: ['red', 'blue'], // Array of color names
    secondaryColor: [], // Array of color names
    thirdColor: [],
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
    redirect: '',
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
    image: '',
    redirect: '',
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
    id: 10,
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
    id: 11,
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
  const [size, setSize] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPrimaryColors, setSelectedPrimaryColors] = useState<string[]>([]);
  const [selectedSecondaryColors, setSelectedSecondaryColors] = useState<string[]>([]);
  const [selectedThirdColors, setSelectedThirdColors] = useState<string[]>([]);
  // Handle primary color checkbox toggle
  const handlePrimaryColorChange = (color: string) => {
    setSelectedPrimaryColors((prevColors) => {
      if (prevColors.includes(color)) {
        // Remove color if unchecked
        return prevColors.filter((c) => c !== color);
      }
      // Add color if checked
      return [...prevColors, color];
    });
  };

  const handleSecondaryColorChange = (color: string) => {
    setSelectedSecondaryColors((prevColors) => {
      if (prevColors.includes(color)) {
        // Remove color if unchecked
        return prevColors.filter((c) => c !== color);
      }
      // Add color if checked
      return [...prevColors, color];
    });
  };

  const handleThirdColorChange = (color: string) => {
    setSelectedThirdColors((prevColors) => {
      if (prevColors.includes(color)) {
        // Remove color if unchecked
        return prevColors.filter((c) => c !== color);
      }
      // Add color if checked
      return [...prevColors, color];
    });
  };
  /* allows for multiple filters */
  const displayedProducts = products.filter((product) => {
    const searchFilter = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const sizeFilter = size ? parseFloat(size) >= product.size.min && parseFloat(size) <= product.size.max : true;

    // eslint-disable-next-line max-len
    const primaryColorFilter = selectedPrimaryColors.length === 0;
    // || selectedPrimaryColors.some((color) => product.primaryColor.includes(color));

    const secondaryColorFilter = selectedSecondaryColors.length === 0;
    // || selectedSecondaryColors.some((color) => product.secondaryColor?.includes(color));

    // eslint-disable-next-line max-len
    const thirdColorFilter = true;
    // selectedThirdColors.length === 0 || selectedThirdColors.some((color) => product.thirdColor?.includes(color));

    return searchFilter && sizeFilter && primaryColorFilter && secondaryColorFilter && thirdColorFilter;
  });

  return (
    <Container fluid>
      <Row>
        {/* Sidebar */}
        <Col md={3} className="border-end">
          {/* Does nothing */}
          <h5 className="mt-4">Categories</h5>
          <ul className="list-unstyled">
            <Link href="/store/cart" passHref>
              <Button variant="link" className="d-flex align-items-center">
                Cart
              </Button>
            </Link>
            {/* Link to the nested folder */}
            <Link href="/store/dragon" passHref>
              <Button variant="link">Dragon</Button>
            </Link>
            <Link href="/store/animal" passHref>
              <Button variant="link">Animal</Button>
            </Link>
            <Link href="/store/person" passHref>
              <Button variant="link">Person</Button>
            </Link>
            <Link href="/store/bengal" passHref>
              <Button variant="link">Bengal Temp</Button>
            </Link>
          </ul>
          <h5 className="mt-4">Primary Colors</h5>
          <Form.Check
            label="Blue"
            checked={selectedPrimaryColors.includes('blue')}
            onChange={() => handlePrimaryColorChange('blue')}
          />
          <Form.Check
            label="Red"
            checked={selectedPrimaryColors.includes('red')}
            onChange={() => handlePrimaryColorChange('red')}
          />
          <Form.Check
            label="Green"
            checked={selectedPrimaryColors.includes('green')}
            onChange={() => handlePrimaryColorChange('green')}
          />
          <h5 className="mt-4">Secondary Colors</h5>
          <Form.Check
            label="Blue"
            checked={selectedSecondaryColors.includes('blue')}
            onChange={() => handleSecondaryColorChange('blue')}
          />
          <Form.Check
            label="Red"
            checked={selectedSecondaryColors.includes('red')}
            onChange={() => handleSecondaryColorChange('red')}
          />
          <Form.Check
            label="Green"
            checked={selectedSecondaryColors.includes('green')}
            onChange={() => handleSecondaryColorChange('green')}
          />
          <h5 className="mt-4">Third Colors</h5>
          <Form.Check
            label="Blue"
            checked={selectedThirdColors.includes('blue')}
            onChange={() => handleThirdColorChange('blue')}
          />
          <Form.Check
            label="Red"
            checked={selectedThirdColors.includes('red')}
            onChange={() => handleThirdColorChange('red')}
          />
          <Form.Check
            label="Green"
            checked={selectedThirdColors.includes('green')}
            onChange={() => handleThirdColorChange('green')}
          />
          {/* Search bar doesn't work */}
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
          <h5 className="mt-4">Size</h5>
          <form>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Size in range of 0.5 to 1.2"
                value={size}
                aria-label="Search"
                onChange={(e) => setSize(e.target.value)}
              />
              <button className="btn btn-dark" type="submit" onClick={(e) => e.preventDefault()}>
                Enter
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
                  <Card.Img variant="top" src={product.image} />
                  <Card.Body>
                    <Link href={`/store/${product.redirect}`} passHref>
                      <Card.Title>{product.name}</Card.Title>
                    </Link>
                    <Card.Text>{product.type}</Card.Text>
                    {/* for testing remove before product */}
                    <Card.Text>
                      {product.primaryColor}
                      ,PrimaryList
                    </Card.Text>
                    <Card.Text>
                      {product.secondaryColor}
                      ,SecondaryList
                    </Card.Text>
                    <Card.Text>
                      {product.thirdColor}
                      ,ThirdList
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
};

export default StorePage;
