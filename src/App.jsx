import { useState } from 'react'
import './App.css'
import CategoriesBar from './components/CategoriesBar'
import ProblemList from './components/ProblemList'
import { problems } from './data/problems'
import ShowProblem from './components/ShowProblem'


function App() {
  const [category, setCategory] = useState('Arrays & Hashing');
  const [problem, setProblem] = useState(null)
  console.log(category);

  return (
    <div className='container'>
      <CategoriesBar 
        problems={problems} 
        setCategory={setCategory} 
        category={category} 
        setProblem={setProblem} 
      />
      
      {problem == null ? 
        <ProblemList category={category} setProblem={setProblem} /> 
        : 
        <ShowProblem category={category} problem={problem}  />
      }
    </div>
  )
}

export default App
