import React from 'react'
import { CHART_TYPE, MEASURE_TYPE, TIME_SCOPE } from '../../data/constant'

type ChartDropdownType = {
    data : string[],
    actionType : string,
    changeChartProperty : (el : string) => void
}

const ChartDropdown = ({ data, actionType, changeChartProperty } : ChartDropdownType) => {

  const handleOnClickedEl = (el : string, index : number) => {
    if(actionType === "chatM") {
      if(index === 0) {
        changeChartProperty(MEASURE_TYPE.TURNOVER);
      } else if(index === 1) {
        console.log(index);
        changeChartProperty(MEASURE_TYPE.SOLD_NUMBER);
      } else {
        changeChartProperty("");
      }
    } else if(actionType === "timeS") {
      if(index === 0) {
        changeChartProperty(TIME_SCOPE.DAY);
      } else if(index === 1) {
        changeChartProperty(TIME_SCOPE.THIS_WEEK)
      } else if(index === 2) {
        changeChartProperty(TIME_SCOPE.LAST_WEEK)
      } else {
        changeChartProperty("");
      }

    } else if(actionType === "presType") {
      if(index === 0) {
        changeChartProperty(CHART_TYPE.BAR_TYPE)
      } else if(index === 1) {
        changeChartProperty(CHART_TYPE.LINEAR_TYPE)
      } else {
        changeChartProperty(CHART_TYPE.BAR_TYPE);
      }
    } else {
      return changeChartProperty("ERROR")
    }
  }
  console.log(data)
  return (
    <div className='sales-chart-wdg-dropdown'>
      {
        data.map((el, index) => (
          <div 
            key={index}
            className='sales-dropdown-el'
            onClick={() => { handleOnClickedEl(el, index) }}
          >
            { el }
          </div>
        ))
      }
    </div>
  )
}

export default ChartDropdown