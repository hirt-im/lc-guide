import { problems } from "../data/problems";
import './ProblemInfo.css';

export default function ProblemInfo(props){
    let problem = problems[props.category][props.problem]
    let problemName = props.problem

    return (
        <div className='problem-info-container'>
            <h1>{problemName}</h1>
            <h4>{problem.difficulty}</h4>
        </div>
    );
}

// probably use a modal for this