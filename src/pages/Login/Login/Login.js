import React, {useContext, useState} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import {toast} from 'react-hot-toast';

const Login = () => {
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';
    const [error, setError] = useState("")
    const {user,signin, setLoading} = useContext(AuthContext);
    const navigate = useNavigate()
    const handleSignin =(event) =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value; 
        const password = form.password.value; 
        signin(email, password)
        .then(res =>{
            const user = res.user;
            form.reset();
            setError('')
            if(user.emailVerified){
              navigate(from, {replace: true})
            }else{
              toast.error("your email is not verified. plaese verify your email")
            }
        }
        )
        .catch(error=> {
            console.log(error)
            setError(error.message)
        }
        )
        .finally(()=>setLoading(false))
    }
    return (
        <Form onSubmit={handleSignin}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control name="email" type="email" placeholder="Enter email" required />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control name="password" type="password" placeholder="Password"  required/>
      </Form.Group>
      <Button variant="primary" type="submit">
        log in
      </Button>
      <Form.Text className="text-danger">
         {error}
        </Form.Text>
    </Form>
    );
};
export default Login;