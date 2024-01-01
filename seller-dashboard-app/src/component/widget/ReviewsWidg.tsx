import React, { useState } from 'react';
import './widgets.css';
import { reviews } from '../../data/fakedata';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt, faStar as farStar } from '@fortawesome/free-solid-svg-icons';

const ReviewsWidget = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [visibleReviews, setVisibleReviews] = useState(5);

  const reviewsToShow = () => {
    if (selectedFilter === 'All') {
      return reviews.slice(0, visibleReviews);
    } else if (selectedFilter === 'Positive') {
      return reviews.filter((review) => review.stars >= 4).slice(0, visibleReviews);
    } else if (selectedFilter === 'Negative') {
      return reviews.filter((review) => review.stars <= 2).slice(0, visibleReviews);
    }
    return [];
  };

  const handleFilterChange = (filter: string) => {
    setSelectedFilter(filter);
    setVisibleReviews(5);
  };

  const handleMoreButtonClick = () => {
    setVisibleReviews((prev) => prev + 5);
  };

  const renderStars = (rating: number): JSX.Element[] => {
    const stars = [];
    const fullStars = Math.floor(rating);

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<FontAwesomeIcon icon={faStar} key={i} color="#ffd700" />);
      } else {
        stars.push(<FontAwesomeIcon icon={farStar} key={i} color="#ddd" />);
      }
    }

    return stars;
  };

  return (
    <div className="reviews-container">
      <div className="widget-header">
        <div className="widget-title">Reviews</div>
        <div className="filter-buttons">
          <button
            className={selectedFilter === 'All' ? 'active' : ''}
            onClick={() => handleFilterChange('All')}
          >
            All
          </button>
          <button
            className={selectedFilter === 'Positive' ? 'active' : ''}
            onClick={() => handleFilterChange('Positive')}
          >
            Positive
          </button>
          <button
            className={selectedFilter === 'Negative' ? 'active' : ''}
            onClick={() => handleFilterChange('Negative')}
          >
            Negative
          </button>
        </div>
      </div>
      <table className="reviews-list">
        <thead>
          <tr>
            <th>Rating</th>
            <th>Review</th>
          </tr>
        </thead>
        <tbody>
          {reviewsToShow().map((review) => (
            <tr key={review.id} className="review-item">
              <td className="rating">
                {renderStars(review.stars)}
              </td>
              <td className="review-text" title={review.text}>
                {review.text.length > 60
                  ? `${review.text.substring(0, 60)}...`
                  : review.text}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="redirect-button" onClick={handleMoreButtonClick}>
        More
      </button>
    </div>
  );
};

export default ReviewsWidget;