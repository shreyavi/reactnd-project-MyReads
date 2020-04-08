import React, { Component } from "react";

class BookComponent extends Component {
  state = {
    value: this.props.shelf,
  };
  handleChange = (event) => {
    const { value } = event.target;
    this.setState({ value });
    this.props.onUpdateBooksList(this.props.book, value);
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
              backgroundImage: `url(${book.imageLinks.smallThumbnail})`,
            }}
          ></div>
          <div className="book-shelf-changer">
            <select value={shelf} onChange={this.handleChange}>
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
        <div className="book-authors">{book.authors.join(" & ")}</div>
      </div>
    );
  }
}

export default BookComponent;
