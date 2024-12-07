'use client';

import { Container, Col, Row, Card } from 'react-bootstrap';

const Gallery = () => {
  const images = [
    { id: 1, url: '/images/3d-wizards-lowres.png' },
    { id: 2, url: '/images/3d-wizards-lowres.png' },
    { id: 3, url: '/images/3d-wizards-lowres.png' },
    { id: 4, url: '/images/3d-wizards-lowres.png' },
    { id: 5, url: '/images/3d-wizards-lowres.png' },
    { id: 6, url: '/images/3d-wizards-lowres.png' },
    { id: 7, url: '/images/3d-wizards-lowres.png' },
    { id: 8, url: '/images/3d-wizards-lowres.png' },
    { id: 9, url: '/images/3d-wizards-lowres.png' },
    { id: 10, url: '/images/3d-wizards-lowres.png' },
    { id: 11, url: '/images/3d-wizards-lowres.png' },
    { id: 12, url: '/images/3d-wizards-lowres.png' },
  ];

  return (
    <main>
      <Container>
        <Row className="p-4 align-middle text-center">
          <Col>
            <h1 className="mb-3">Gallery</h1>
            <h5 className="mb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </h5>
          </Col>
        </Row>
        <Row xs={2} md={3} lg={4} className="g-4">
          {images.map((image) => (
            <Col key={image.id}>
              <Card>
                <Card.Img variant="top" src={image.url} alt={`Gallery image ${image.id}`} className="rounded-2" />
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </main>
  );
};

export default Gallery;
