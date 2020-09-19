export interface Movie {
    id: number;
    key: string;
    name: string;
    description: string;
    genres: GenreType[];
    rate: string;
    length: string;
    img: string;
}

export enum GenreType {
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
