import { useState } from 'react'
import './App.css'
import CategoriesBar from './components/CategoriesBar'
import ProblemTable from './components/ProblemTable'
import { problems } from './data/problems'
import ShowProblem from './components/ShowProblem'


function App() {
  const [category, setCategory] = useState('Arrays & Hashing');
  const [problem, setProblem] = useState(null)
  const [problemSet, setProblemSet] = useState((localStorage.getItem('problemSet') == null ? problems : JSON.parse(localStorage.getItem('problemSet'))));

  return (
    <div className='container'>
      <CategoriesBar 
        problems={problems} 
        setCategory={setCategory} 
        category={category} 
        setProblem={setProblem} 
      />
      
      {problem == null ? 
        <ProblemTable 
          category={category} 
          setProblem={setProblem} 
          problemSet={problemSet} 
          setProblemSet={setProblemSet} 
        /> 
        : 
        <ShowProblem 
          category={category} 
          problem={problem} 
          setProblem={setProblem}  
        />
      }
    </div>
  )
}

export default App
