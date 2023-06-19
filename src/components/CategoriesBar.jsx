export default function CategoriesBar(props){
    
    function handleClick(e){
        props.setCategory(e.target.outerText);
    }

    return(
        <ul className='categories-bar'>
            {props.categories.map((category, index) => (
                <li onClick={handleClick} key={index}>{category}</li>
            ))}
        </ul>
    );
}