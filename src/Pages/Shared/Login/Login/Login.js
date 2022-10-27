import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import './Login.css'
import { useContext } from 'react';
import { AuthContext } from '../../../../Context/UserContext';
import { useNavigate } from "react-router-dom";
import { ButtonGroup } from 'react-bootstrap';
import { FaGithub, FaGoogle } from "react-icons/fa";
import { GoogleAuthProvider } from 'firebase/auth';


const Login = () => {
    const {signIn, googleProviderLogin} = useContext(AuthContext);

    const googleAuthProvider = new GoogleAuthProvider();
    const navigate = useNavigate();

    const handleSubmit = (event) =>{
            event.preventDefault();
            const form = event.target;
            const email = form.email.value;
            const password = form.password.value;


            signIn(email, password)
            .then(result =>{
                const user =result.user;                
                form.reset();
                navigate("/");
            })
            .catch(error => console.error(error));
    }

    const handleGoogleSignIn = () =>{
        googleProviderLogin(googleAuthProvider)
        .then(result =>{
            const user = result.user;
            console.log(user);
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

                <div>
                    <ButtonGroup className='btn-GH' vertical>
                        <Button onClick={handleGoogleSignIn} className='mb-2 mt-5' variant="outline-primary"><FaGoogle></FaGoogle> Login with Google</Button>
                        <Button variant="outline-dark"><FaGithub></FaGithub> Login with Github</Button>
                    </ButtonGroup>
                </div>
            </Form>
        </div>
    );
};

export default Login;