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
];