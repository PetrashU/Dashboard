import React, { useState } from 'react';
import './widgets.css';
import { reviews } from '../../data/fakedata';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../../AppContext';

const ReviewsWidget = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [visibleReviews, setVisibleReviews] = useState(5);
  const { language, isDarkModeOn } = useAppContext();


  const reviewsToShow = () => {
    if (selectedFilter === 'All') {
      return reviews.slice(-visibleReviews).reverse();
    } else if (selectedFilter === 'Positive') {
      return reviews.filter((review) => review.stars >= 4).slice(-visibleReviews).reverse();;
    } else if (selectedFilter === 'Negative') {
      return reviews.filter((review) => review.stars <= 2).slice(-visibleReviews).reverse();;
    }
    return [];
  };

  const handleFilterChange = (filter: string) => {
    setSelectedFilter(filter);
    setVisibleReviews(5);
  };

  const nav = useNavigate();

  const handleMoreButtonClick = (filter: string) => {
    nav(`/home/reviews?filter=${filter}`);
  };

  const renderStars = (rating: number): JSX.Element[] => {
    const stars = [];
    const fullStars = Math.floor(rating);

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<FontAwesomeIcon icon={faStar} key={i} color="#ffd700" />);
      } else {
        stars.push(<FontAwesomeIcon icon={faStar} key={i} color="#ddd" />);
      }
    }

    return stars;
  };

  return (
    <div className="reviews-container">
      <div className="widget-header">
        <div className="widget-title">{language === 'English' ? 'Reviews' : 'Opinie kupujących'}</div>
        <div className={isDarkModeOn ? "filter-buttons-dark" : "filter-buttons"}>
          <button
            className={selectedFilter === 'All' ? 'active' : ''}
            onClick={() => handleFilterChange('All')}
          >
            {language === 'English' ? 'ALL' : 'WSZYSTKIE'}
          </button>
          <button
            className={selectedFilter === 'Positive' ? 'active' : ''}
            onClick={() => handleFilterChange('Positive')}
          >
            {language === 'English' ? 'POSITIVE' : 'POZYTYWNE'}
          </button>
          <button
            className={selectedFilter === 'Negative' ? 'active' : ''}
            onClick={() => handleFilterChange('Negative')}
          >
            {language === 'English' ? 'NEGATIVE' : 'NEGATYWNE'}
          </button>
        </div>
      </div>
      <div className='reviews-list-container'>
        {reviewsToShow().length === 0 ? (
          <p>No reviews of this category found</p>
        ) : (
          <table className={isDarkModeOn ? "reviews-list-dark" : "reviews-list"}>
            <thead>
              <tr>
                <th>{language === 'English' ? 'RATING' : 'OCENA'}</th>
                <th>{language === 'English' ? 'REVIEW' : 'OPINIA'}</th>
              </tr>
            </thead>
            <tbody>
              {reviewsToShow().map((review) => (
                <tr key={review.id} className="review-item">
                  <td className="rating">
                    {renderStars(review.stars)}
                  </td>
                  <td className="review-text" title={review.text}>
                    {review.text}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      <div className='redirect-button-container'>
        <button className="redirect-button" onClick={() => handleMoreButtonClick(selectedFilter)}>
          {language === 'English' ? 'Show more' : 'Pokaż więcej'}
        </button>
      </div>
    </div>
  );
};

export default ReviewsWidget;