import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import BookComponent from "./BookComponent";
import PropTypes from "prop-types";

class SearchBooks extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    onUpdateBooksList: PropTypes.func.isRequired,
  };

  state = {
    query: "",
    searchedBooks: [],
  };

  searchBooksQuery = (event) => {
    const query = event.target.value;
    //add callback
    this.setState({ query }, () => {
      if (query.trim().length > 0) {
        BooksAPI.search(query.trim()).then((returnedBooks) => {
          if (query === this.state.query && returnedBooks.length > 0) {
            this.setState({ searchedBooks: returnedBooks });
          } else {
            this.setState({ searchedBooks: [] });
          }
        });
      } else this.setState({ searchedBooks: [] });
    });
  };

  render() {
    const { query } = this.state;
    const { onUpdateBooksList, books } = this.props;

    const searchedBooks = this.state.searchedBooks.map((book) => {
      const bookOnShelf = books.find((b) => b.id === book.id);
      return {
        ...book,
        shelf: bookOnShelf ? bookOnShelf.shelf : "none",
      };
    });
    console.log(searchedBooks);
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search-books" to="/">
            <button className="close-search">Close</button>
          </Link>

          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={query}
              onChange={this.searchBooksQuery}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {searchedBooks.length > 0 &&
              searchedBooks.map((eachBook) => (
                <li key={eachBook.id}>
                  <BookComponent
                    book={eachBook}
                    shelf={eachBook.shelf ? eachBook.shelf : "none"}
                    onUpdateBooksList={onUpdateBooksList}
                  />
                </li>
              ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default SearchBooks;
