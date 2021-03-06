import React, { Component } from "react";
import PropTypes from "prop-types";

class BookComponent extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    shelf: PropTypes.string.isRequired,
    onUpdateBooksList: PropTypes.func.isRequired,
  };
  updateBookShelf = (e) => {
    this.props.onUpdateBooksList(this.props.book, e.target.value);
  };
  render() {
    const { book, shelf } = this.props;
    return (
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${
                book.hasOwnProperty("imageLinks")
                  ? book.imageLinks.thumbnail
                  : ""
              })`,
            }}
          />
          <div className="book-shelf-changer">
            <select value={shelf} onChange={this.updateBookShelf}>
              <option value="move" disabled>
                Move to...
              </option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">
          {book.hasOwnProperty("authors") ? book.authors.join(" & ") : []}
        </div>
      </div>
    );
  }
}

export default BookComponent;
