export const translateUtil = ({ lang, wdg } : { lang : string, wdg : string }) => {
    if(wdg === "saleQualityWidg") {
        return translateSaleQualityWidg(lang);
    } else if(wdg === "salesChartWidg") {
        return translateSalesChartWidg(lang);
    }
}

const translateSalesChartWidg = (lang : string) => {
    if(lang === "Polish") {
        return {
            saleChartTitle : "Wykres sprzedaży",
            chartMeasure : "Miara wykresu",
            turnover : "Obrót",
            soldNumber : "Liczba sprzedanych sztuk",
            timeScope : "Zakres czasu",
            today : "Dziś",
            thisWeek : "Obecny tydzień",
            lastWeek : "Poprzedni tydzień",
            presentationType : "Prezentacja",
            barChart : "Wykres słupkowy",
            linearChart : "Wykres liniowy",
            showMore : "Pokaż więcej",
            monday : "Poniedziałek",
            tuesday : "Wtorek",
            wednesday : "Środa",
            thursday : "Czwartek",
            friday : "Piątek",
            saturday : "Sobota",
            sunday : "Niedziela",
            december : "Grudzień",
            november : "Listopad",
            october : "Październik",
            september : "Wrzesień"
        }
    } else if(lang === "English") {
        return {
            saleChartTitle : "Sale chart",
            turnover : "Turnover",
            soldNumber : "Number of sold products",
            timeScope : "Time scope",
            today : "Today",
            thisWeek : "This week",
            lastWeek : "Last week",
            chartMeasure : "Chart measure",
            presentationType : "Presentation type",
            barChart : "Bar chart",
            linearChart : "Linear chart",
            showMore : "Show more",
            monday : "Monday",
            tuesday : "Tuesday",
            wednesday : "Wednesday",
            thursday : "Thursday",
            friday : "Friday",
            saturday : "Saturday",
            sunday : "Sunday",
            december : "December",
            november : "November",
            october : "October",
            september : "September"
        }
    } else {}
} 

const translateSaleQualityWidg = (lang : string) => {
    if(lang === "Polish") {
        return {
            qualityOfSale : "Jakość sprzedaży",
            ratingCategory : "KATEGORIA OCENY",
            rating : "OCENA",
            salesResults : "WYNIKI SPRZEDAŻY",
            salesResultsResult  : 5,
            salesSkills : "UMIEJĘTNOŚCI SPRZEDAŻOWE",
            salesSkillsResult : 5,
            responsibility : "ODPOWIEDZIALNOŚĆ",
            responsibilityResult : 10,
            overview : "Podsumowanie",
            ratingQuality : "OCENA JAKOŚCI",
            ratingQualityResult : "20/50",
            qualityCategory : "KATEGORIA JAKOŚCI",
            ratingQualityCategory : "SŁABA",
            showMore : "Pokaż więcej"
        }
    } else if(lang === "English") {
        return {
            qualityOfSale : "Quality of sale",
            ratingCategory : "RATING CATEGORY",
            rating : "RATING",
            salesResultsResult  : 0,
            salesResults : "SALES RESULTS",
            salesSkillsResult : 0,
            salesSkills : "SALES SKILLS",
            responsibilityResult : 0,
            responsibility : "RESPONSIBILITY",
            overview : "Overview",
            ratingQuality : "QUALITY RATING",
            ratingQualityResult : "20/50",
            qualityCategory : "QUALITY CATEGORY",
            ratingQualityCategory : "POOR",
            showMore : "Show more"
        }
    } else {
        return {}
    }
}