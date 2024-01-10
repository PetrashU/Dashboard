import React from 'react'
import Navbar from '../../component/navbar/Navbar'
import ReviewsWidget from '../../component/widget/ReviewsWidg'
import OffersRankWidget from '../../component/widget/OffersRankWidg'
import OrdersWidg from '../../component/widget/OrdersWidg'
import SaleQualityWidg from '../../component/widget/SaleQualityWidg'
import SalesChartWidg from '../../component/widget/SalesChartWidg'

const Dashboard = () => {
  return (
    <div className='background'>
        <Navbar/>
        <ReviewsWidget/>
        <OffersRankWidget/>
        <OrdersWidg/>
        <SaleQualityWidg/>
        <SalesChartWidg/>
    </div>
  )
}

export default Dashboard