import { problems } from '../../data/problems';
// import { AiOutlineStar } from 'react-icons/fa'
import { FaStar } from 'react-icons/fa';
import { IoArrowBack } from 'react-icons/io5'

import './ShowProblem.css';
import Code from './components/Code/Code';
import Notes from './components/Notes/Notes';



export default function ShowProblem(props){
    let problem = props.problemSet[props.category][props.problem]
    let problemName = props.problem


let lorem = 'Lorem ipsum dolor sit amet, consecties mi eget mauris pharetra et ultrices neque. Maecenas ultricies mi eget mauris pharetra et ultrices. Nunc aliquet bibendum enim facilisis gravida neque convallis a cras. At augue eget arcu dictum varius duis. Viverra tellus in hac habitasse platea. Aliquam faucibus purus in massa. Eu sem integer vitae justo eget magna. Tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada. Magna fringilla urna porttitor rhoncus dolor purus non enim praesent. Sollicitudin tempor id eu nisl nunc mi ipsum faucibus. Morbi non arcu risus quis varius. Magna eget est lorem ipsum dolor sit amet consectetur. Enim nulla aliquet porttitor lacus luctus accumsan tortor posuere. At quis risus sed vulputate odio ut enim. In hendrerit gravida rutrum quisque non tellus orci. Urna duis convallis convallis tellus';

    function goBack(){
        props.setProblem(null);
    }

    function favoriteProblem(){
        problem.favorited = !problem.favorited;
        if (!problem.favorited){
            delete props.problemSet["Favorites"][problemName];
        }
        if(props.category == "Favorites"){
            props.setProblem(null);
        }
        let updatedProblemSet = {...props.problemSet};
        props.setProblemSet(updatedProblemSet);
        localStorage.setItem('problemSet', JSON.stringify(updatedProblemSet));
    }


    return (
        <div className='show-problem-container'>
            <div className='back-button' onClick={goBack}>
                <IoArrowBack className='back-icon' size="3vh" />
            </div>
            <div className='star-container'>
                <FaStar className='fav-icon' onClick={favoriteProblem} size="2.3vh" color={(props.problemSet[props.category][problemName].favorited ? 'rgb(255, 212, 23)' : null)} />
            </div>
            <h1><a href={problem.url} target="_blank">{problemName}</a></h1>
            <Notes />
            <Code 
                problemSet={props.problemSet} 
                category={props.category} 
                problemName={problemName} 
                problem={problem}
                setProblemSet={props.setProblemSet}
            />
            {/* <p>{lorem}</p>
            <p>{lorem}</p>
            <p>{lorem}</p>
            <p>{lorem}</p> */}
        </div>
    );
}



// probably use a modal for this