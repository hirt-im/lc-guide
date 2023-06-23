import './ProblemTable.css';
import { problems } from '../data/problems';
import { FaStar } from 'react-icons/fa';
import { BsFillCheckSquareFill } from 'react-icons/bs';


export default function ProblemTable(props){

    function selectProblem(e){
        console.log(e.target.innerText);
        props.setProblem(e.target.innerText)
        // props.setProblem
    }

    function favoriteProblem(e){
        return;
    }

    function checkProblem(e){
        return;
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
                            // <tr className={problems[props.category][key].difficulty}>
                            <tr>
                                <td className='fav-column' onClick={favoriteProblem}><FaStar className='fav-icon' /></td>
                                <td className={problems[props.category][key].difficulty + ' ' + 'problem-column'} onClick={selectProblem}>{key}</td>
                                <td className='check-column' onClick={checkProblem}><BsFillCheckSquareFill className='check-icon'/></td>
                                {/* <td className='diff-col'>{problems[props.category][key].difficulty}</td> */}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
}
