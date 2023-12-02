import React, { useState } from 'react';

function ReviewForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
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
