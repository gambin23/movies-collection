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


export const mockMovies = [{
    id: 1,
    key: "mock1",
    name: "DEF",
    description: "Mock1 movie",
    genres: [],
    rate: 5,
    length: "",
    img: "",
    imdb: ""
},
{
    id: 2,
    key: "mock2",
    name: "ABC",
    description: "Mock2 movie",
    genres: [],
    rate: 7,
    length: "",
    img: "",
    imdb: ""
},
{
    id: 3,
    key: "mock3",
    name: "GHI",
    description: "Mock3 movie",
    genres: [],
    rate: 10,
    length: "",
    img: "",
    imdb: ""
}];
