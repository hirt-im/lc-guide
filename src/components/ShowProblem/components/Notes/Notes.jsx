import { IoMdAdd } from 'react-icons/io';
import { RiSubtractLine } from 'react-icons/ri';
import './Notes.css';
import { useState } from 'react';



let testNotes = ['this is the first test bullet point',
'this is the second test bullet point',
'this is the third test bullet point',
'this is the fourth test bullet point',
'and so on' 
];

export default function Notes(props){

    const [notes, setNotes] = useState(props.problem.notes)

    // go through linese and set focus to first empty one
    console.log(notes);

    function handleKeyDown(e){
        console.log(e.keyCode);
        if (e.keyCode === 13){
            addNote();
            e.preventDefault();
            // e.target.nextElementSibling.focus();
        }
        console.log(e.target.nextElementSibling);
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

    function addNote(){
        let newNotes = [...props.problem.notes]
        newNotes.push('')
        props.problem.notes = newNotes;
        localStorage.setItem('problemSet', JSON.stringify(props.problemSet));
        setNotes(newNotes);
        console.log(props.problem.notes)
    }

    function removeNote(){
        if (props.problem.notes.length == 1){return;}
        let newNotes = [...props.problem.notes]
        newNotes.pop();
        props.problem.notes = newNotes;
        localStorage.setItem('problemSet', JSON.stringify(props.problemSet));
        setNotes(newNotes);
        console.log(props.problem.notes)
    }

    return(
        <div className='notes-container'>
            <ul className='notes-list'>
                {props.problem.notes.map((bullet, index) => (
                    <li id={index} contenteditable="true" onKeyDown={handleKeyDown} onInput={editNote}>{bullet}</li>
                ))}
            </ul>

            <div className='button-group'>
                <button className='add-button' onClick={addNote}>
                    {/* <IoMdAdd /> */}
                    New Line
                </button>
                <button className='delete-button' onClick={removeNote}>
                    {/* <RiSubtractLine /> */}
                    Remove Line
                </button>
            </div>
        </div>
    );
}