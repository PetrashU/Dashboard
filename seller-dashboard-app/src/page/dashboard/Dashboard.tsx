import React from 'react'
import Navbar from '../../component/navbar/Navbar'
import ReviewsWidget from '../../component/widget/ReviewsWidg'
import OffersRankWidget from '../../component/widget/OffersRankWidg'
import OrdersWidg from '../../component/widget/OrdersWidg'

const Dashboard = () => {
  return (
    <div className='background'>
        <Navbar/>
        <ReviewsWidget/>
        <OffersRankWidget/>
        <OrdersWidg/>
    </div>
  )
}

export default Dashboard