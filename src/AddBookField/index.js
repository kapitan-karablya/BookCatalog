import './style.css';
import React from "react";
import BookForm from "../BookForm";

function AddBookField(props) {
    return (
        <div className="add-book-field">
            <p className="add-book-title">Добавить книгу</p>
            <BookForm update={props.update}/>
        </div>
    );
}

export default AddBookField;
