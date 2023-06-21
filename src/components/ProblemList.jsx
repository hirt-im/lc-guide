import './ProblemList.css';
import { problems } from '../data/problems';

export default function ProblemList(props){
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
                                <td>{key}</td>
                                <td className='diff-col'>{problems[props.category][key].difficulty}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
}
