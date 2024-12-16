import { getServerSession } from 'next-auth';
import { Col, Container, Row, Table } from 'react-bootstrap';
import AdminProductRender from '@/components/AdminProductRender';
import { prisma } from '@/lib/prisma';
import { adminProtectedPage } from '@/lib/page-protection';
import authOptions from '@/lib/authOptions';
import React from 'react';
// import CustomOrder from '../custom/page';

const AdminPage = async () => {
  const session = await getServerSession(authOptions);
  adminProtectedPage(
    session as {
      user: { email: string; id: string; randomKey: string };
    } | null,
  );

  const users = await prisma.user.findMany({});
  const products = await prisma.product.findMany({
    where: { checkedout: true },
  });
  const customs = await prisma.custom_Orders.findMany({});

  return (
    <main>
      <Container id="list" fluid className="py-3">
        <Row>
          <Col>
            <h1 className="pt-5">Checked out user products</h1>
            <hr
              style={{
                border: 'none',
                height: '5px',
                background: 'linear-gradient(to right, #ddd, #bbb, #ddd)',
                margin: '25px 0',
                width: '900px',
              }}
            />
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Owner</th>
                  <th>Option</th>
                  <th>Size</th>
                  <th>Primary Color</th>
                  <th>Secondary Color</th>
                  <th>Tertiary Color</th>
                  <th>Quantity</th>
                  <th>Edit Product</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <React.Fragment key={user.id}>
                    {/* inserts row per user in the database */}
                    <tr>
                      <td colSpan={8}>
                        <strong>{user.email}</strong>
                      </td>
                    </tr>
                    {/* should display all products where the owner fits the user.email property of above */}
                    {products
                      .filter((product) => product.owner === user.email) // product filtering by email
                      .map((product) => (
                        <AdminProductRender key={product.id} {...product} />
                      ))}
                  </React.Fragment>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
        <hr
          style={{
            border: 'none',
            height: '2px',
            background: 'linear-gradient(to right, #ddd, #bbb, #ddd)',
            margin: '25px 0',
          }}
        />
        <Row>
          <Col>
            <h1 className="pt-5">Registered users list</h1>
            <hr
              style={{
                border: 'none',
                height: '5px',
                background: 'linear-gradient(to right, #ddd, #bbb, #ddd)',
                margin: '25px 0',
                width: '900px',
              }}
            />
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Email</th>
                  <th>Role</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id}>
                    <td>{user.email}</td>
                    <td>{user.role}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
        <hr
          style={{
            border: 'none',
            height: '2px',
            background: 'linear-gradient(to right, #ddd, #bbb, #ddd)',
            margin: '25px 0',
          }}
        />
        <Row>
          <Col>
            <h1 className="pt-5">Custom Orders</h1>
            <hr
              style={{
                border: 'none',
                height: '5px',
                background: 'linear-gradient(to right, #ddd, #bbb, #ddd)',
                margin: '25px 0',
                width: '900px',
              }}
            />
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Description</th>
                  <th>Mat 1</th>
                  <th>Mat 2</th>
                  <th>Mat 3</th>
                  <th>Type</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <React.Fragment key={user.id}>
                    {/* inserts row per user in the database */}
                    <tr>
                      <td colSpan={8}>
                        <strong>{user.email}</strong>
                      </td>
                    </tr>
                    {/* should display all products where the owner fits the user.email property of above */}
                    {customs
                      .filter((custom) => custom.user === user.email) // product filtering by email
                      .map((custom) => (
                        <tr key={custom.id}>
                          <td>{custom.description}</td>
                          <td>{custom.material1}</td>
                          <td>{custom.material2}</td>
                          <td>{custom.material3}</td>
                          <td>{custom.type}</td>
                        </tr>
                      ))}
                  </React.Fragment>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default AdminPage;
