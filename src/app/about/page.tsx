import { Container, Row, Col, Image } from 'react-bootstrap';

const AboutUsPage = async () => (
  <main>
    <Container id="about-us" fluid className="py-3">
      <Row className="justify-content-center align-items-center m-3">
        <Col md={8}>
          <h3 className="py-4">Our Mission</h3>
          <p>
            We’re 3D Wizards, not 3D chumps! That’s the attitude we have in approaching any and all 3D printing
            challenges or projects. We have almost 2 decades of combined additive manufacturing experience on our team
            and we intend to share that knowledge and skills.
          </p>
        </Col>
      </Row>
      <Row className="justify-content-center align-items-center m-3">
        <Col md={8}>
          <h3 className="py-4">Our History</h3>
          <p>
            3D Wizards was born in the garage of Tom with the help of his classmate Aaron. Together they spent a
            semester working together with several 3D printers to build a larger more powerful printer. They were
            successful, but more importantly, along the way, they fell in love with and got invaluable knowledge and
            expertise about 3D printing.
          </p>
        </Col>
      </Row>
      <Row className="justify-content-center align-items-center m-3">
        <Col md={8}>
          <h3 className="py-4">Our Team</h3>
          <Row className="mb-4">
            <Col className="d-flex align-items-center">
              <Image src="/images/Tom.JPG" alt="Tom" width="240" height="320" />
              <h4>Tom</h4>
              <br />
              <p>
                Team Lead, Head of Product Design, Print Farm Manager
              </p>
            </Col>
          </Row>
          <Row className="mb-4">
            <Col className="d-flex align-items-center">
              <Image src="/images/Aaron.JPG" alt="Aaron" width="240" height="320" />
              <h4>Aaron</h4>
              <br />
              <p>
                Retail and Business relations Manager
              </p>
            </Col>
          </Row>
          <Row className="mb-4">
            <Col className="d-flex align-items-center">
              <Image src="/images/Jesse.JPG" alt="Jesse" width="240" height="320" />
              <h4>Jesse</h4>
              <br />
              <p>
                Employee Manager
              </p>
            </Col>
          </Row>
          <Row className="mb-4">
            <Col className="d-flex align-items-center">
              <Image src="/images/David.JPG" alt="David" width="240" height="320" />
              <h4>David</h4>
              <br />
              <p>
                Retail Associate and Printer technician
              </p>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="justify-content-center align-items-center m-3">
        <Col md={8}>
          <h3 className="py-4">Future plans</h3>
          <p>
            We love custom work. Helping our clients turn their dreams into a physical reality brings us immense joy
            because we know no one else has the proper expertise. From cosplay to context-specific tools to custom fit
            parts, we know we can turn around prototypes and final projects quicker and of higher quality than any of
            our competitors. That is, we’re quicker when we aren’t bogged down with the responsibilities of building a
            start-up from our garage. Ideally, once we’re less worried about keeping up with base-product demands.
          </p>
        </Col>
      </Row>
    </Container>
  </main>
);

export default AboutUsPage;
