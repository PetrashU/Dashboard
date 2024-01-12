import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/store/store'
import { translateUtil } from '../../util/translateUtil'
import { BsCaretDown  } from "react-icons/bs"
import ChartDropdown from '../dropdown/ChartDropdown'
import { useReducer, useState } from 'react'
import { CHART_TYPE, MEASURE_TYPE, TIME_SCOPE } from '../../data/constant'
import Chart from 'react-google-charts'
import { chartDataResolver } from '../../util/chartDataResolver'

export type ChartSettingsType = {
  measureType : string,
  timeScope : string,
  presentationType : string
} 

type ChartAction = {
  type : CASES
  payload : string
}

const enum CASES  {
  MEASURE, TIME, PRESENTATION
} 

const chartReducer = (state : ChartSettingsType , action : ChartAction) => {
  switch(action.type) {
    case CASES.MEASURE:
      return {
        ...state,
        measureType : action.payload 
      }
    case CASES.TIME: 
      return {
        ...state,
        timeScope : action.payload
      }
    case CASES.PRESENTATION:
      return {
        ...state,
        presentationType : action.payload
      }
    default:
      return state;
  }
}

const initChartSettings : ChartSettingsType = {
  measureType : MEASURE_TYPE.TURNOVER,
  timeScope : TIME_SCOPE.DAY,
  presentationType : CHART_TYPE.BAR_TYPE,

}
const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400}];
const SalesChartWidg = () => {
  const [dropdownMode, setDropdownMode] = useState({ chatM : false, timeS : false, presType : false })
  const [chartSettings, dispatch] = useReducer(chartReducer, initChartSettings);
  const languge = useSelector((state : RootState) => {
      return state.language.currentLanguage
  })
  const data : any = translateUtil({ lang : languge , wdg : "salesChartWidg"})
  const chartData : any = chartDataResolver(chartSettings);

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
        data={[["Age", "Weight"], [4, 5.5], [8, 12]]}
      />
      <button>{ data.showMore }</button>
    </div>
  )
}

export default SalesChartWidg