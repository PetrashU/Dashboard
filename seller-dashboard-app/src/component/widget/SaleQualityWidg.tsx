import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store/store'
import { translateUtil } from '../../util/translateUtil'
import { useNavigate } from 'react-router-dom'
import { SALES_PAGE_URL } from '../../data/urls'

const SaleQualityWidg = () => {
  const language = useSelector((state : RootState) => {
      return state.language.currentLanguage;
  })
  const data : any = translateUtil({ lang : language, wdg : "saleQualityWidg"})
  const nav = useNavigate();

  return (
    <div className='sale-quality-wdg'>
      <div className='widget-title'>{ data?.qualityOfSale }</div>
      <div className='sale-quality-wdg-container'>
        <table className='orders-table qos-table'>
          <thead>
            <tr>
              <th>{  data?.ratingCategory }</th>
              <th>{  data?.rating }</th>
            </tr>
          </thead>
          <tbody>
              <tr>
                <td>{  data?.salesResults }</td>
                <td>{ data?.salesResultsResult }</td>  
              </tr>
              <tr>
                <td>{  data?.salesSkills }</td>
                <td>{ data?.salesSkillsResult }</td>  
              </tr> 
              <tr>
                <td>{  data?.responsibility }</td>
                <td>{ data?.responsibilityResult }</td>  
              </tr> 
          </tbody>
        </table>
        <p>{ data?.overview }</p>
        <table className='orders-table'>
          <tbody>
            <tr>
              <td>{ data?.salesResults }</td>
              <td>{ data?.ratingQualityResult }</td>
            </tr>
            <tr>
              <td>{ data?.qualityCategory }</td>
              <td>{ data?.ratingQualityCategory }</td>
            </tr>
          </tbody>
        </table>
        <button 
          onClick={() => { nav(SALES_PAGE_URL) }}
          className='redirect-button'
        >
          { data?.showMore } 
        </button>
      </div>
    </div>
  )
}

export default SaleQualityWidg