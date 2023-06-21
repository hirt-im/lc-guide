import { useState } from 'react'
import './App.css'
import CategoriesBar from './components/CategoriesBar'
import ProblemList from './components/ProblemList'
import { problems } from './data/problems'
import ProblemInfo from './components/ProblemInfo'


function App() {
  const [category, setCategory] = useState('Arrays & Hashing');
  const [problem, setProblem] = useState(null)
  console.log(category);

  return (
    <div className='container'>
      <CategoriesBar problems={problems} setCategory={setCategory} category={category} setProblem={setProblem} />
      {/* {!category ? null : <ProblemList category={category} />} */}
      {problem == null ? 
        <ProblemList category={category} setProblem={setProblem} /> 
        : 
        <ProblemInfo category={category} problem={problem}  />
      }
      {/* // <ProblemList category={category} /> */}
    </div>
  )
}

export default App
