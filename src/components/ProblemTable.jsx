import './ProblemTable.css';
// import { problems } from '../data/problems';
import { FaStar } from 'react-icons/fa';
import { BsFillCheckSquareFill } from 'react-icons/bs';


export default function ProblemTable(props){

    function selectProblem(e){
        console.log(e.target.innerText);
        props.setProblem(e.target.innerText)
        // props.setProblem
    }

    function favoriteProblem(e){
        let problemName = e.target.parentNode.parentNode.nextElementSibling.innerText;
        let problem = props.problemSet[props.category][problemName];
        problem.favorited = !problem.favorited;

        let updatedProblemSet = {...props.problemSet};
        props.setProblemSet(updatedProblemSet);
        localStorage.setItem('problemSet', JSON.stringify(updatedProblemSet));
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
                    {Object.keys(props.problemSet[props.category]).map((key) => {
                        return (
                            // <tr className={props.problemSet[props.category][key].difficulty}>
                            <tr>
                                <td className='fav-column' style={{ textAlign: 'center', verticalAlign: 'middle' }} >
                                    <FaStar className='fav-icon' onClick={favoriteProblem} color={(props.problemSet[props.category][key].favorited ? 'yellow' : null)} />
                                </td>

                                <td className={props.problemSet[props.category][key].difficulty + ' ' + 'problem-column'} onClick={selectProblem}>
                                    {key}
                                </td>

                                <td className='check-column' onClick={checkProblem} style={{ textAlign: 'center', verticalAlign: 'middle' }} >
                                    <BsFillCheckSquareFill className='check-icon'/>
                                </td>
                                {/* <td className='diff-col'>{props.problemSet[props.category][key].difficulty}</td> */}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
}
