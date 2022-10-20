import React, { useEffect, useState } from 'react'
import { getGifsApi } from '../helpers/getGifsApi';

export const useFetchGif = (category) => {

   const [images,setImages] = useState([]);
   const [IsLoading,setIsLoading] = useState(true);
    
    const getImages = async () => {
        const newImages = await getGifsApi(category);
        setImages(newImages);
        setIsLoading(false);
    }


    useEffect(()=>{
        getImages();
    },[])

  return {
    images,
    IsLoading
  }
}
