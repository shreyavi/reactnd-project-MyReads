import React, { Component } from "react";
import BookComponent from "./BookComponent";

class BookList extends Component {
  render() {
    const { books, shelf, title } = this.props;
    return (
      <div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">{title}</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {console.log(books)}
              {books
                .filter((book) => book.shelf === shelf)
                .map((returnedBook) => (
                  <li key={returnedBook.id}>
                    <BookComponent
                      id={returnedBook.id}
                      title={returnedBook.title}
                      authors={returnedBook.authors}
                      shelf={shelf}
                      backgroundImage={returnedBook.imageLinks.smallThumbnail}
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
