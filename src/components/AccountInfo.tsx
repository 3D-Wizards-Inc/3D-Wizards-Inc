'use client';

import { useSession } from 'next-auth/react';
import { Col, Container, Row } from 'react-bootstrap';
import { redirect } from 'next/navigation';
import LoadingSpinner from '@/components/LoadingSpinner';

const AccountInfo: React.FC = () => {
  const { data: session, status } = useSession();
  // console.log('AddStuffForm', status, session);
  const currentUser = session?.user?.email || '';
  if (status === 'loading') {
    return <LoadingSpinner />;
  }
  if (status === 'unauthenticated') {
    redirect('/auth/signin');
  }

  return (
    <Container id="account-page" fluid className="py-3">
      <Row className="justify-content-center align-items-center m-3">
        <Col md={8}>
          <h3>Account: </h3>
          {currentUser}
        </Col>
      </Row>
      <Row className="justify-content-center align-items-center m-3">
        <Col md={8}>
          <h3 className="py-4">Purchase History</h3>
          <p>
            Purchase history list here:
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default AccountInfo;
