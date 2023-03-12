import React, { useContext, useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';


const Profile = () => {
    const {user} = useContext(AuthContext);
    const [name, setname] = useState(user.displayName)
    const photoURlref = useRef(user.photoURL)
    const handleSubmit = (event)=>{
            event.preventDefault();
            console.log(photoURlref.current.value)
    }
    const handleChange= (event)=>{
        setname(event.target.value)
    }
    return (
        <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control defaultValue={user?.email} readOnly name="email" type="email" placeholder="Enter email" required />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Your Name</Form.Label>
        <Form.Control onChange={handleChange} defaultValue={name} name="text" type="text" placeholder="Your Name" required />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Photo url</Form.Label>
        <Form.Control ref={photoURlref} defaultValue={user?.photoURL} name="text" type="text" placeholder="Photo url" required />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>

    </Form>
    );
};

export default Profile;