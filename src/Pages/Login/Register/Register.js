import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './Register.css'
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import Loading from '../../Shared/Loading/Loading';


const Register = () => {
    const [agree, setAgree] = useState(false)
    const navigate = useNavigate()
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth,
         { sendEmailVerification: true });



    const handleRegister = event => {
        event.preventDefault()
        const name = event.target.name.value
        const email = event.target.email.value
        const password = event.target.password.value
        // const agree = event.target.terms.checked
        console.log(name, email, password)
        createUserWithEmailAndPassword(email, password)
    }

    if(loading){
        return <Loading></Loading>
    }

    if (user) {
        navigate('/home')
    }


    return (
        <div className='register-form'>
            <h1 className='text-center mt-3 text-primary'>Please Register</h1>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" id="" placeholder='Enter Your Name' />
                <input type="email" name="email" id="" placeholder='Enter Your E-mail' />
                <input type="password" name='password' id="" placeholder='Enter Your Password' />

                <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="" />
                {/* <label className={agree? 'ps-2 text-primary': 'ps-2 text-danger'}>Accept Genius car terms and condition</label> */}
                <label className={`ps-2 ${agree ? 'text-primary' : 'text-danger'}`}>Accept Genius car terms and condition</label>

                <input
                    disabled={!agree}
                    className='btn btn-primary w-50 d-block mx-auto mt-3' type="submit" value="Register" />

                <p >Already Have Account ? <Link to='/login' className='text-primary pe-auto' >Please Login</Link></p>

            </form>
            <SocialLogin></SocialLogin>
        </div>

    );
};

export default Register;