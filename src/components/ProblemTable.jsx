import './ProblemTable.css';
import { problems } from '../data/problems';

export default function ProblemTable(props){
    function selectProblem(e){
        console.log(e.target.innerText);
        props.setProblem(e.target.innerText)
        // props.setProblem
    }
    return(
        <div className='table-container'>
            <table className='problem-table'>
                {/* <thead>
                    <tr>
                        <th className='problem-head'>Problem</th>
                        <th className='diff-head'>Difficulty</th>
                    </tr>
                </thead> */}
                <tbody>
                    {Object.keys(problems[props.category]).map((key) => {
                        return (
                            <tr className={problems[props.category][key].difficulty}>
                                <td className='problem-column' onClick={selectProblem}>{key}</td>
                                {/* <td className='diff-col'>{problems[props.category][key].difficulty}</td> */}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
}
