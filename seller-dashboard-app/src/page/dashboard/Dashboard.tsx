import React from 'react'
import Navbar from '../../component/navbar/Navbar'
import ReviewsWidget from '../../component/widget/ReviewsWidg'

const Dashboard = () => {
  return (
    <div className='background'>
        <Navbar/>
        <ReviewsWidget/>
    </div>
  )
}

export default Dashboard