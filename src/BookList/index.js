import './style.css';
import React from "react";
import Book from "../Book";

function BookList(props) {

    if (localStorage.length < 2)
        return <div className="empty_list"><p>Книг пока нет</p><p>Добавьте книги через соответствующую форму</p></div>

    return (

        <div className="book-list">
            {Object.keys(props.books).slice(0).reverse().map(bookId => (
                <Book key={bookId} id={bookId} update={props.update} clickEditButton={props.clickEditButton}/>
            ))}
        </div>
    );
}

export default BookList;
