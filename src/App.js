import React from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import { Route } from "react-router-dom";
import BookList from "./BookList";
import SearchBooks from "./SearchBooks";
import { Link } from "react-router-dom";

class App extends React.Component {
  state = {
    books: [],
    showSearchPage: false,
  };

  componentDidMount() {
    BooksAPI.getAll().then((booksResult) =>
      this.setState(() => ({ books: booksResult }))
    );
  }

  updateBooksList = (book, shelf) => {
    BooksAPI.update(book, shelf).then((booksResult) => {
      BooksAPI.getAll().then((booksResponse) => {
        this.setState(() => ({ books: booksResponse }));
      });
    });
  };

  render() {
    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => (
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <div className="list-books-content">
                <div>
                  <BookList
                    title="Currently Reading"
                    shelf="currentlyReading"
                    books={this.state.books}
                    onUpdateBooksList={this.updateBooksList}
                  />
                  <BookList
                    title="Want to Read"
                    shelf="wantToRead"
                    books={this.state.books}
                    onUpdateBooksList={this.updateBooksList}
                  />
                  <BookList
                    title="Read"
                    shelf="read"
                    books={this.state.books}
                    onUpdateBooksList={this.updateBooksList}
                  />
                </div>
              </div>
              <div className="open-search">
                <Link to="/search">
                  <button>Add a Book</button>
                </Link>
              </div>
            </div>
          )}
        />

        <Route
          path="/search"
          render={({ history }) => (
            <SearchBooks
              books={this.state.books}
              onUpdateBooksList={this.updateBooksList}
            />
          )}
        />
      </div>
    );
  }
}

export default App;
