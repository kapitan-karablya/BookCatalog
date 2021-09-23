import './style.css';
import React, {useEffect} from "react";
import BookForm from "../BookForm";

function Modal(props) {

    const onKeydown = (event) => {
        if(event.key === 'Escape'){
                props.onClose()
        }
    };

    useEffect(() => {
        document.addEventListener('keydown', onKeydown)
        return () => document.removeEventListener('keydown', onKeydown)
    });

    const saveChanges = () => {
        props.update(props.bookId);
        props.onClose();
    };

    if (!props.visible)
        return null;
    else
        return (
            <div className="modal" onClick={() => props.onClose()}>
                <div className="modal-dialog"  onClick={e => e.stopPropagation()}>
                    <p className="modal-title">Изменить книгу</p>
                    <BookForm bookId={props.bookId} update={saveChanges}/>
                    <span className='modal-close' onClick={() => props.onClose()}>
                        &times;
                    </span>
                </div>
            </div>
        );
}

export default Modal;
