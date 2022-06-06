import React from 'react'
import './Form.css'

const Form = () => {
  return (
    <div className='form-div'>Form
        <form
        style={{
            display:"flex",
            flexDirection:"column",
            width:"30%",
            margin:"1rem"
        }}>
            <input type="text"/>
            <input type= "password" name="" id=""/>
            check me<input type ="checkbox" name="" id=""/>
            <input type = "email"/>
            <textarea type="date" name="" id=""/> 
            <input type = "file" name="" id=""/>
            radio
            <input type="radio" name="" id=""/>
            <input type="radio" name="" id=""/>
            <input type="radio" name="" id=""/>
            <input type="radio" name="" id=""/>

        </form>
    </div>
  )
}

export default Form