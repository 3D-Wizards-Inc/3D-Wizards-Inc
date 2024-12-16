'use client';

import React, { useState } from 'react';
import swal from 'sweetalert';
import { useSession } from 'next-auth/react';
import { addCustomOrder } from '@/lib/dbActions';

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

  const colors = ['red', 'pink', 'orange', 'yellow', 'green', 'blue', 'purple', 'brown', 'black', 'gray', 'white'];

  // Get current user session
  const { data: session } = useSession();
  const currentUser = session?.user?.email;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentUser) {
      swal('Error', 'You must be logged in to submit a custom order.', 'error');
      return;
    }

    if (isFormValid) {
      const filteredMaterialColors = Object.fromEntries(Object.entries(materialColors).filter(([, color]) => color));

      try {
        // Call addCustomOrder with the required data
        await addCustomOrder({
          user: currentUser,
          description: requestDetails,
          material1: filteredMaterialColors['Material 1'] || '',
          material2: filteredMaterialColors['Material 2'] || '',
          material3: filteredMaterialColors['Material 3'] || '',
          type: requestType,
        });

        swal('Success', 'Form submitted successfully!', 'success', {
          timer: 2000,
        });

        // Reset form state
        setRequestType('');
        setRequestDetails('');
        setSelectedMaterial('');
        setMaterialColors({
          'Material 1': '',
          'Material 2': '',
          'Material 3': '',
        });
      } catch (error) {
        console.error('Error submitting form:', error);
        swal('Error', 'Failed to submit form. Please try again.', 'error');
      }
    }
  };

  const handleColorChange = (material: MaterialKey, color: string) => {
    console.log(`Changing color of ${material} to ${color}`);
    setMaterialColors((prevColors) => ({
      ...prevColors,
      [material]: color || prevColors[material], // Prevent unselecting a color
    }));
    setSelectedMaterial(material);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Custom Request:</h2>
      <form onSubmit={handleSubmit}>
        {/* Dropdown for Request Type */}
        <div style={styles.selectContainer}>
          <select style={styles.dropdown} value={requestType} onChange={(e) => setRequestType(e.target.value)}>
            <option value="">Select Request Type</option>
            <option value="Option 1">Modified version of regularly produced item.</option>
            <option value="Option 2">You have a 3D model to print</option>
            <option value="Option 3">Completely custom 3D design and print</option>
          </select>
        </div>

        {/* Textarea */}
        <textarea
          style={styles.textarea}
          placeholder="Your request here, please specify how materials should be used"
          value={requestDetails}
          onChange={(e) => setRequestDetails(e.target.value)}
        />

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
            </div>
          ))}
        </div>

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
