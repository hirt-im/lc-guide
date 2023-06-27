import './ProgressBar.css';


export default function ProgressBar(props){
    return(
        <div className='progress-container'>
            <div className='progress-value'>
                {props.checked[0]}/{props.checked[1]}
            </div>
            <progress className='progress-bar' value={props.checked[0]} max={props.checked[1]}></progress>
        </div>
    );
}