import './App.css';
import React from "react";
import BookList from "./BookList";
import AddBookField from "./AddBookField";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Каталог книг</h1>
            </header>
            <main className="App-main">
                <AddBookField/>
                <BookList/>
            </main>
        </div>
    );
}

export default App;
