import { IoMdAdd } from 'react-icons/io';
import { RiSubtractLine } from 'react-icons/ri';
import './Notes.css';
import { useState, useEffect } from 'react';
import getCursorPosition from './getCursorPosition';




export default function Notes(props){

    const [notes, setNotes] = useState(props.problem.notes)
    const [focusID, setFocusID] = useState(0);


    useEffect(() => {
        document.getElementById(focusID).focus();
    })


    function handleKeyDown(e){

        // on 'enter' key press
        if (e.keyCode === 13){
            let index = parseInt(e.target.id) + 1;
            if (getCursorPosition(e.target) == 0){
                index -= 1;
            }
            addNote(index);
            setFocusID(index);
            e.preventDefault();
        }

        // on 'backspace' key press
        else if (e.keyCode === 8 && e.target.innerText === ""){
            let index = parseInt(e.target.id);
            if (notes.length != 1){
                removeNote(index);
                (index == 0 ? setFocusID(0) : setFocusID(index - 1));
                e.preventDefault();
            }
        }
    }


    // moves cursor to end of text on focus
    function handleFocus(e){
        let range = document.createRange();
        let selection = window.getSelection();
        range.selectNodeContents(e.target);
        range.collapse(false);
        selection.removeAllRanges();
        selection.addRange(range);
    }

    function editNote(e){
        props.problem.notes[e.target.id] = e.target.innerText
        localStorage.setItem('problemSet', JSON.stringify(props.problemSet));
    }

    function addNote(index){
        let newNotes = [...props.problem.notes]
        newNotes.splice(index, 0, '');
        props.problem.notes = newNotes;
        localStorage.setItem('problemSet', JSON.stringify(props.problemSet));
        setNotes(newNotes);
        console.log(props.problem.notes)
    }

    function removeNote(index){
        let newNotes = [...props.problem.notes]
        newNotes.splice(index, 1);
        props.problem.notes = newNotes;
        localStorage.setItem('problemSet', JSON.stringify(props.problemSet));
        setNotes(newNotes);
        console.log(props.problem.notes)
    }

    return(
        <div className='notes-container'>
            <ul className='notes-list'>
                {props.problem.notes.map((bullet, index) => (
                    <li id={index} contenteditable="true" onKeyDown={handleKeyDown} onInput={editNote} onFocus={handleFocus}>{bullet}</li>
                ))}
            </ul>

            {/* <div className='button-group'>
                <button className='add-button' onClick={addNote}>
                    New Line
                </button>
                <button className='delete-button' onClick={removeNote}>
                    Remove Line
                </button>
            </div> */}
            
        </div>
    );
}

