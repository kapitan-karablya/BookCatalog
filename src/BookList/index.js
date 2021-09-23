import './style.css';
import React from "react";
import Book from "../Book";

function BookList(props) {

    return (
        <div className="book-list">
            {Object.keys(props.books).slice(0).reverse().map(bookId => (
                <Book key={bookId} id={bookId} update={props.update}/>
            ))}
        </div>
    );
}

export default BookList;
