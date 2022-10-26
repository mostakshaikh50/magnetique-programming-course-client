import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import './Register.css'

const Register = () => {
    return (
        <div>
            <Form className='form-register'>
                <h2 className='form-title'>Register</h2>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control name="name" type="name" placeholder="Enter name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control name="email" type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" name="confirm" placeholder="Password" />
                </Form.Group>
                <Button className='btn-register' variant="primary" type="submit">Sign Up</Button>
                <p>Are you already registered? <Link to="/login">Login</Link></p>
            </Form>
        </div>
    );
};

export default Register;