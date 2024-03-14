import axios from 'axios'
import React from 'react'
import { useState } from 'react'


const user_API= "https://jsonplaceholder.typicode.com/users/1"
const AxiosUpdate = () => {

  const data={
    fname:"",
    lname:""
  }
  const [inputData, setInputData]= useState(data);

  const handleChange =(e)=>{
    setInputData({...inputData, [e.target.name]: e.target.value});
  }
  const handleSubmit =(e)=>{
    e.preventDefault();
    axios.post(user_API, inputData).then((response)=>{
      console.log(response)
    })
  }

  const handleUpdate= (e)=> {
    axios.put(user_API).then((response)=>{
      console.log(response)
    })
  }

  const handleDelete= (e)=>
  {
    e.preventDefault();
    axios.delete(user_API).then((response)=>{
      console.log(response)
    })
  }

  return (
    <div>
      <input type="text" name="fname" value={inputData.fname} placeholder='First Name'  onChange={handleChange}/><br/>
      <input type="text" name="lname" value={inputData.lname} placeholder='Last Name' onChange={handleChange}/> <br />
      <button onClick={handleSubmit}>Submit</button> <br />
      <button onClick={handleUpdate}>Update</button> <br />
      <button onClick={handleDelete}>Delete</button>
    </div>
  )
}

export default AxiosUpdate;