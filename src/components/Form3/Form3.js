import React, { useState } from 'react'
import Print from '../Print/Print';

const formstyle={
    display:"flex",
    flexDirection:"column",
    width:"15%",
    margin:"1rem"}

const Form3 = () => {
    const [name,setName]=useState({});

    const formChange =(e) =>{
        const {className,value} = e.target
        console.log(value);
        console.log(className)
        setName({...name,[className]:value})
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(name.first)
        console.log(name.last);
        console.log(name.age);;
        <Print first={name.first} last={name.last} age={name.age}/>

    }
    <Print first={name.first} last={name.last} age={name.age}/>

  return (
    <div><form style={formstyle} onChange={formChange} >
        <input type="text" placeholder='First Name' className='first' />
        <input type="text" placeholder='Last Name' className='last'/>
        <input type="number" placeholder='Age'className="age"/>
        <input type="submit" onSubmit={handleSubmit}/>

    </form></div>
  )
}

export default Form3