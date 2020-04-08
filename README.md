# MyReads Project

This is a project for Udacity's React Fundamentals course. The goal of this project is to create a bookshelf app that allows you to select and categorize books you have read, are currently reading, or want to read. The main page also has a link to a search page that allows you to find books to add to your library.

After cloning and downloading this repo from Github get started by running the following commands in the project terminal:

- install all project dependencies with `npm install`
- start the development server with `npm start`

## Backend Server

Udacity provided a backend server to be used in the project. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods required to perform necessary operations on the backend:

- [`getAll`](#getall)
- [`update`](#update)
- [`search`](#search)

## Important

The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.
