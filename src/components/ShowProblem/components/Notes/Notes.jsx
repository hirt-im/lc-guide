import { IoMdAdd } from 'react-icons/io';
import { RiSubtractLine } from 'react-icons/ri';
import './Notes.css';



let testNotes = ['this is the first test bullet point',
'this is the second test bullet point',
'this is the third test bullet point',
'this is the fourth test bullet point',
'and so on' 
];

export default function Notes(props){

    
    function handleChange(e){
        props.problem.notes[e.target.id] = e.target.innerText
        localStorage.setItem('problemSet', JSON.stringify(props.problemSet));
    }

    return(
        <div className='notes-container'>
            <ul className='notes-list'>
                {props.problem.notes.map((bullet, index) => (
                    <li id={index} contenteditable="true" onInput={handleChange}>{bullet}</li>
                ))}
            </ul>

            <div className='button-group'>
                <button className='add-button'>
                    <IoMdAdd />
                </button>
                <button className='delete-button'>
                    <RiSubtractLine />
                </button>
            </div>
        </div>
    );
}