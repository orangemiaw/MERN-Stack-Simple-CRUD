import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Edit extends Component {

    constructor(props) {
        super(props);
        this.state = {
        book: {}
        };
    }

    componentDidMount() {
        axios.get('/api/book/'+this.props.match.params.id)
        .then(res => {
            this.setState({ book: res.data });
            console.log(this.state.book);
        });
    }

    onChange = (e) => {
        const state = this.state.book
        state[e.target.name] = e.target.value;
        this.setState({book:state});
    }

    onSubmit = (e) => {
        e.preventDefault();

        const { isbn, title, author, description, published_date, publisher } = this.state.book;

        axios.put('/api/book/'+this.props.match.params.id, { isbn, title, author, description, published_date, publisher })
        .then((result) => {
            this.props.history.push("/show/"+this.props.match.params.id)
        });
    }

    render() {
        return (
            <div class="container mt-5 mb-5">
                <div class="panel panel-default">
                    <div class="d-flex justify-content-center mb-2">
                        <h1>EDIT BOOK</h1>
                    </div>
                    <div class="card">
                        <div class="card-body">
                            <div class="panel-body">
                                <h4><Link to={`/show/${this.state.book._id}`} class="btn btn-outline-warning"><span class="glyphicon glyphicon-th-list" aria-hidden="true"></span> Book Detail</Link></h4>
                                <form onSubmit={this.onSubmit}>
                                    <div class="form-group">
                                        <label for="isbn">ISBN:</label>
                                        <input type="text" class="form-control" name="isbn" value={this.state.book.isbn} onChange={this.onChange} placeholder="ISBN" />
                                    </div>
                                    <div class="form-group">
                                        <label for="title">Title:</label>
                                        <input type="text" class="form-control" name="title" value={this.state.book.title} onChange={this.onChange} placeholder="Title" />
                                    </div>
                                    <div class="form-group">
                                        <label for="author">Author:</label>
                                        <input type="text" class="form-control" name="author" value={this.state.book.author} onChange={this.onChange} placeholder="Author" />
                                    </div>
                                    <div class="form-group">
                                        <label for="description">Description:</label>
                                        <input type="text" class="form-control" name="description" value={this.state.book.description} onChange={this.onChange} placeholder="Description" />
                                    </div>
                                    <div class="form-group">
                                        <label for="published_date">Published Year:</label>
                                        <input type="number" class="form-control" name="published_date" min="1900" max="2030" value={this.state.book.published_date} onChange={this.onChange} placeholder="Published Year" />
                                    </div>
                                    <div class="form-group">
                                        <label for="publisher">Publisher:</label>
                                        <input type="text" class="form-control" name="publisher" value={this.state.book.publisher} onChange={this.onChange} placeholder="Publisher" />
                                    </div>
                                    <div class="modal-footer">
                                        <button type="submit" class="btn btn-outline-success">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Edit;