import React, { Component } from "react";
import BookComponent from "./BookComponent";
import PropTypes from "prop-types";

class BookList extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    shelf: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    onUpdateBooksList: PropTypes.func.isRequired,
  };
  render() {
    const { books, shelf, title, onUpdateBooksList } = this.props;
    return (
      <div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">{title}</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {books
                .filter((eachBook) => eachBook.shelf === shelf)
                .map((returnedBook) => (
                  <li key={returnedBook.id}>
                    <BookComponent
                      book={returnedBook}
                      shelf={shelf}
                      onUpdateBooksList={onUpdateBooksList}
                    />
                  </li>
                ))}
            </ol>
          </div>
        </div>
      </div>
    );
  }
}

export default BookList;
