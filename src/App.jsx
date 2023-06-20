import { useState } from 'react'
import './App.css'
import CategoriesBar from './components/CategoriesBar'
import ProblemList from './components/ProblemList'
import { problems } from './data/problems'


function App() {
  const [category, setCategory] = useState();
  console.log(category);

  return (
    <div className='container'>
      <CategoriesBar problems={problems} setCategory={setCategory} category={category} />
      {!category ? null : <ProblemList category={category} />}
    </div>
  )
}

export default App
