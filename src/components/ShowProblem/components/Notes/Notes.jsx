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

    
    function editNote(e){
        props.problem.notes[e.target.id] = e.target.innerText
        localStorage.setItem('problemSet', JSON.stringify(props.problemSet));
    }

    function addNote(){
        let newNotes = [...props.problem.notes]
        newNotes.push('Edit notes')
        props.problem.notes = newNotes;
        localStorage.setItem('problemSet', JSON.stringify(props.problemSet));
        setNotes(newNotes);
        console.log(props.problem.notes)
    }

    function removeNote(){
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
                    <li id={index} contenteditable="true" onInput={editNote}>{bullet}</li>
                ))}
            </ul>

            <div className='button-group'>
                <button className='add-button' onClick={addNote}>
                    <IoMdAdd />
                </button>
                <button className='delete-button' onClick={removeNote}>
                    <RiSubtractLine />
                </button>
            </div>
        </div>
    );
}