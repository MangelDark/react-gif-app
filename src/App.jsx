import React,{useState} from 'react'
import { AddCategory } from './components/AddCategory'
import { GridGif } from './components/GridGif'
import { getGifsApi } from './helpers/getGifsApi'



export const App = () => {

  const [Categories, setCategories] = useState(['One Piece'])

  const onAddCategory = (category) =>{

    if(Categories.includes(category))return;
    setCategories([category,...Categories]);
  }


  return (
    <>
      <h1>Gif EXPERT APP</h1>

      <AddCategory onNewAddCategory = {(cat) => onAddCategory(cat)} />

        {
          Categories.map( cat => <GridGif key={cat} category={cat} />)
        }

    </>
  )
}
