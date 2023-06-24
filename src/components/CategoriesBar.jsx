import './CategoriesBar.css'
import { FaStar } from 'react-icons/fa';

export default function CategoriesBar(props){
    
    function handleClick(e){
        let category = (e.target.outerText != undefined ? e.target.outerText : "Favorites");
        // if(props)
        props.setCategory(category);
        props.setProblem(null);
    }

    return(
        <div className='categories-container'>
            <ul className='categories-bar'>
                {Object.keys(props.problemSet).map((category, index) => (
                    <li 
                        onClick={handleClick}
                        key={index}
                        className={props.category === category ? 'active' : ''}
                    >       
                    {/* {category}  */}
                        {category != "Favorites" ? 
                            category
                            : 
                            <FaStar 
                                // className='fav-icon' 
                                size='60%'
                            />
                        }
                    </li>
                ))}
            </ul>
        </div>
    );
}

