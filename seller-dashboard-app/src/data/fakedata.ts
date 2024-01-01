export type Review = {
    id: number;
    language: string;
    product: string;
    text: string;
    stars: number;
};

export const reviews: Review[] = [
    {
        id: 1,
        language: "Polish",
        product: "Statyw",
        text: "Doskonała stabilność i lekkość. Idealny do fotografii podróżniczej!",
        stars: 5
    },
    {
        id: 2,
        language: "English",
        product: "Camera Bag",
        text: "Spacious but the material feels a bit cheap.",
        stars: 3
    },
    {
        id: 3,
        language: "Polish",
        product: "Karta pamięci",
        text: "Nie tak szybka jak zapowiadano, dość rozczarowująca.",
        stars: 2
    },
    {
        id: 4,
        language: "Polish",
        product: "Filtr obiektywu",
        text: "Doskonała przejrzystość i trwałość. Niezbędny do ochrony obiektywu.",
        stars: 5
    },
    {
        id: 5,
        language: "English",
        product: "Flash",
        text: "Overheats quickly and battery life is poor.",
        stars: 1
    },
    {
        id: 6,
        language: "Polish",
        product: "Karta pamięci",
        text: "Dobra dla swojej ceny",
        stars: 4
    },
];

export type ProductSale = {
    id: number;
    productName: string;
    salesNumber: number;
    revenue: number;
  };
  
  export const productSalesData: ProductSale[] = [
    {
      id: 1,
      productName: "Statyw Fotograficzny",
      salesNumber: 15,
      revenue: 450
    },
    {
      id: 2,
      productName: "Aparat Cyfrowy",
      salesNumber: 6,
      revenue: 24000
    },
    {
      id: 3,
      productName: "Obiektyw 50mm",
      salesNumber: 4,
      revenue: 12000
    },
    {
      id: 4,
      productName: "Torba na Aparat",
      salesNumber: 13,
      revenue: 7000
    },
    {
      id: 5,
      productName: "Mikrofon Kierunkowy",
      salesNumber: 8,
      revenue: 5000
    },
    {
      id: 6,
      productName: "Oświetlenie LED",
      salesNumber: 10,
      revenue: 400
    }
  ];
  