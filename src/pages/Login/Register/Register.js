import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import {toast} from 'react-hot-toast';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Register = () => {
  const [accepted, setAccepted] = useState(false)
  const { createUser, updateUserProfile,verifyEmail} = useContext(AuthContext)
  const [error, setError] = useState("")
  const handleAccepted = (e) => {
    setAccepted(e.target.checked)
  }

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    const name = form.name.value;
    const handleUpdateUserProfile = (name, photoURL) => {
      const profile = {
        displayName: name,
        photoURL: photoURL
      }
      updateUserProfile(profile)
      .then(()=>{})
      .catch(error=>console.log(error))
    }
    const handleSendEmailVerify =()=>{
      verifyEmail()
      .then(()=>{})
      .catch((error)=>console.log(error))
    }
    createUser(email, password)
      .then(res => {
        const user = res.user;
        form.reset();
        handleUpdateUserProfile(name, photoURL)
        handleSendEmailVerify()
        toast.success("please verify your email address")
        setError("")

      })
      .catch(error => {
        setError(error.message)
      })

  }
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Your Name</Form.Label>
        <Form.Control name="name" type="text" placeholder="Your Name" />
      </Form.Group>
      <Form.Group type="text" className="mb-3">
        <Form.Label>Photo url</Form.Label>
        <Form.Control  name="photoURL" type="text" placeholder="Photo url" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control name="email" type="email" placeholder="Your Email" required />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control name="password" type="password" placeholder="Password" required />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Check onClick={handleAccepted} type="checkbox" label={<>Accept <Link to="/terms">Terms & Conditions</Link></>} />
      </Form.Group>
      <Button variant="primary" disabled={!accepted} type="submit">
        Register
      </Button>
      <Form.Text className="text-danger">
        {error}
      </Form.Text>
    </Form>
  );
};

export default Register;