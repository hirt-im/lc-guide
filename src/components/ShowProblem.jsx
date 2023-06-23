import { problems } from "../data/problems";
import './ShowProblem.css';

export default function ShowProblem(props){
    let problem = problems[props.category][props.problem]
    let problemName = props.problem

let lorem = 'Lorem ipsum dolor sit amet, consecties mi eget mauris pharetra et ultrices neque. Maecenas ultricies mi eget mauris pharetra et ultrices. Nunc aliquet bibendum enim facilisis gravida neque convallis a cras. At augue eget arcu dictum varius duis. Viverra tellus in hac habitasse platea. Aliquam faucibus purus in massa. Eu sem integer vitae justo eget magna. Tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada. Magna fringilla urna porttitor rhoncus dolor purus non enim praesent. Sollicitudin tempor id eu nisl nunc mi ipsum faucibus. Morbi non arcu risus quis varius. Magna eget est lorem ipsum dolor sit amet consectetur. Enim nulla aliquet porttitor lacus luctus accumsan tortor posuere. At quis risus sed vulputate odio ut enim. In hendrerit gravida rutrum quisque non tellus orci. Urna duis convallis convallis tellus';

    function goBack(){
        props.setProblem(null);
    }

    return (
        <div className='show-problem-container'>
            <div className='back-button' onClick={goBack}>Back</div>
            <h1>{problemName}</h1>
            <h4>{problem.difficulty}</h4>
            <p>{lorem}</p>
            <p>{lorem}</p>
            <p>{lorem}</p>
            <p>{lorem}</p>
        </div>
    );
}



// probably use a modal for this