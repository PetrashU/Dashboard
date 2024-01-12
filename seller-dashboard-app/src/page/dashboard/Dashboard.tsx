import React from 'react'
import Navbar from '../../component/navbar/Navbar'
import ReviewsWidget from '../../component/widget/ReviewsWidg'
import OffersRankWidget from '../../component/widget/OffersRankWidg'
import OrdersWidg from '../../component/widget/OrdersWidg'
import SaleQualityWidg from '../../component/widget/SaleQualityWidg'
import SalesChartWidg from '../../component/widget/SalesChartWidg'
import { Outlet, useLocation } from 'react-router-dom'
import { HOME_PAGE_URL } from '../../data/urls'

const Dashboard = () => {
  const currLocation = useLocation();
  const isChildrenRendered = currLocation.pathname !== HOME_PAGE_URL;
  return (
    <div className='background'>
        <Navbar/>
        {
          isChildrenRendered ? <Outlet/> 
          : 
          <>
            {/* <ReviewsWidget/> */}
            {/* <OffersRankWidget/> */}
            {/* <OrdersWidg/> */}
            {/* <SaleQualityWidg/> */}
            <SalesChartWidg/>
          </>
        }
    </div>
  )
}

export default Dashboard