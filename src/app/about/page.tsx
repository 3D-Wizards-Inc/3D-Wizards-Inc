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
              <Image src="/images/3d-wizards-lowres.png" alt="Voxel" width="240" height="240" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
              </p>
            </Col>
          </Row>
          <Row className="mb-4">
            <Col className="d-flex align-items-center">
              <Image src="/images/3d-wizards-lowres.png" alt="Voxel" width="240" height="240" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
              </p>
            </Col>
          </Row>
          <Row className="mb-4">
            <Col className="d-flex align-items-center">
              <Image src="/images/3d-wizards-lowres.png" alt="Voxel" width="240" height="240" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
              </p>
            </Col>
          </Row>
          <Row className="mb-4">
            <Col className="d-flex align-items-center">
              <Image src="/images/3d-wizards-lowres.png" alt="Voxel" width="240" height="240" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
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
