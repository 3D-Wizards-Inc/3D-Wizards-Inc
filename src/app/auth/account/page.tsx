/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable @next/next/no-img-element */

'use client';

import React, { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import LoadingSpinner from '@/components/LoadingSpinner';
import { Product } from '@prisma/client';
import UserProductRender from '@/components/UserProductRender';
import { Row, Col, Table, Container } from 'react-bootstrap';

const AccountPage = () => {
  // State variables for name, email, address, phone number, and edit status
  const [name, setName] = useState('John Doe');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('123 Main St, City, Country');
  const [phone, setPhone] = useState('(123) 456-7890');
  const [isEditing, setIsEditing] = useState(false);

  const { data: session, status } = useSession();
  const currentUser = session?.user?.email || '';
  const [products, setProducts] = useState<Product[]>([]);

  const getProducts = async () => {
    try {
      const response = await fetch('/api/products/render');
      if (!response.ok) {
        console.error('Failed to fetch products');
        return;
      }
      const fetchedProducts: Product[] = await response.json(); // Parse the JSON response
      setProducts(fetchedProducts);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  useEffect(() => {
    // Sync the email state with the current user's email from the session
    setEmail(currentUser);

    // Load user data from localStorage on component mount (if available)
    const savedName = localStorage.getItem('name');
    const savedAddress = localStorage.getItem('address');
    const savedPhone = localStorage.getItem('phone');

    if (savedName) setName(savedName);
    if (savedAddress) setAddress(savedAddress);
    if (savedPhone) setPhone(savedPhone);
    getProducts();
  }, [currentUser]);

  useEffect(() => {
    // Save the updated fields to localStorage whenever they change
    if (name) localStorage.setItem('name', name);
    if (address) localStorage.setItem('address', address);
    if (phone) localStorage.setItem('phone', phone);
  }, [name, address, phone]);

  if (status === 'loading') {
    return <LoadingSpinner />;
  }

  if (status === 'unauthenticated') {
    redirect('/auth/signin');
  }

  // Handle toggling edit mode
  const handleEdit = () => setIsEditing(true);

  // Handle saving the updated information
  const handleSave = () => {
    setIsEditing(false);
    // Save to localStorage or send to backend if needed
    localStorage.setItem('name', name);
    localStorage.setItem('address', address);
    localStorage.setItem('phone', phone);
    console.log('Saved:', { name, email, address, phone });
  };

  return (
    <div style={{ backgroundColor: '#f8f9fa', paddingBottom: '20px' }}>
      <div
        style={{
          maxWidth: '400px',
          margin: '50px auto',
          textAlign: 'center',
          padding: '20px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          borderRadius: '10px',
          backgroundColor: '#fff',
        }}
      >
        {/* Profile Image */}
        <img
          src="https://via.placeholder.com/100"
          alt="Profile"
          style={{ borderRadius: '50%', marginBottom: '20px' }}
        />
        <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px' }}>Account Details</h1>

        {/* Name Field */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start', marginBottom: '15px' }}>
          <label htmlFor="name" style={{ fontWeight: '500', marginBottom: '5px' }}>
            Name:
          </label>
          {isEditing ? (
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{
                width: '100%',
                padding: '8px',
                border: '1px solid #ddd',
                borderRadius: '4px',
              }}
            />
          ) : (
            <span>{name}</span>
          )}
        </div>

        {/* Email Field */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start', marginBottom: '15px' }}>
          <label htmlFor="email" style={{ fontWeight: '500', marginBottom: '5px' }}>
            Email:
          </label>
          {isEditing ? (
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                width: '100%',
                padding: '8px',
                border: '1px solid #ddd',
                borderRadius: '4px',
              }}
            />
          ) : (
            <span>{email}</span>
          )}
        </div>

        {/* Address Field */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start', marginBottom: '15px' }}>
          <label htmlFor="address" style={{ fontWeight: '500', marginBottom: '5px' }}>
            Address:
          </label>
          {isEditing ? (
            <input
              id="address"
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              style={{
                width: '100%',
                padding: '8px',
                border: '1px solid #ddd',
                borderRadius: '4px',
              }}
            />
          ) : (
            <span>{address}</span>
          )}
        </div>

        {/* Phone Field */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start', marginBottom: '15px' }}>
          <label htmlFor="phone" style={{ fontWeight: '500', marginBottom: '5px' }}>
            Phone Number:
          </label>
          {isEditing ? (
            <input
              id="phone"
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              style={{
                width: '100%',
                padding: '8px',
                border: '1px solid #ddd',
                borderRadius: '4px',
              }}
            />
          ) : (
            <span>{phone}</span>
          )}
        </div>

        {/* Edit/Save Button */}
        <button
          type="button"
          onClick={isEditing ? handleSave : handleEdit}
          style={{
            padding: '10px 20px',
            margin: '10px',
            borderRadius: '5px',
            backgroundColor: '#007bff',
            color: '#fff',
            border: 'none',
            cursor: 'pointer',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#0056b3')}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#007bff')}
        >
          {isEditing ? '💾 Save' : '✏️ Edit'}
        </button>
      </div>
      <hr style={{
        border: 'none',
        height: '2px',
        background: 'linear-gradient(to right, #ddd, #bbb, #ddd)',
        margin: '50px 0',
      }}
      />
      <Container
        className="fluid"
        style={{
          margin: '50px auto',
          textAlign: 'center',
          padding: '20px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          borderRadius: '10px',
          backgroundColor: '#fff',
        }}
      >
        <Row>
          <Col>
            <h1 className="pb-4">Checked out products</h1>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>{}</th>
                  <th>Option</th>
                  <th>Size</th>
                  <th>Primary Color</th>
                  <th>Secondary Color</th>
                  <th>Tertiary Color</th>
                  <th>Quantity</th>
                </tr>
              </thead>
              <tbody>
                {/* should display all products where the owner fits the user.email property of above */}
                {products.filter((product) => product.checkedout === true).map((product) => (
                  <UserProductRender key={product.id} {...product} />
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AccountPage;
