import './style.css';
import React from "react";
import BookForm from "../BookForm";

function AddBookField() {
    return (
        <div className="add-book-field">
            <p className="add-book-title">Добавить книгу</p>
            <BookForm/>
        </div>
    );
}

export default AddBookField;
