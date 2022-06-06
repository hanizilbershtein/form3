import React, { useState } from 'react'

const Form2 = () => {
    const [user,setUser]= useState({})

    const handleFormChange =(e)=>{
        console.log(e.target.value);
        console.log(e.target.type);

         const{type,value} = e.target
         setUser({...user,[type]:value})
    }

    const handleSubmit =(e)=>{
        console.log("Form submitted");
        e.preventDefault()
        console.log(user);
    }
  return (
    <div>Form2
        <h2></h2>
        <form action=''onSubmit={handleSubmit} onChange={handleFormChange} >
          <input type="email" name="" placeholder='enter email' />
          <input type="password" name="" placeholder='enter password' /> 
          <input type="submit"/>
        </form>
    </div>
    
  )
}

export default Form2