import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Create extends Component {

    constructor() {
        super();
        this.state = {
        isbn: '',
        title: '',
        author: '',
        description: '',
        published_date: '',
        publisher: ''
        };
    }
    onChange = (e) => {
        const state = this.state
        state[e.target.name] = e.target.value;
        this.setState(state);
    }

    onSubmit = (e) => {
        e.preventDefault();

        const { isbn, title, author, description, published_date, publisher } = this.state;

        axios.post('/api/book', { isbn, title, author, description, published_date, publisher })
        .then((result) => {
            this.props.history.push("/")
        });
    }

    render() {
        const { isbn, title, author, description, published_date, publisher } = this.state;
        return (
            <div class="container mt-5 mb-5">
                <div class="panel panel-default">
                    <div class="d-flex justify-content-center mb-2">
                        <h1>ADD BOOK</h1>
                    </div>
                    <div class="card">
                        <div class="card-body">
                            <div class="panel-body">
                                <h4><Link to="/" class="btn btn-outline-warning"><span class="glyphicon glyphicon-th-list" aria-hidden="true"></span> Book List</Link></h4>
                                <form onSubmit={this.onSubmit}>
                                    <div class="form-group">
                                        <label for="isbn">ISBN:</label>
                                        <input type="text" class="form-control mr-sm-2" name="isbn" value={isbn} onChange={this.onChange} placeholder="ISBN" />
                                    </div>
                                    <div class="form-group">
                                        <label for="title">Title:</label>
                                        <input type="text" class="form-control mr-sm-2" name="title" value={title} onChange={this.onChange} placeholder="Title" />
                                    </div>
                                    <div class="form-group">
                                        <label for="author">Author:</label>
                                        <input type="text" class="form-control mr-sm-2" name="author" value={author} onChange={this.onChange} placeholder="Author" />
                                    </div>
                                    <div class="form-group">
                                        <label for="description">Description:</label>
                                        <textArea class="form-control mr-sm-2" name="description" onChange={this.onChange} placeholder="Description" cols="80" rows="3">{description}</textArea>
                                    </div>
                                    <div class="form-group">
                                        <label for="published_date">Published Year:</label>
                                        <input type="number" class="form-control mr-sm-2" name="published_date" min="1900" max="2030" value={published_date} onChange={this.onChange} placeholder="Published Year" />
                                    </div>
                                    <div class="form-group">
                                        <label for="publisher">Publisher:</label>
                                        <input type="text" class="form-control mr-sm-2" name="publisher" value={publisher} onChange={this.onChange} placeholder="Publisher" />
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

export default Create;