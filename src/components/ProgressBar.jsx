import './ProgressBar.css';


export default function ProgressBar(props){
    return(
        <div className='progress-container'>{props.checked[0]}/{props.checked[1]}</div>
    );
}