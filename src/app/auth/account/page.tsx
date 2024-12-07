/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable @next/next/no-img-element */

'use client';

import React, { useState } from 'react';

const AccountPage = () => {
  // State variables for name, email, address, phone number, and edit status
  const [name, setName] = useState('John Doe');
  const [email, setEmail] = useState('johndoe@example.com');
  const [address, setAddress] = useState('123 Main St, City, Country');
  const [phone, setPhone] = useState('(123) 456-7890');
  const [isEditing, setIsEditing] = useState(false);

  // Handle toggling edit mode
  const handleEdit = () => setIsEditing(true);

  // Handle saving the updated information
  const handleSave = () => {
    setIsEditing(false);
    // You could also add logic to save to a server or local storage here
  };

  return (
    <div style={{ backgroundColor: '#f8f9fa', minHeight: '100vh', paddingTop: '50px' }}>
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
    </div>
  );
};

export default AccountPage;
