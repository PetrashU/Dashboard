import React from 'react'
import { useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import { RootState } from '../../redux/store/store'
import { translateUtil } from '../../util/translateUtil'

const SalesChartWidg = () => {
  const languge = useSelector((state : RootState) => {
      return state.language.currentLanguage
  })
  const data : any= translateUtil({ lang : languge , wdg : "salesChartWidg"})
  return (
    <div className='sales-chart-widg'>
      <div className='widg-title'>
        { data.saleChartTitle }
      </div>
      <button>{ data.showMore }</button>
    </div>
  )
}

export default SalesChartWidg