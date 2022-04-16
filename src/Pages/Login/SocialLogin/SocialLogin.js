import React from 'react';
import './SocialLogin.css'
import googleLogo from '../../../images/Social/google.png'
import githubLogo from '../../../images/Social/github.png'
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const [signInWithGithub, user2, loading2, error2] = useSignInWithGithub(auth);

    const navigate = useNavigate()

    let errorElement;
    if (error || error2) {
        errorElement = <p className='text-danger'> Error: {error?.message} {error2?.message}</p>

    }
    if (loading || loading2) {
        return <Loading></Loading>
    }

    if (user || user2) {
        navigate('/home')
    }

    return (
        <div>
            <div className='hr-container'>
                <div className='hr-line'></div>
                <p className='or'>or</p>
                <div className='hr-line'></div>
            </div>
            {errorElement}
            <button
                onClick={() => signInWithGoogle()}
                className='btn btn-danger d-block mx-auto'>
                <img style={{ height: '30px' }} src={googleLogo} alt="" />
                <span className='px-2'> Google Sign in </span>
            </button>
            <button

                className='btn btn-primary d-block mx-auto mt-2'>
                <img style={{ height: '30px' }} src={googleLogo} alt="" />
                <span className='px-2'> Facebook Sign in </span>
            </button>
            <button
                onClick={() => signInWithGithub()}
                className='btn btn-dark d-block mx-auto mt-2'>
                <img style={{ height: '30px' }} src={githubLogo} alt="" />
                <span className='px-2'> Github Sign in </span>
            </button>
        </div>
    );
};

export default SocialLogin;