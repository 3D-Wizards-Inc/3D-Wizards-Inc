'use client';

import React, { useState } from 'react';
import { Container, Row, Col, Card, Form} from 'react-bootstrap';

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
  image: string[];
  size: { min: number; max: number };
  pickupInperson?: boolean;
};

const crystal: Product = {
  name: 'Crystal Dragon',
  type: 'Dragon',
  dragon: true,
  primaryColor: ['red', 'blue'], // Array of color names
  secondaryColor: ['red', 'blue'], // Array of color names
  price: '$25',
  image: ['/images/3d-wizards-lowres.png'],
  size: { // Adjustable size range
    min: 0.5, // Minimum size
    max: 1.2, // Maximum size
  },
};

const CrystalPage = () => {
  const [size, setSize] = useState('');
  const [selectedPrimaryColors, handlePrimaryColorChange] = useState<string[]>([]);
  const [selectedSecondaryColors, handleSecondaryColorChange] = useState<string[]>([]);
  const [selectedThirdColors, handleThirdColorChange] = useState<string[]>([]);

  // Filters the ferret data based on size and color
  const sizeFilter = size
    ? parseFloat(size) >= crystal.size.min && parseFloat(size) <= crystal.size.max
    : true;

  const primaryColorFilter =
    selectedPrimaryColors.length === 0 ||
    selectedPrimaryColors.some((color) => crystal.primaryColor.includes(color));

  const secondaryColorFilter =
    selectedSecondaryColors.length === 0 ||
    selectedSecondaryColors.some((color) => crystal.secondaryColor?.includes(color));

  const thirdColorFilter =
    selectedThirdColors.length === 0 ||
    selectedThirdColors.some((color) => crystal.thirdColor?.includes(color));

  const displayedCrystal = sizeFilter && primaryColorFilter && secondaryColorFilter && thirdColorFilter;

  return (
    <Container fluid>
      <Row>
        {/* Sidebar */}
        <Col md={3} className="border-end">
          <h4>Crystal Dragon Details, Price: {crystal.price}
          </h4>
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
          <h5 className="mt-4">Size</h5>
          <form>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Size in range of 0.5 to 1.2"
                value={size}
                onChange={(e) => setSize(e.target.value)}
              />
              <button className="btn btn-dark" type="submit" onClick={(e) => e.preventDefault()}>
                Enter
              </button>
            </div>
          </form>
        </Col>

        {/* Ferret Info */}
        <Col md={9}>
          <Row>
            <Col className="d-flex justify-content-between align-items-center mb-3">
              <Card.Img variant="top" src={crystal.image} />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default CrystalPage;
