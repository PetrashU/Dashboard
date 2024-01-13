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
            ratingCategory : "Kategoria oceny",
            rating : "Ocena",
            salesResults : "Wyniki sprzedaży",
            salesSkills : "Umiejętności sprzedażowe",
            responsibility : "Odpowiedzialność",
            overview : "Podsumowanie",
            ratingQuality : "Ocena jakości",
            qualityCategory : "Kategoria jakości",
            showMore : "Zobacz więcej"
        }
    } else if(lang === "English") {
        return {
            qualityOfSale : "Quality of sale",
            ratingCategory : "Rating category",
            rating : "Rating",
            salesResults : "Sales results",
            salesSkills : "Sales skills",
            responsibility : "Responosibility",
            overview : "Overview",
            ratingQuality : "Quality rating",
            qualityCategory : "Quality category",
            showMore : "Show more"
        }
    } else {
        return {}
    }
}