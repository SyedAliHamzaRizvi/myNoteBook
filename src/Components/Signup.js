import {React, useState } from 'react'
import { useHistory } from 'react-router-dom'

const Signup = (props) => {
    const [credentials,setCredentials]=useState({name:"",email:"",password:"",cpassword:""})
    let history=useHistory()
    const handleSubmit=async(e)=>{
        e.preventDefault()
        const {name,email,password}=credentials
        const response = await fetch("http://localhost:5000/api/auth/createuser", {
            method: "POST",
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({name,email,password})
          });
          console.log(response)
          const json= await response.json()
          console.log(json)
          if(json.success){
            //Save the auth-Token and Redirect
            localStorage.setItem('token',json.authtoken)
            history.push("/")
            props.showAlert(" Account created Successfully","success")
          }
          else{
            props.showAlert(" Invalid details","danger")
          }
     }
     const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
      };

  return (
    <div className="container" style={containerStyle}>
       <div className="image-container" style={imageContainerStyle}>
  <img 
    src="https://images.pexels.com/photos/34088/pexels-photo.jpg" 
    alt="Focused student using a notebook and laptop" 
    className="side-image" 
    style={sideImageStyle} 
  />
</div>
    <div className='container mt-2' style={formContainerStyle}> 
      <h2 className='my-3'>Create an account to use myNotebook</h2>
      <form onSubmit={handleSubmit}>
  <div className="my-3">
    <label htmlFor="name" className="form-label">Name</label>
    <input type="text" className="form-control" id="name" name="name"  onChange={onChange} aria-describedby="emailHelp"/>
    
  </div>
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email address</label>
    <input type="email" className="form-control" id="email" name="email" onChange={onChange} aria-describedby="emailHelp"/>
   
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="password" className="form-control" id="password" name="password"  onChange={onChange} minLength={5} required/>
  </div>
  <div className="mb-3">
    <label htmlFor="cpassword" className="form-label">Confirm Password</label>
    <input type="password" className="form-control" id="cpassword" name="cpassword"  onChange={onChange} minLength={5} required/>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
    </div>
  )
}

// Styling for responsiveness
const containerStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#f9f9f9',
  width: '100%',
  height: '100vh',
  color: 'black',
  padding: '10px',
  flexWrap: 'wrap' // Allows wrapping of items when screen is small
};

const imageContainerStyle = {
  flex: '1.5',
  padding: '10px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minWidth: '300px',
};

const sideImageStyle = {
  maxWidth: '100%',
  height: 'auto',
  borderRadius: '6px'
};

const formContainerStyle = {
  flex: '1',
  padding: '20px',
  backgroundColor: '#f9f9f9',
  minWidth: '300px',
  maxWidth: '500px'
};

export default Signup
