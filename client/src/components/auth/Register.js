import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  })

  const { name, email, password, password2 } = formData

  const onChangeHandler = (event) => {
    // event.target.name is to select name attribute for inputs
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }

  const onSubmitHander = async (event) => {
    event.preventDefault()
    if (password !== password2) {
      console.log('Passwords do not match')
    } else {
      console.log('Success')

    }
  }

  return (
    <React.Fragment>
      <h1 className="large text-primary">Sign Up</h1>
      <p className="lead"><i className="fas fa-user"></i> Create Your Account</p>
      <form className="form" onSubmit={onSubmitHander}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={onChangeHandler}
            name="name"
            required />
        </div>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={onChangeHandler}
            name="email"
            required />
          <small className="form-text">
            This site uses Gravatar so if you want a profile image, use a
            Gravatar email
          </small>
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={onChangeHandler}
            name="password"
            minLength="6"
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Confirm Password"
            value={password2}
            onChange={onChangeHandler}
            name="password2"
            minLength="6"
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Register" />
      </form>
      <p className="my-1">
        Already have an account? <Link to="/login">Sign In</Link>
      </p>
    </React.Fragment>
  )
}

export default Register
