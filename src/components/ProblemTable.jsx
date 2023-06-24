import './ProblemTable.css';
// import { problems } from '../data/problems';
import { FaStar } from 'react-icons/fa';
import { BsFillCheckSquareFill } from 'react-icons/bs';
import ProgressBar from './ProgressBar';


export default function ProblemTable(props){

    function selectProblem(e){
        props.setProblem(e.target.innerText)
    }

    function favoriteProblem(e){
        let problemName = e.target.parentNode.parentNode.nextElementSibling.innerText;
        let problem = props.problemSet[props.category][problemName];
        problem.favorited = !problem.favorited;

        if (!problem.favorited){
            delete props.problemSet["Favorites"][problemName];
        }

        let updatedProblemSet = {...props.problemSet};
        props.setProblemSet(updatedProblemSet);
        localStorage.setItem('problemSet', JSON.stringify(updatedProblemSet));
    }

    function checkProblem(e){
        let problemName = e.target.parentNode.parentNode.previousElementSibling.innerText;
        let problem = props.problemSet[props.category][problemName];
        problem.checked = !problem.checked;

        let updatedProblemSet = {...props.problemSet};
        props.setProblemSet(updatedProblemSet);
        localStorage.setItem('problemSet', JSON.stringify(updatedProblemSet));
    }

   // get [number of checked problems, total number of problems] for category
    let checked = [0,0];
    function getChecked(problemSet, category){
        Object.keys(problemSet[category]).forEach(problem => {
            if (problemSet[category][problem].checked){
                checked[0] += 1
            }
            checked[1] += 1
        })
    }
    getChecked(props.problemSet, props.category);


    return(
        <div className='table-container'>
            <ProgressBar checked={checked}/>
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
                            // use this line to make entire row highlight with difficulty color
                            // <tr className={props.problemSet[props.category][key].difficulty}>
                            <tr>
                                <td className='fav-column' style={{ textAlign: 'center', verticalAlign: 'middle' }} >
                                    <FaStar className='fav-icon' onClick={favoriteProblem} color={(props.problemSet[props.category][key].favorited ? 'rgb(255, 212, 23)' : null)} size='60%'/>
                                </td>

                                <td className={props.problemSet[props.category][key].difficulty + ' ' + 'problem-column'} onClick={selectProblem}>
                                    {key}
                                </td>

                                <td className='check-column' onClick={checkProblem} style={{ textAlign: 'center', verticalAlign: 'middle' }} >
                                    <BsFillCheckSquareFill className='check-icon' color={(props.problemSet[props.category][key].checked ? 'rgb(136, 221, 26)' : null)} size='60%'/>
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
