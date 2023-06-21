import { problems } from "../data/problems";
import './ShowProblem.css';

export default function ShowProblem(props){
    let problem = problems[props.category][props.problem]
    let problemName = props.problem

    return (
        <div className='show-problem-container'>
            <h1>{problemName}</h1>
            <h4>{problem.difficulty}</h4>
        </div>
    );
}

// probably use a modal for this