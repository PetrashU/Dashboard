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
            sellNumber : "Liczba sprzedanych sztuk",
            timeScope : "Zakres czasu",
            today : "Dziś",
            thisWeek : "Obecny tydzień",
            lastWeek : "Poprzedni tydzień",
            presentationType : "Prezentacja",
            barChart : "Wykres słupkowy",
            linearChart : "Wykres liniowy",
            showMore : "Pokaż więcej",
        }
    } else if(lang === "English") {
        return {
            saleChartTitle : "Sale chart",
            turnover : "Turnover",
            sellNumber : "Number of sold products",
            timeScope : "Time scope",
            today : "Today",
            thisWeek : "This week",
            lastWeek : "Last week",
            chartMeasure : "Chart measure",
            presentationType : "Presentation type",
            barChart : "Bar chart",
            linearChart : "Linear chart",
            showMore : "Show more",
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