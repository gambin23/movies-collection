import { MoviesComponent } from "./movies.component";
import { mockMovies } from "./movies.model";

describe("MoviesComponent", () => {
    let component: MoviesComponent;

    beforeEach(() => {
        component = new MoviesComponent();
        component.movies = mockMovies;
        component.filteredMovies = mockMovies;
    });

    it("should search by name", () => {
        const query = "ABC";
        component.onSearch(query);
        expect(component.filteredMovies[0].name).toEqual(query);
        expect(component.filteredMovies.length).toEqual(1);
        expect(component.searchQuery).toEqual(query);
    });

    it("should search by name and return no results", () => {
        const query = "test";
        component.onSearch(query);
        expect(component.filteredMovies.length).toEqual(0);
        expect(component.searchQuery).toEqual(query);
    });

    it("should sort by alphabetical", () => {
        component.onSort("alphabetical");
        expect(component.filteredMovies[0].name).toEqual("ABC");
    });

    it("should sort by rating", () => {
        component.onSort("rating");
        expect(component.filteredMovies[0].rate).toEqual(10);
    });
});
