import './style.css';
import React from "react";
import Book from "../Book";

function BookForm() {
    return (
        <form className="book-form">
            <label className="book-form-label" htmlFor="book-title">Название книги</label>
            <input className="book-form-input" id="book-title" type="text"/>
            <label className="book-form-label" htmlFor="book-author">Автор книги</label>
            <input className="book-form-input" id="book-author" type="text"/>
            <label className="book-form-label">Добавить обложку (145x205)</label>
            <input className="book-form-picture" type="file" name="picture" accept="image/*" />
            <button className="book-form-submit" type="submit">Сохранить</button>
        </form>
    );
}

export default BookForm;
