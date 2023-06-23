import { useState } from 'react'
import './App.css'
import CategoriesBar from './components/CategoriesBar'
import ProblemTable from './components/ProblemTable'
import { problems } from './data/problems'
import ShowProblem from './components/ShowProblem'


function App() {
  const [category, setCategory] = useState('Arrays & Hashing');
  const [problem, setProblem] = useState(null)
  const [problemSet, setProblemSet] = useState(problems);
  console.log(category);


  function addProperties(){
    for (let category in problems){
      if(problems.hasOwnProperty(category)){
      //  console.log(category);

       let test = Object.keys(problems[category]);
      //  console.log(test);
       for (let i = 0; i < test.length; i++){
          console.log(problems[category][test[i]])
          problems[category][test[i]].favorited = false;
          problems[category][test[i]].checked = false;
        }
       }
      }
    console.log(problems);

    }


  

  // addProperties()

  return (
    <div className='container'>
      <CategoriesBar 
        problems={problems} 
        setCategory={setCategory} 
        category={category} 
        setProblem={setProblem} 
      />
      
      {problem == null ? 
        <ProblemTable category={category} setProblem={setProblem} problemSet={problemSet} setProblemSet={setProblemSet} /> 
        : 
        <ShowProblem category={category} problem={problem} setProblem={setProblem}  />
      }
    </div>
  )
}

export default App
