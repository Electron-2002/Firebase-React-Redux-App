import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/actions/authActions';

const SignUp = () => {
    const [formFields, setFormFields] = useState({
        email: '',
        password: '',
        firstName: '',
        lastName: '',
    });

    const authError = useSelector((state) => state.auth.authError);
    const dispatch = useDispatch();

    const changeHandler = (e) => {
        setFormFields({
            ...formFields,
            [e.target.name]: e.target.value,
        });
    };

    const submitHandler = (e) => {
        e.preventDefault();

        dispatch(signUp(formFields));
    };

    const auth = useSelector((state) => state.firebase.auth);

    if (auth.uid) {
        return <Redirect to="/" />;
    }

    return (
        <div className="container">
            <form onSubmit={submitHandler} className="white">
                <h5 className="grey-text text-darken-3">Sign Up</h5>
                <div className="input-field">
                    <label htmlFor="email">E-Mail</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        onChange={changeHandler}
                        value={formFields.email}
                    />
                </div>

                <div className="input-field">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        onChange={changeHandler}
                        value={formFields.password}
                    />
                </div>

                <div className="input-field">
                    <label htmlFor="firstName">First Name</label>
                    <input
                        type="text"
                        name="firstName"
                        id="firstName"
                        onChange={changeHandler}
                        value={formFields.firstName}
                    />
                </div>

                <div className="input-field">
                    <label htmlFor="lastName">Last Name</label>
                    <input
                        type="text"
                        name="lastName"
                        id="lastName"
                        onChange={changeHandler}
                        value={formFields.lastName}
                    />
                </div>

                <div className="input-field">
                    <button
                        className="btn pink lighten-1 z-depth-0"
                        type="submit"
                    >
                        Sign up
                    </button>
                    <div className="red-text center">
                        {authError ? <p>{authError.message}</p> : null}
                    </div>
                </div>
            </form>
        </div>
    );
};

export default SignUp;
