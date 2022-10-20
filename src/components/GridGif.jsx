import React from 'react'
import { useFetchGif } from '../hooks/useFetchGif'
import { GridItem } from './GridItem';

export const GridGif = ({category}) => {

    const {images,IsLoading} = useFetchGif(category);


  return (
    <>
      <h3>{ category }</h3>
      {
                IsLoading && ( <h2>Cargando...</h2> )
            }
<div className='card-grid'>


       {
             images.map(img => <GridItem key={img.id} {...img} />)
       }
</div>
</>
  
  )
}
