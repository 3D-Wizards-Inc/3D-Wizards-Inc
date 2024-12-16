import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const BusinessPage = async () => (
  <main>
    <Container id="about-us" fluid className="py-3">
      <Row className="justify-content-center align-items-center m-3">
        <Col md={8}>
          <h1 className="py-4">Why Choose Us?</h1>
          <h6>
            If your business requires regularly produced 3D printed products,
            you may be in luck.
            <br />
            We already have several clients that can vouch for our reliability and the quality of our product.
            <br />
            A benefit of working with a local 3D printing service is that overseas
            shipping times and costs arent a factor to overcome, simply wait for us to
            drive over from Ewa at a schedule of your preference.
            <br />
            <br />
            Please reach out at
            the following email if you’d like more information including,
            but not limited to, our wholesale prices.
          </h6>
          <h5>
            <a href="mailto:3dwizardsinc@gmail.com">3dwizardsinc@gmail.com</a>
          </h5>
        </Col>
      </Row>
    </Container>
  </main>
);

export default BusinessPage;
