import React from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import { Route } from "react-router-dom";
import BookList from "./BookList";

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
                <button onClick={() => this.setState({ showSearchPage: true })}>
                  Add a book
                </button>
              </div>
            </div>
          )}
        />
        {/*since we dont need to pass any ptops to CreateContact component we can create the Route component as follows as well
        <Route path="/create" component={CreateContact} />*/}
        <Route
        // path="/seaarch"
        // render={({ history }) => (
        //   <CreateContact

        //   />
        // )}
        />
      </div>
    );
  }
}

export default App;
