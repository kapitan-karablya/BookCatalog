import './style.css';
import React, {useState} from "react";
import AddBookField from "../AddBookField";
import BookList from "../BookList";
import Modal from "../Modal";

function Main() {
    const [isModal, setModal] = useState(false);
    const [bookId, setBookId] = useState(undefined);

    const onClose = () => setModal(false);

    const getBooksList = () => {
        let books = {};
        for(let i=0; i<localStorage.length; i++) {
            let key = localStorage.key(i);
            if (key !== "lastId")
                books[key] = JSON.parse(localStorage.getItem(key));
        }
        return books
    };

    const [books, setBooks] = useState(getBooksList());

    const clickEditButton = (id) => {
        setBookId(id);
        setModal(true);
    };

    const click = () => {
        setBooks({});
        setTimeout(setBooks, 0, getBooksList());
    };

    return (
        <main className="App-main">
            <AddBookField update={() => setBooks(getBooksList())}/>
            <BookList books={books} clickEditButton={clickEditButton} update={() => setBooks(getBooksList())}/>
            <Modal
                visible={isModal}
                title='Заголовок'
                onClose={onClose}
                bookId={bookId}
                update={() => click()}
            />
        </main>
    );
}

export default Main;
