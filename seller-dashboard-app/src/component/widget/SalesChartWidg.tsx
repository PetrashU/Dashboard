import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/store/store'
import { translateUtil } from '../../util/translateUtil'
import { BsCaretDown  } from "react-icons/bs"
import ChartDropdown from '../dropdown/ChartDropdown'
import { useReducer, useState } from 'react'
import { CHART_TYPE, MEASURE_TYPE, TIME_SCOPE } from '../../data/constant'
import Chart from 'react-google-charts'
import { chartDataResolver } from '../../util/chartDataResolver'
import { CASES, chartReducer, initChartSettings } from '../../util/chartReducer'


const SalesChartWidg = () => {
  const [dropdownMode, setDropdownMode] = useState({ chatM : false, timeS : false, presType : false })
  const [chartSettings, dispatch] = useReducer(chartReducer, initChartSettings);
  const languge = useSelector((state : RootState) => {
      return state.language.currentLanguage
  })
  const data : any = translateUtil({ lang : languge , wdg : "salesChartWidg"})
  const chartData : any = chartDataResolver({ settings : chartSettings, translation : data });

  
  return (
    <div className='sales-chart-widg'>
      <div className='widg-title'>
        { data.saleChartTitle }
      </div>
      <div>
        <button 
          onMouseEnter={() => setDropdownMode((prev) => ({ ...prev, chatM : true})) }
          onMouseLeave={() => setDropdownMode((prev) => ({ ...prev, chatM : false}))}
        >
          { data.chartMeasure }<BsCaretDown/>
          { 
            dropdownMode.chatM ? 
            <ChartDropdown 
              data={[data.turnover, data.sellNumber]} 
              actionType="chatM" 
              changeChartProperty={(prop : string) => { dispatch({ type : CASES.MEASURE , payload : prop}) }}
            /> : null
          }
        </button>
        <button 
          onMouseEnter={() => setDropdownMode((prev) => ({ ...prev, timeS : true})) }
          onMouseLeave={() => setDropdownMode((prev) => ({ ...prev, timeS : false}))}
        >
          { data.timeScope }<BsCaretDown/>
          { 
            dropdownMode.timeS ? 
            <ChartDropdown 
              data={[data.today, data.thisWeek, data.lastWeek]}
              actionType="timeS"
              changeChartProperty={(prop : string) => { dispatch({ type : CASES.TIME , payload : prop})}} 
            /> 
              : null 
          }
        </button>
        <button 
          onMouseEnter={() => setDropdownMode((prev) => ({ ...prev, presType : true})) }
          onMouseLeave={() => setDropdownMode((prev) => ({ ...prev, presType : false}))}
        >
          { data.presentationType }<BsCaretDown/>
          { 
            dropdownMode.presType ? 
            <ChartDropdown 
              data={[data.barChart, data.linearChart]}
              actionType="presType" 
              changeChartProperty={(prop : string) => { dispatch({ type : CASES.PRESENTATION , payload : prop}) }}
            />
            : null 
          }
        </button>
      </div>
      <Chart  
        chartType={chartSettings.presentationType === CHART_TYPE.LINEAR_TYPE ? "Line" : "Bar"}  
        data={ chartData }
      />
      <button>{ data.showMore }</button>
    </div>
  )
}

export default SalesChartWidg