import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import './Login.css'
import { useContext } from 'react';
import { AuthContext } from '../../../../Context/UserContext';
import { useNavigate } from "react-router-dom";

const Login = () => {
    const {signIn} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = (event) =>{
            event.preventDefault();
            const form = event.target;
            const email = form.email.value;
            const password = form.password.value;


            signIn(email, password)
            .then(result =>{
                const user =result.user;
                console.log(user);
                form.reset();
                navigate("/");
            })
            .catch(error => console.error(error));
    }


    return (
        <div className='form-login'>
            <h2 className='form-title'>Login</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control name="email" type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" />
                </Form.Group>
                <Button className='btn-submit' variant="primary" type="submit">Login</Button>
                <p>New to here ? <Link to="/register">Create New Account</Link></p>
            </Form>
        </div>
    );
};

export default Login;