import React, { useState } from 'react';

function ReviewForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const reviewData = {
      name: document.getElementById('customerName').value,
      date: document.getElementById('visitDate').value,
      review: document.getElementById('review').value,
    };

    try {
      const response = await fetch('http://127.0.0.1:8000/api/', { // Update the URL with your Django API endpoint
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // If you have CSRF protection, you need to include the CSRF token here
        },
        body: JSON.stringify(reviewData),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        // Handle errors (e.g., display a message to the user)
        console.error('Failed to submit review');
      }
    } catch (error) {
      console.error('Error submitting review:', error);
    }
  };

  return (
    <div className="container mt-5 mb-5 pb-3">
      <h2>Car Wash Review</h2>
      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="customerName" className="form-label">Name:</label>
            <input type="text" className="form-control" id="customerName" required />
          </div>
          <div className="mb-3">
            <label htmlFor="visitDate" className="form-label">Visit Date:</label>
            <input type="date" className="form-control" id="visitDate" required />
          </div>
          <div className="mb-3">
            <label htmlFor="review" className="form-label">Review:</label>
            <textarea className="form-control" id="review" rows="4" required></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Submit Review</button>
        </form>
      ) : (
        <div id="thankYouMessage">
          <p className="text-success">Thank you for leaving a review!</p>
        </div>
      )}
    </div>
  );
}

export default ReviewForm;
