import React, { useState } from 'react';
import './ReviewForm.css'; // Add this line

function ReviewForm() {
  const [submitted, setSubmitted] = useState(false);

  /*const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitted(true);
    const reviewData = {
      
      name: document.getElementById('customerName').value,
      date: document.getElementById('visitDate').value,
      review: document.getElementById('review').value,
    };*/

    const handleSubmit = async (event) => {
      event.preventDefault();
      setSubmitted(true);
      const reviewData = {
        
        name: document.getElementById('customerName').value,
        date: document.getElementById('visitDate').value,
        review: document.getElementById('review').value,
      };

    try {
      const response = await fetch('http://127.0.0.1:8000/api/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Include CSRF token if necessary
        },
        body: JSON.stringify(reviewData),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        console.error('Failed to submit review');
      }
    } catch (error) {
      console.error('Error submitting review:', error);
    }
  };

  // Inline CSS styles
  const styles = {
    container: {
      maxWidth: '600px',
      margin: '30px auto',
      padding: '20px',
      boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
      borderRadius: '8px',
    },
    title: {
      textAlign: 'center',
      color: '#333',
    },
    formGroup: {
      marginBottom: '15px',
    },
    formLabel: {
      display: 'block',
      marginBottom: '5px',
      fontWeight: 'bold',
    },
    formInput: {
      width: '100%',
      padding: '10px',
      borderRadius: '4px',
      border: '1px solid #ccc',
    },
    formTextarea: {
      width: '100%',
      padding: '10px',
      borderRadius: '4px',
      border: '1px solid #ccc',
    },
    submitButton: {
      width: '100%',
      padding: '10px',
      border: 'none',
      borderRadius: '4px',
      backgroundColor: '#007bff',
      color: 'white',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
    },
    thankYouMessage: {
      textAlign: 'center',
      color: 'green',
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Car Wash Review</h2>
      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <div style={styles.formGroup}>
            <label htmlFor="customerName" style={styles.formLabel}>Name:</label>
            <input type="text" style={styles.formInput} id="customerName" required />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="visitDate" style={styles.formLabel}>Visit Date:</label>
            <input type="date" style={styles.formInput} id="visitDate" required />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="review" style={styles.formLabel}>Review:</label>
            <textarea style={styles.formTextarea} id="review" rows="4" required></textarea>
          </div>
          <button type="submit" style={styles.submitButton}>Submit Review</button>
        </form>
      ) : (
        <div id="thankYouMessage" style={styles.thankYouMessage}>
          <p className="text-success">Thank you for leaving a review!</p>
        </div>
      )}
    </div>
  );
}

export default ReviewForm;
