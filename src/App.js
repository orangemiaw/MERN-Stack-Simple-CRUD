import React, { Component } from 'react';
import logo from './logo.svg'
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      books: []
    };
  }

  componentDidMount() {
    axios.get('/api/book')
      .then(res => {
        this.setState({ books: res.data });
        console.log(this.state.books);
      });
  }

  render() {
    return (
      <div class="container mt-5 mb-5">
        <div class="panel panel-default">
          <div class="d-flex justify-content-center mb-2">
            <h1>BOOK CATALOG</h1>
          </div>
          <div class="card">
            <div class="card-body">
              <div class="panel-body">
                <h4><Link to="/create" class="btn btn-outline-warning"><span class="glyphicon glyphicon-th-list" aria-hidden="true"></span> Add Book</Link></h4>
                <table class="table table-stripe">
                  <thead>
                    <tr>
                      <th>ISBN</th>
                      <th>Title</th>
                      <th>Author</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.books.map(book =>
                      <tr>
                        <td><Link to={`/show/${book._id}`}>{book.isbn}</Link></td>
                        <td>{book.title}</td>
                        <td>{book.author}</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;