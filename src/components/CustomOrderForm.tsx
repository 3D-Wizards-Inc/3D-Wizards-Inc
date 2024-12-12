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
    textAlign: 'left',
  },
  dropdown: {
    width: '100%',
    padding: '12px',
    fontSize: '18px',
    borderRadius: '6px',
    border: '1px solid #ccc',
    marginTop: '10px',
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
    flexDirection: 'column',
    gap: '15px',
    marginBottom: '15px',
  },
  materialButton: {
    padding: '10px 15px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '6px',
    cursor: 'pointer',
    marginBottom: '5px',
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
  disabledButton: {
    backgroundColor: '#ccc',
    cursor: 'not-allowed',
  },
  errorText: {
    color: 'red',
    fontSize: '14px',
    marginTop: '5px',
  },
};

const CustomOrderForm: React.FC = () => {
  const [requestType, setRequestType] = useState('');
  const [requestDetails, setRequestDetails] = useState('');
  const [selectedMaterial, setSelectedMaterial] = useState('');

  const materialKeys = ['Material 1', 'Material 2', 'Material 3'] as const;
  type MaterialKey = (typeof materialKeys)[number];

  const [materialColors, setMaterialColors] = useState<Record<MaterialKey, string>>({
    'Material 1': '',
    'Material 2': '',
    'Material 3': '',
  });

  const isFormValid = requestType && requestDetails && selectedMaterial;

  const colors = [
    'red',
    'pink',
    'orange',
    'yellow',
    'green',
    'blue',
    'purple',
    'brown',
    'black',
    'gray',
    'white',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isFormValid) {
      const filteredMaterialColors = Object.fromEntries(
        Object.entries(materialColors).filter(([, color]) => color),
      );

      console.log({
        requestType,
        requestDetails,
        selectedMaterial,
        materialColors: filteredMaterialColors,
      });

      alert('Form submitted successfully!');
      setRequestType('');
      setRequestDetails('');
      setSelectedMaterial('');
      setMaterialColors({
        'Material 1': '',
        'Material 2': '',
        'Material 3': '',
      });
    }
  };

  const handleColorChange = (material: MaterialKey, color: string) => {
    console.log(`Changing color of ${material} to ${color}`);
    setMaterialColors((prevColors) => ({
      ...prevColors,
      [material]: color,
    }));
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Custom Request:</h2>
      <form onSubmit={handleSubmit}>
        {/* Dropdown for Request Type */}
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
          {!requestType && (
            <p style={styles.errorText}>Please select a request type.</p>
          )}
        </div>

        {/* Textarea */}
        <textarea
          style={styles.textarea}
          placeholder="Your request here"
          value={requestDetails}
          onChange={(e) => setRequestDetails(e.target.value)}
        />
        {!requestDetails && (
          <p style={styles.errorText}>Please provide details for your request.</p>
        )}

        {/* Material Buttons with Color Selectors */}
        <div style={styles.materialButtons}>
          {materialKeys.map((material) => (
            <div key={material}>
              <button
                type="button"
                style={{
                  ...styles.materialButton,
                  backgroundColor: materialColors[material] || '#f5f5f5',
                  color: materialColors[material] === 'black' ? 'white' : 'black',
                }}
                onClick={() => setSelectedMaterial(material)}
              >
                {material}
              </button>
              <select
                style={styles.dropdown}
                value={materialColors[material]}
                onChange={(e) => handleColorChange(material, e.target.value)}
              >
                <option value="">Select Color</option>
                {colors.map((color) => (
                  <option key={color} value={color}>
                    {color.charAt(0).toUpperCase() + color.slice(1)}
                  </option>
                ))}
              </select>
              {!materialColors[material] && (
                <p style={styles.errorText}>
                  Please select a color for
                  {material}
                  .
                </p>
              )}
            </div>
          ))}
        </div>
        {!selectedMaterial && (
          <p style={styles.errorText}>Please select a material.</p>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          style={{
            ...styles.submitButton,
            ...(isFormValid ? {} : styles.disabledButton),
          }}
          disabled={!isFormValid}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CustomOrderForm;
