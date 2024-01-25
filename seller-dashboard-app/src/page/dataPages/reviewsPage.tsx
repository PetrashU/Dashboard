import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { reviews, Review } from '../../data/fakedata';
import { useAppContext } from '../../AppContext';
import './pages.css'
import UnderConstruction from './component/UnderConstruction';

const ReviewsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const initialFilter = searchParams.get('filter') || 'All';

  const [selectedFilter, setSelectedFilter] = useState(initialFilter);
  const [filteredReviews, setFilteredReviews] = useState<Review[]>([]);

  const { language } = useAppContext();

  useEffect(() => {
    navigate(`?filter=${selectedFilter}`, { replace: true });
    let filtered;
    if (selectedFilter === 'Positive') {
      filtered = reviews.filter(review => review.stars >= 4);
    } else if (selectedFilter === 'Negative') {
      filtered = reviews.filter(review => review.stars <= 2);
    } else {
      filtered = reviews;
    }
    setFilteredReviews(filtered);
  }, [selectedFilter, navigate]);

  const handleFilterChange = (filter: string) => {
    setSelectedFilter(filter);
  };

  return (
    <div>
      <h1>{language === 'English' ? 'Reviews' : 'Opinie'}</h1>
      <div>
        <button
          onClick={() => handleFilterChange('All')}
          className={selectedFilter === 'All' ? 'active' : ''}
        >
          {language === 'English' ? 'All' : 'Wszystkie'}

        </button>
        <button
          onClick={() => handleFilterChange('Positive')}
          className={selectedFilter === 'Positive' ? 'active' : ''}
        >
          {language === 'English' ? 'Positive' : 'Pozytywne'}
        </button>
        <button
          onClick={() => handleFilterChange('Negative')}
          className={selectedFilter === 'Negative' ? 'active' : ''}
        >
          {language === 'English' ? 'Negative' : 'Negatywne'}
        </button>
      </div>
      {filteredReviews.length === 0 ? (
        <p>{language === 'English' ? 'No reviews found for this category' : 'Brak opinii w tej kategorii'}</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>{language === 'English' ? 'Product' : 'Produkt'}</th>
              <th>{language === 'English' ? 'Review' : 'Opinia'}</th>
              <th>{language === 'English' ? 'Rating' : 'Ocena'}</th>
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
      <UnderConstruction />
    </div>
  );
};

export default ReviewsPage;
