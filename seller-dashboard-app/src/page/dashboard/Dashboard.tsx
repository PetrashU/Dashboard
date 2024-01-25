import React from 'react'
import Navbar from '../../component/navbar/Navbar'
import ReviewsWidget from '../../component/widget/ReviewsWidg'
import OffersRankWidget from '../../component/widget/OffersRankWidg'
import OrdersWidg from '../../component/widget/OrdersWidg'
import SaleQualityWidg from '../../component/widget/SaleQualityWidg'
import SalesChartWidg from '../../component/widget/SalesChartWidg'
import { Outlet, useLocation } from 'react-router-dom'
import { HOME_PAGE_URL } from '../../data/urls'
import "./dashboard.css";
import { useAppContext } from '../../AppContext'

const Dashboard = () => {
  const currLocation = useLocation();
  const isChildrenRendered = currLocation.pathname !== HOME_PAGE_URL;
  const {isDarkModeOn} = useAppContext();
  return (
    <div className= {isDarkModeOn ? 'background-dark' : 'background'}>
        <Navbar/>
        {
          isChildrenRendered ? <Outlet/> 
          : 
          <div className='widgets'>
            <div className="left-side">
              <ReviewsWidget/>
              <OffersRankWidget/>
            </div>
            <div className="center-side">
              <SalesChartWidg/>
            </div>
            <div className="right-side">
              <OrdersWidg/>
              <SaleQualityWidg/>
            </div>
          </div>
        }
    </div>
  )
}

export default Dashboard