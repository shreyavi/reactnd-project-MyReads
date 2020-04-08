import React, { Component } from "react";
import BookComponent from "./BookComponent";

class BookList extends Component {
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
