import { problems } from "../data/problems";

export default function ProblemInfo(props){
    let problem = problems[props.category][props.problem]
    let problemName = props.problem

    return (
        <div className='problem-info-container'>{problemName}
            <div>{problem.difficulty}</div>
        </div>
    );
}

// probably use a modal for this