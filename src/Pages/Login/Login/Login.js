import { Button, } from 'react-bootstrap';
import React from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import Loading from '../../Shared/Loading/Loading';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate('')
    let location = useLocation();

    let from = location.state?.from?.pathname || "/";
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);


    const [sendPasswordResetEmail] = useSendPasswordResetEmail(
        auth
    );


    let errorElement;
    if (error) {
        errorElement = <p className='text-danger'> Error: {error?.message}</p>


    }


    const handleSubmit = event => {
        event.preventDefault()
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        console.log(email, password);

        signInWithEmailAndPassword(email, password)
    }
    const navigateRegister = event => {
        navigate('/register')
    }
    if (user) {
        navigate(from, { replace: true });
    }
    if (loading) {
        return <Loading></Loading>
    }

    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else {
            toast('Please Enter  Your Email Address')
        }
    }

    return (
        <div>
            <h1 className='text-center mt-2'>Please Login</h1>
            <Form className='w-50 mx-auto' onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Password" ref={passwordRef} required />
                </Form.Group>

                <Button variant="primary" type="submit" className='w-30 d-block mx-auto mb-2'>
                    Login
                </Button>
                <p>New to Genius Car ? <Link to='/register' className='text-primary  pe-auto ' onClick={navigateRegister}>Please Register</Link></p>
                {errorElement}


                <p onClick={resetPassword}>Forget Password ? <span className='text-primary  pe-auto'>Reset Password</span></p>
                <ToastContainer />
                <SocialLogin></SocialLogin>
            </Form>

        </div>
    );
};

export default Login;