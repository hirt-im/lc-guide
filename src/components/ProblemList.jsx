import './ProblemList.css';
import { problems } from '../data/problems';

export default function ProblemList(props){
    function selectProblem(e){
        console.log(e.target.innerText);
        props.setProblem(e.target.innerText)
        // props.setProblem
    }
    return(
        <div className='table-container'>
            <table className='problem-table'>
                <thead>
                    <tr>
                        <th>Problem</th>
                        <th className='diff-head'>Difficulty</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(problems[props.category]).map((key) => {
                        return (
                            <tr>
                                <td className='problem-column' onClick={selectProblem}>{key}</td>
                                <td className='diff-col'>{problems[props.category][key].difficulty}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
}
