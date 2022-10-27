import React, { useContext } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import './Register.css'
import { useState } from 'react';
import { AuthContext } from '../../../../Context/UserContext';
import { useNavigate } from "react-router-dom";

const Register = () => {

    const [error, setError] =useState('');
    const {createUser, updateUserProfile} = useContext(AuthContext);
    const navigate = useNavigate();

   const handleSubmit= (event) =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
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
            form.reset();
            setError('');
            handleUpdateUserProfile(name, photoURL)
            navigate("/login");
        })
        .catch(error => {
            console.error(error)
            setError(error.message)
        });

   }

   const handleUpdateUserProfile = (name, photoURL) =>{
      const profile = {
            displayName: name,
            photoURL: photoURL
      }
      updateUserProfile(profile)
      .then(() =>{})
      .catch(error => console.error(error))
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
                    <Form.Label>PhotoURL</Form.Label>
                    <Form.Control name="photoURL" type="Photo" placeholder="Photo URL" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control name="email" type="email" placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" name="confirm" placeholder="Password" />
                    <Form.Text className='text-danger'>
                        {error}
                    </Form.Text>
                </Form.Group>
                <Button className='btn-register' variant="primary" type="submit">Sign Up</Button>
                <p>Are you already registered? <Link to="/login">Login</Link></p>
                 
            </Form>
        </div>
    );
};

export default Register;