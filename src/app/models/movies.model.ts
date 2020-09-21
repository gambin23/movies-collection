export interface Movie {
    id: number;
    key: string;
    name: string;
    description: string;
    genres: GenreTypes[];
    rate: number;
    length: string;
    img: string;
    imdb: string;
}

export enum GenreTypes {
    action = "Action",
    adventure = "Adventure",
    biography = "Biography",
    comedy = "Comedy",
    crime = "Crime",
    drama = "Drama",
    history = "History",
    mystery = "Mystery",
    scifi = "Sci-Fi",
    sport = "Sport",
    thriller = "Thriller"
}
