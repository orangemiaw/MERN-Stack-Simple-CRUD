import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Show extends Component {

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

    delete(id){
        console.log(id);
        axios.delete('/api/book/'+id)
        .then((result) => {
            this.props.history.push("/")
        });
    }

    render() {
        return (
            <div class="container mt-5 mb-5">
                <div class="panel panel-default">
                    <div class="d-flex justify-content-center mb-2">
                        <h3 class="panel-title">
                            {this.state.book.title}
                        </h3>
                    </div>
                    <div class="card">
                        <div class="card-body">
                            <div class="panel-body">
                                <h4><Link to="/" class="btn btn-outline-warning"><span class="glyphicon glyphicon-th-list" aria-hidden="true"></span> Book List</Link></h4>
                                <dl>
                                <dt>ISBN:</dt>
                                <dd>{this.state.book.isbn}</dd>
                                <dt>Author:</dt>
                                <dd>{this.state.book.author}</dd>
                                <dt>Description:</dt>
                                <dd>{this.state.book.description}</dd>
                                <dt>Publish Year:</dt>
                                <dd>{this.state.book.published_date}</dd>
                                <dt>Publisher:</dt>
                                <dd>{this.state.book.publisher}</dd>
                                </dl>
                                <div class="modal-footer">
                                    <Link to={`/edit/${this.state.book._id}`} class="btn btn-outline-success">Edit</Link>&nbsp;
                                    <button onClick={this.delete.bind(this, this.state.book._id)} class="btn btn-outline-danger">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Show;