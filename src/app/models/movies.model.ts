export interface Movie {
    id: number;
    key: string;
    name: string;
    description: string;
    genres: GenreTypes[];
    rate: string;
    length: string;
    img: string;
}

export enum GenreTypes {
    Action = "Action",
    Adventure = "Adventure",
    Biography = "Biography",
    Comedy = "Comedy",
    Crime = "Crime",
    Drama = "Drama",
    History = "History",
    Mystery = "Mystery",
    Scifi = "Sci-Fi",
    Sport = "Sport",
    Thriller = "Thriller"
}
