import React, { Component } from "react";

class BookComponent extends Component {
  render() {
    const { backgroundImage, title, authors, shelf } = this.props;
    return (
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${backgroundImage})`,
            }}
          ></div>
          <div className="book-shelf-changer">
            <select value={shelf}>
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
        <div className="book-title">{title}</div>
        <div className="book-authors">{authors.join(" & ")}</div>
      </div>
    );
  }
}

export default BookComponent;
