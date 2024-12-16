/* eslint-disable max-len */

'use client';

import { Col, Container, Row } from 'react-bootstrap';
import Slideshow from '../components/Slideshow';

/** The Home page. */
const Home = () => {
  const images = [
    '/images/Slide_1.JPG',
    '/images/Slide_2.JPG',
    '/images/Slide_3.JPG',
    '/images/Slide_4.JPG', // Add your images here
  ];

  const headingStyle = {
    fontFamily: 'Arial, sans-serif', // Change font
    marginTop: '20px', // Add space from the slideshow
  };

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
            <h3 style={headingStyle}>With more than 100 printers running 24/7, we’re the largest printer farm in Hawaii!</h3>
          </Col>

          <Col xs={4}>
            <h3 style={headingStyle}>
              With more than a decade and a half of combined 3d printing knowledge,
              we have expertise that we’re excited to share!
              {' '}
            </h3>
          </Col>

          <Col xs={4}>
            <h3 style={headingStyle}> Find us in person at 50+ events around the island every month, use code #NewWebsite to get %10 off</h3>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default Home;
