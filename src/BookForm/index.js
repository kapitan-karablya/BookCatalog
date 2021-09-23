import './style.css';
import React, {useState} from "react";


function BookForm(props) {
    const [inputValues, setInputValues] = useState({
        title: '', author: '', cover: ''
    });

    const handleOnChange = event => {
        const {name, value} = event.target;
        setInputValues({...inputValues, [name]: value});
    };

    const handleSubmit = event => {
        event.preventDefault();
        let lastId = localStorage.getItem('lastId');
        let newId = lastId === null ? 1 : parseInt(lastId) + 1;
        localStorage.setItem('lastId', newId);
        localStorage.setItem(newId, JSON.stringify(inputValues));
        props.update();
        setInputValues({
            title: '', author: '', cover: ''
        });
        const file = document.querySelector('.book-form-picture');
        file.value = '';
    };

    function getBase64(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
        });
    }

    const handleOnChangeCover = event => {
        let file = event.target.files[0];
        if (file === undefined)
            return;
        console.log(file);
        const name = event.target.name;
        getBase64(file).then(
            data => setInputValues({...inputValues, [name]: data})
        );

    };

    return (
        <form className="book-form" onSubmit={handleSubmit}>
            <label className="book-form-label" htmlFor="book-title">Название книги</label>
            <input className="book-form-input"
                   id="book-title"
                   type="text"
                   name="title"
                   value={inputValues.title}
                   onChange={handleOnChange}/>
            <label className="book-form-label" htmlFor="book-author">Автор книги</label>
            <input className="book-form-input"
                   id="book-author"
                   type="text"
                   name="author"
                   value={inputValues.author}
                   onChange={handleOnChange}/>
            <label className="book-form-label">Добавить обложку (145x205)</label>
            <input className="book-form-picture"
                   type="file"
                   name="cover"
                   accept="image/*"
                   onChange={handleOnChangeCover}/>
            <button className="book-form-submit" type="submit">Сохранить</button>
        </form>
    );
}

export default BookForm;
