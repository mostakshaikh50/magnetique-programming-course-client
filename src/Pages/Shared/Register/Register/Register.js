import React, { useContext } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import './Register.css'
import { useState } from 'react';

import { AuthContext } from '../../../../Context/UserContext';

const Register = () => {

    const [error, setError] =useState(null);
    const {createUser} = useContext(AuthContext)

   const handleSubmit= (event) =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        
        if(password.length < 6){
            setError('Password should be 6 char or more');
            return;
        }
        if(password !== confirm)
        {
            setError('Password did not mach, please check!')
            return;
        }

        createUser(email, password)
        .then(result => {
            const user =result.user;
            console.log(user);
            form.reset();
        })
        .catch(error => console.error(error));

   }

    return (
        <div>
            <Form onSubmit={handleSubmit} className='form-register'>
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
                 <p className='text-danger'>{error}</p>
            </Form>
        </div>
    );
};

export default Register;