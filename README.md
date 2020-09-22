# Description

An SPA showcasing a collection of movies.

# Instructions
To run the application locally execute 'npm install' & 'npm run start'
To run the tests execute 'npm run test' 

# Features
- View list of movies (/movies)
- Filtering movies by genre (inc. multple selection i.e. /movies?genre=a&genre=b)
- View movie detail by key (/movie:key)
- View movie synopsis fetched from imdb
- Favourites (stored in local storage)
- Search movies by name
- Sorting (Alphabetical / Rating)

# Decisions
- This SPA was built with a customized implementation of Angular Material.
- Movies and favourites lists are stored in redux store by using ngrx.
- Favourites are stored and rehydrated from local storage by using ngrx-store-localstorage.
