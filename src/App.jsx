import { useState } from 'react'
import './App.css'
import CategoriesBar from './components/CategoriesBar'
import { categories } from './data/categories'


function App() {
  const [category, setCategory] = useState();
  console.log(category);

  return (
    <>
      <CategoriesBar categories={categories} setCategory={setCategory} category={category} />
      <div>{category}</div>
    </>
  )
}

export default App
