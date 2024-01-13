import { CHART_TYPE, MEASURE_TYPE, TIME_SCOPE } from "../data/constant"

export type ChartSettingsType = {
    measureType : string,
    timeScope : string,
    presentationType : string
  } 
  
  type ChartAction = {
    type : CASES
    payload : string
  }
  
export const enum CASES  {
    MEASURE, TIME, PRESENTATION
  } 
  
  export const initChartSettings : ChartSettingsType = {
    measureType : MEASURE_TYPE.TURNOVER,
    timeScope : TIME_SCOPE.DAY,
    presentationType : CHART_TYPE.BAR_TYPE,
  }


export const chartReducer = (state : ChartSettingsType , action : ChartAction) => {
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