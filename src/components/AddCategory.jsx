import React, { useState } from 'react'

export const AddCategory = ({onNewAddCategory}) => {

    const [InputValue, setInputValue] = useState('');

    const onChangeValue = (event) =>{
        setInputValue(event.target.value)
    }

    const onSubmitValue = (event) => {
        event.preventDefault();
        // console.log(event)
        // console.log(InputValue);
        onNewAddCategory(InputValue);
        setInputValue('');
    }
    
  return (
    <form onSubmit={(event)=> onSubmitValue(event)}>
        <input 
            type="text" 
            placeholder='Buscar gif'
            value={InputValue}
            onChange={onChangeValue}
        />
    </form>
  )
}
