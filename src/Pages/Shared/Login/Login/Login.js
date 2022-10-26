import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import './Login.css'

const Login = () => {
    return (
        <div className='form-login'>
            <h2 className='form-title'>Login</h2>
            <Form>
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