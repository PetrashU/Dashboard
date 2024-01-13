import { MEASURE_TYPE, TIME_SCOPE } from "../data/constant";
import { ChartSettingsType } from "./chartReducer";

export const chartDataResolver = ({ settings, translation }  : { settings : ChartSettingsType, translation : any } ) => {
    let data : any = [initChart({ settings, translation })];
    if(settings.timeScope === TIME_SCOPE.DAY) {
        return generateDataForDayScope({ data, translation, measureType : settings.measureType });
    }
    else if(settings.timeScope === TIME_SCOPE.THIS_WEEK) {
        return generateDataForThisWeekScope({ data, translation, measureType : settings.measureType  });
    } else if(settings.timeScope === TIME_SCOPE.LAST_WEEK) {
        return generateDataForLastWeekScope({ data, translation, measureType : settings.measureType  });
    } 
}

function initChart({ settings, translation} : { settings : ChartSettingsType, translation : any }) {
    let legend  = [];
    if(settings.measureType === MEASURE_TYPE.SOLD_NUMBER) {
        legend.push(translation.soldNumber)
    } else if(settings.measureType === MEASURE_TYPE.TURNOVER) {
        legend.push(translation.turnover);
    }

    if(settings.timeScope === TIME_SCOPE.DAY) {
        legend.push(translation.today)
    }
    else if(settings.timeScope === TIME_SCOPE.THIS_WEEK) {
        legend.push(translation.thisWeek)
    }
    else if(settings.timeScope === TIME_SCOPE.LAST_WEEK) {
        legend.push(translation.lastWeek)
    }
    
    return legend;
}

function generateDataForLastWeekScope({ data , translation, measureType } : { data : any, translation : any, measureType : string }) {
    if(measureType === MEASURE_TYPE.SOLD_NUMBER) {
        data.push([translation.september, 360])
        data.push([translation.october, 350])
        data.push([translation.november, 210])
        data.push([translation.december, 280])
    } else if(measureType === MEASURE_TYPE.TURNOVER) {
        data.push([translation.september, 1000])
        data.push([translation.october, 500])
        data.push([translation.november, 300])
        data.push([translation.december, 800])
    }
    return data;
}


function generateDataForDayScope({ data , translation, measureType } : { data : any, translation : any, measureType : string }) {
    if(measureType === MEASURE_TYPE.SOLD_NUMBER) {
        data.push([4,1])
        data.push([8,1])
        data.push([12,3])
        data.push([16,6])
        data.push([20,7])
        data.push([24,5])
    } else if(measureType === MEASURE_TYPE.TURNOVER) {
        data.push([4,10])
        data.push([8,12])
        data.push([12,11])
        data.push([16,5])
        data.push([20,6])
        data.push([24,8])
    }
    return data;
}

function generateDataForThisWeekScope({ data , translation, measureType } : { data : any, translation : any, measureType : string  }) {
    if(measureType === MEASURE_TYPE.SOLD_NUMBER) {
        data.push([translation.monday, 10])
        data.push([translation.tuesday, 15])
        data.push([translation.wednesday,18])
        data.push([translation.thursday, 19])
        data.push([translation.friday, 0])
        data.push([translation.saturday, 0])
        data.push([translation.sunday, 0])
    } else if(measureType === MEASURE_TYPE.TURNOVER) {
        data.push([translation.monday, 10])
        data.push([translation.tuesday, 5])
        data.push([translation.wednesday,8])
        data.push([translation.thursday, 9])
        data.push([translation.friday, 0])
        data.push([translation.saturday, 0])
        data.push([translation.sunday, 0])
    }
    return data;
}