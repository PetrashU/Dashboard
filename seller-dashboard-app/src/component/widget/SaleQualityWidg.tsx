import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store/store'
import { translateUtil } from '../../util/translateUtil'

const SaleQualityWidg = () => {
  const language = useSelector((state : RootState) => {
      return state.language.currentLanguage;
  })
  const data : any = translateUtil({ lang : language, wdg : "saleQualityWidg"})

  return (
    <div className='sale-quality-wdg'>
      <h2>{ data?.qualityOfSale }</h2>
      <table>
        <thead>
          <tr>
            <th>{  data?.ratingCategory }</th>
            <th>{  data?.rating }</th>
          </tr>
        </thead>
        <tbody>
            <tr>
              <td>{  data?.salesResults }</td>
              <td>0</td>  
            </tr>
            <tr>
              <td>{  data?.salesSkills }</td>
              <td>0</td>  
            </tr> 
            <tr>
              <td>{  data?.responsibility }</td>
              <td>0</td>  
            </tr> 
        </tbody>
      </table>
      <h3>{ data?.overview }</h3>
      <table>
        <tbody>
          <tr>
            <td>{ data?.salesResults }</td>
            <td>30/50</td>
          </tr>
          <tr>
            <td>{ data?.qualityCategory }</td>
            <td>a</td>
          </tr>
        </tbody>
      </table>
      <button>{ data?.showMore } </button>
    </div>
  )
}

export default SaleQualityWidg