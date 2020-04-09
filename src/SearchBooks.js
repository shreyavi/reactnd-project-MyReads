import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import BookComponent from "./BookComponent";
import PropTypes from "prop-types";

class SearchBooks extends Component {
  static propTypes = {
    //books: PropTypes.array.isRequired,
    onUpdateBooksList: PropTypes.func.isRequired,
  };

  state = {
    query: "",
    searchedBooks: [],
  };

  searchBooksQuery = (event) => {
    const query = event.target.value;
    this.setState({ query });
    if (query) {
      BooksAPI.search(query.trim()).then((returnedBooks) => {
        if (returnedBooks.length > 0) {
          returnedBooks.map((rBook) => {
            this.props.books.map((b) => {
              if (b.id === rBook.id) {
                rBook.shelf = b.shelf;
              }
              return b;
            });
            return rBook;
          });
          console.log(returnedBooks);
          this.setState({ searchedBooks: returnedBooks });
        } else {
          this.setState({ searchedBooks: [] });
        }
      });
    } else this.setState({ searchedBooks: [] });
  };

  render() {
    const { query, searchedBooks } = this.state;
    const { onUpdateBooksList } = this.props;
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
