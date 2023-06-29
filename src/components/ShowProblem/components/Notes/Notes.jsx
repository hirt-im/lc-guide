import { IoMdAdd } from 'react-icons/io';
import { RiSubtractLine } from 'react-icons/ri';
import './Notes.css';
import { useState, useEffect } from 'react';



let testNotes = ['this is the first test bullet point',
'this is the second test bullet point',
'this is the third test bullet point',
'this is the fourth test bullet point',
'and so on' 
];

export default function Notes(props){

    const [notes, setNotes] = useState(props.problem.notes)

    // go through lines and set focus to first empty one
    // let focusedIndex = 0;
    // notes.findLast((note, index) => {
    //     if(note === ""){
    //         focusedIndex = index;
    //     }
    // })
    // console.log(focusedIndex);



    useEffect(() => {
        let lastBlankIndex = 0;
        notes.findLast((note, index) => {
            if(note === ""){
                lastBlankIndex = index;  
            }
        })
        let numNotes = notes.length;

        let focusedIndex = Math.max(lastBlankIndex, numNotes - 1);
        let liToFocus = document.getElementById(focusedIndex.toString());
        liToFocus.focus();
        console.log(liToFocus);
    })

    function handleKeyDown(e){

        // on 'enter' key press
        if (e.keyCode === 13){
            addNote(parseInt(e.target.id) + 1);
            e.preventDefault();
        }

        // on 'backspace' key press
        else if (e.keyCode === 8 && e.target.innerText === ""){
            removeNote(parseInt(e.target.id));
            e.preventDefault();
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
        // console.log(e.keyCode);
        // if(e.nativeEvent.inputType === "insertParagraph"){
        //     e.target.nextElementSibling.focus();
        //     return;
        // }
        console.log('test');
        props.problem.notes[e.target.id] = e.target.innerText
        localStorage.setItem('problemSet', JSON.stringify(props.problemSet));
    }

    function addNote(index){
        // if(notes[notes.length - 1] == ""){return;}

        console.log(notes, index, notes[index])
        // if(notes[index] == ""){return;}

        let newNotes = [...props.problem.notes]
        // newNotes.push('')
        newNotes.splice(index, 0, '');
        props.problem.notes = newNotes;
        localStorage.setItem('problemSet', JSON.stringify(props.problemSet));
        setNotes(newNotes);
        console.log(props.problem.notes)
    }

    function removeNote(index){
        if (props.problem.notes.length == 1){return;}
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


// solution: use hidden extra li element?