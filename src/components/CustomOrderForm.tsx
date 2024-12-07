'use client';

import React, { useState } from 'react';

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    width: '500px',
    margin: '20px auto',
    padding: '15px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
  },
  header: {
    marginBottom: '15px',
    fontSize: '22px',
  },
  selectContainer: {
    marginBottom: '15px',
  },
  dropdown: {
    width: '100%',
    padding: '12px',
    fontSize: '18px',
    borderRadius: '6px',
    border: '1px solid #ccc',
  },
  textarea: {
    width: '100%',
    height: '200px',
    marginBottom: '20px',
    padding: '10px',
    fontSize: '16px',
    borderRadius: '8px',
    border: '1px solid #ccc',
    resize: 'none',
  },
  materialButtons: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '15px',
  },
  materialButton: {
    padding: '10px 15px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '6px',
    backgroundColor: '#f5f5f5',
    cursor: 'pointer',
    flex: 1,
    margin: '0 5px',
  },
  submitButton: {
    width: '100%',
    padding: '12px',
    fontSize: '18px',
    borderRadius: '6px',
    border: '1px solid #ccc',
    backgroundColor: '#4CAF50',
    color: 'white',
    cursor: 'pointer',
  },
};

const CustomOrderForm: React.FC = () => {
  const [requestType, setRequestType] = useState('');
  const [requestDetails, setRequestDetails] = useState('');
  const [selectedMaterial, setSelectedMaterial] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!requestType || !requestDetails || !selectedMaterial) {
      setError('Please fill out all fields before submitting.');
      setSuccessMessage('');
    } else {
      setError('');
      setSuccessMessage(
        'Your form has been submitted. Please wait for an email with further details.',
      );
      console.log({ requestType, requestDetails, selectedMaterial });
      // Reset form fields
      setRequestType('');
      setRequestDetails('');
      setSelectedMaterial('');
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Custom Request:</h2>
      <form onSubmit={handleSubmit}>
        {/* Dropdown */}
        <div style={styles.selectContainer}>
          <select
            style={styles.dropdown}
            value={requestType}
            onChange={(e) => setRequestType(e.target.value)}
          >
            <option value="">Select Request Type</option>
            <option value="Option 1">Option 1</option>
            <option value="Option 2">Option 2</option>
            <option value="Option 3">Option 3</option>
          </select>
        </div>

        {/* Textarea */}
        <textarea
          style={styles.textarea}
          placeholder="Your request here"
          value={requestDetails}
          onChange={(e) => setRequestDetails(e.target.value)}
        />

        {/* Material Buttons */}
        <div style={styles.materialButtons}>
          <button
            type="button"
            style={{
              ...styles.materialButton,
              backgroundColor: selectedMaterial === 'Material 1' ? '#cce5ff' : '',
            }}
            onClick={() => setSelectedMaterial('Material 1')}
          >
            Material 1
          </button>
          <button
            type="button"
            style={{
              ...styles.materialButton,
              backgroundColor: selectedMaterial === 'Material 2' ? '#cce5ff' : '',
            }}
            onClick={() => setSelectedMaterial('Material 2')}
          >
            Material 2
          </button>
          <button
            type="button"
            style={{
              ...styles.materialButton,
              backgroundColor: selectedMaterial === 'Material 3' ? '#cce5ff' : '',
            }}
            onClick={() => setSelectedMaterial('Material 3')}
          >
            Material 3
          </button>
        </div>

        {/* Error Message */}
        {error && <p style={{ color: 'red', marginBottom: '10px' }}>{error}</p>}

        {/* Success Message */}
        {successMessage && (
          <p style={{ color: 'green', marginBottom: '10px' }}>{successMessage}</p>
        )}

        {/* Submit Button */}
        <button type="submit" style={styles.submitButton}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default CustomOrderForm;
