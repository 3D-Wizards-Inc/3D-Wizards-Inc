'use client';

import { Col, Container, Row } from 'react-bootstrap';
import Slideshow from '../components/Slideshow';

/** The Home page. */
const Home = () => {
  const images = [
    '/images/Slide_1.JPG',
    '/images/Slide_2.JPG',
    '/images/Slide_3.JPG', // Add your images here
  ];
  return (
    <main>
      <Container id="landing-page" fluid className="py-3">
        <Row className="align-middle text-center">
          <Col xs={12}>
            <Slideshow images={images} interval={7000} />

          </Col>
        </Row>
        <Row className="align-middle text-center">
          <Col xs={4}>
            <h1>With more than 100 printers running 24/7, we’re the largest printer farm in Hawaii!</h1>
          </Col>

          <Col xs={4}>
            <h1>
              With more than a decade and a half of combined 3d printing knowledge,
              we have expertise that we’re excited to share!
              {' '}
            </h1>
          </Col>

          <Col xs={4}>
            <h1> Find us in person at 50+ events around the island every month, use code #NewWebsite to get %10 off</h1>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default Home;
