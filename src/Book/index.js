import './style.css';
import React from "react";
import {useState} from "react";
import no_cover from "../no_cover.jpeg"

function Book(props) {

    const [book] = useState( JSON.parse(localStorage.getItem(props.id)));

    const deleteBook = () => {
        localStorage.removeItem(props.id);
        props.update();
    };

    return (
        <div className="book">
            <div className="book-cover">
                <img width="145" height="205"
                     src={book.cover === '' ? no_cover : book.cover}
                     alt=""/>
            </div>
            <div className="book-info">
                <p className="book-title">{book.title === '' ? 'Без названия' : book.title}</p>
                <p className="book-author">{book.author === '' ? 'Автор неизвестен' : book.author}</p>
            </div>
            <div className="hide-book-buttons">
                <button className="book-button book-edit-button">Изменить</button>
                <button className="book-button book-delete-button" onClick={deleteBook}>Удалить</button>
            </div>
        </div>
    );
}

export default Book;
