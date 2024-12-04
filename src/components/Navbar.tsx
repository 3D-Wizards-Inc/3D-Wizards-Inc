'use client';

import React from 'react';
import { useSession } from 'next-auth/react';
import { usePathname } from 'next/navigation';
import { Container, Nav, Navbar, NavDropdown, Image } from 'react-bootstrap';
import { BoxArrowRight, Lock, PersonFill, PersonPlusFill } from 'react-bootstrap-icons';

const NavBar: React.FC = () => {
  const { data: session } = useSession();
  const currentUser = session?.user?.email;
  const userWithRole = session?.user as { email: string; randomKey: string };
  const role = userWithRole?.randomKey;
  const pathName = usePathname();

  return (
    <Navbar style={{ backgroundColor: '#ff8c00' }} expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <Image src="/images/3DWizardIcon.png" alt="Voxel" width="60" height="60" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto justify-content-start">
            <Nav.Link id="store-page-nav" href="/store" key="store" active={pathName === '/store'}>
              Store
            </Nav.Link>
            <Nav.Link id="custom-page-nav" href="/custom" key="custom" active={pathName === '/custom'}>
              Custom Order
            </Nav.Link>
            <Nav.Link id="about-page-nav" href="/about" key="about" active={pathName === '/about'}>
              About us
            </Nav.Link>
            <Nav.Link id="custom-page-nav" href="/gallery" key="gallery" active={pathName === '/gallery'}>
              Gallery
            </Nav.Link>
            <Nav.Link id="business-page-nav" href="/business" key="business" active={pathName === '/business'}>
              Business Inquiries
            </Nav.Link>
            {currentUser && role === 'ADMIN' ? (
              <Nav.Link id="admin-stuff-nav" href="/admin" key="admin" active={pathName === '/admin'}>
                Admin
              </Nav.Link>
            ) : (
              ''
            )}
          </Nav>
          <Nav>
            {session ? (
              <NavDropdown id="login-dropdown" title={currentUser}>
                {currentUser
                  ? [
                    <NavDropdown.Item
                      id="account-page-nav"
                      href="/account"
                      key="account"
                      active={pathName === '/account'}
                    >
                      <PersonFill />
                      Account
                    </NavDropdown.Item>,
                  ]
                  : ''}
                <NavDropdown.Item id="login-dropdown-sign-out" href="/api/auth/signout">
                  <BoxArrowRight />
                  Sign Out
                </NavDropdown.Item>
                <NavDropdown.Item id="login-dropdown-change-password" href="/auth/change-password">
                  <Lock />
                  Change Password
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <NavDropdown id="login-dropdown" title="Login">
                <NavDropdown.Item id="login-dropdown-sign-in" href="/auth/signin">
                  <PersonFill />
                  Sign in
                </NavDropdown.Item>
                <NavDropdown.Item id="login-dropdown-sign-up" href="/auth/signup">
                  <PersonPlusFill />
                  Sign up
                </NavDropdown.Item>
              </NavDropdown>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
