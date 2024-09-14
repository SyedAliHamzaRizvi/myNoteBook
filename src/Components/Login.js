import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Login = (props) => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  let history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: credentials.email, password: credentials.password })
    });
    const json = await response.json();
    console.log(json);

    if (json.success) {
      localStorage.setItem('token', json.authtoken);
      history.push('/');
      props.showAlert("Logged in Successfully", "success");
    } else {
      props.showAlert("Invalid credentials", "danger");
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div className="container" style={containerStyle}>
      <div className="image-container" style={imageContainerStyle}>
      <img 
  src="https://img.pikbest.com/wp/202403/focusing-focused-student-a-close-up-view-of-notebook-and-laptop-on-table-against-school-backdrop-3d-illustration_9824296.jpg!w700wp" 
  alt="Focused student using a notebook and laptop" 
  className="side-image" 
  style={sideImageStyle} 
/>

      </div>
      <div className="form-container mt-3" style={formContainerStyle}>
        <h2>Login to continue to myNotebook</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" className="form-control" value={credentials.email} onChange={onChange} id="email" name="email" aria-describedby="emailHelp" />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" value={credentials.password} onChange={onChange} name="password" id="password" />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  );
};

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
  minWidth: '300px'
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

export default Login;
