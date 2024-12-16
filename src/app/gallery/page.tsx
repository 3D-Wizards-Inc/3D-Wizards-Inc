'use client';

import { Container, Col, Row, Card } from 'react-bootstrap';

const Gallery = () => {
  const images = [
    { id: 1, url: '/images/Gall_1.jpg' },
    { id: 2, url: '/images/Gall_2.jpg' },
    { id: 3, url: '/images/Gall_3.jpg' },
    { id: 4, url: '/images/Gall_4.jpg' },
    { id: 5, url: '/images/Gall_5.jpg' },
    { id: 6, url: '/images/Gall_6.jpg' },
    { id: 7, url: '/images/Gall_7.jpg' },
    { id: 8, url: '/images/Gall_8.jpg' },
    { id: 9, url: '/images/Gall_9.JPG' },
    { id: 10, url: '/images/Gall_10.JPG' },
    { id: 11, url: '/images/Gall_11.JPG' },
    { id: 12, url: '/images/Gall_12.JPG' },
  ];

  return (
    <main>
      <Container>
        <Row className="p-4 align-middle text-center">
          <Col>
            <h1 className="mb-3">Gallery</h1>
            <br />
            <h6 className="mb-5">
              <p>
                We attend over 50 events per month and have a lot of fun doing so.
                We also regularly work on complicated custom orders.
                <br />
                Check out what we’ve been up to
              </p>
            </h6>
          </Col>
        </Row>
        <Row xs={2} md={3} lg={4} className="g-4">
          {images.map((image) => (
            <Col key={image.id}>
              <Card>
                <Card.Img
                  variant="top"
                  src={image.url}
                  alt={`Gallery image ${image.id}`}
                  className="rounded-2 aspect"
                />
              </Card>
            </Col>
          ))}
        </Row>
        <div className="empty-block" />
      </Container>
    </main>
  );
};

export default Gallery;
