import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { reviews, Review } from '../../data/fakedata';
import './pages.css'

const ReviewsPage = () => {
  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const initialFilter = searchParams.get('filter') || 'All';

  const [selectedFilter, setSelectedFilter] = useState(initialFilter);
  const [filteredReviews, setFilteredReviews] = useState<Review[]>([]);

  useEffect(() => {
    let filtered;
    if (selectedFilter === 'Positive') {
      filtered = reviews.filter(review => review.stars >= 4);
    } else if (selectedFilter === 'Negative') {
      filtered = reviews.filter(review => review.stars <= 2);
    } else {
      filtered = reviews;
    }
    setFilteredReviews(filtered);
  }, [selectedFilter]);

  const handleFilterChange = (filter: string) => {
    setSelectedFilter(filter);
  };

  return (
    <div>
      <div>
        <button
          onClick={() => handleFilterChange('All')}
          className={selectedFilter === 'All' ? 'active' : ''}
        >
          All
        </button>
        <button
          onClick={() => handleFilterChange('Positive')}
          className={selectedFilter === 'Positive' ? 'active' : ''}
        >
          Positive
        </button>
        <button
          onClick={() => handleFilterChange('Negative')}
          className={selectedFilter === 'Negative' ? 'active' : ''}
        >
          Negative
        </button>
      </div>
      <h1>Reviews</h1>
      {filteredReviews.length === 0 ? (
        <p>No reviews found for this category.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Review</th>
              <th>Rating</th>
            </tr>
          </thead>
          <tbody>
            {filteredReviews.map(review => (
              <tr key={review.id}>
                <td>{review.product}</td>
                <td>{review.text}</td>
                <td>{'⭐'.repeat(review.stars)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ReviewsPage;
