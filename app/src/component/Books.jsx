import React from 'react';
import axios from 'axios';

export default class Books extends React.Component {
    state = {
        books : []
    }

    componentDidMount(){
        this.getBooks()
    }

    getBooks = () => {
        axios.get('http://localhost:8000/api/books.json')
        .then(response => response.data)
        .then(data => {
            this.setState({
                books : data
            })
        })
    }

    render(){
        console.log(this.state.books)
        return(
            <div>
                <ul>
                {
                    this.state.books.map((book, i) => 
                            <li key={i}>{book.title} - {book.year}</li>
                            )
                        }
                </ul>
            </div>
        )
    }
}

