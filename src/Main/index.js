import './style.css';
import React, {useState} from "react";
import AddBookField from "../AddBookField";
import BookList from "../BookList";

function Main() {

    const getBooksList = () => {
        let books = {};
        for(let i=localStorage.length-1; i>0; i--) {
            let key = localStorage.key(i);
            if (key !== "lastId")
                books[key] = JSON.parse(localStorage.getItem(key));
        }
        return books
    };

    let [books, setBooks] = useState(getBooksList());

    return (
        <main className="App-main">
            <AddBookField update={() => setBooks(getBooksList())}/>
            <BookList books={books} update={() => setBooks(getBooksList())}/>
        </main>
    );
}

export default Main;
