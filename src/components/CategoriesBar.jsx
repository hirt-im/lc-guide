import './CategoriesBar.css'

export default function CategoriesBar(props){
    
    function handleClick(e){
        props.setCategory(e.target.outerText);
        props.setProblem(null);
    }

    return(
        <div className='categories-container'>
            <ul className='categories-bar'>
                {Object.keys(props.problems).map((category, index) => (
                    <li 
                        onClick={handleClick}
                        key={index}
                        className={props.category === category ? 'active' : ''}
                    >        
                        {category}
                    </li>
                ))}
            </ul>
        </div>
    );
}

