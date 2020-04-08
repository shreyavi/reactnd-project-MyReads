import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import BookComponent from "./BookComponent";

class SearchBooks extends Component {
  searchBooksQuery = (query) => {
    BooksAPI.search(query);
  };

  state = {
    query: "",
    searchedBooks: [],
  };

  searchBooksQuery = (query) => {
    this.setState({
      query: query.trim(),
    });

    if (query) {
      BooksAPI.search(query).then((books) => {
        books.length > 0
          ? this.setState({ searchedBooks: books })
          : this.setState({ searchedBooks: [] });
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
              onChange={(event) => this.searchBooksQuery(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {searchedBooks.length > 0 &&
              searchedBooks.map((eachBook) => (
                <BookComponent
                  key={eachBook.id}
                  book={eachBook}
                  onUpdateBooksList={onUpdateBooksList}
                />
              ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default SearchBooks;
