import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const BusinessPage = async () => (
  <main>
    <Container id="about-us" fluid className="py-3">
      <Row className="justify-content-center align-items-center m-3">
        <Col md={8}>
          <h3 className="py-4">Business Inquiries Placeholder</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident,
            sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </Col>
      </Row>
    </Container>
  </main>
);

export default BusinessPage;
