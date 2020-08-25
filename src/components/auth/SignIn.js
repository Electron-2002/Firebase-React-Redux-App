import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signIn } from '../../store/actions/authActions';

const SignIn = () => {
    const [formFields, setFormFields] = useState({
        email: '',
        password: '',
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

        dispatch(signIn(formFields));
    };

    return (
        <div className="container">
            <form onSubmit={submitHandler} className="white">
                <h5 className="grey-text text-darken-3">Sign In</h5>
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
                    <button
                        className="btn pink lighten-1 z-depth-0"
                        type="submit"
                    >
                        Login
                    </button>
                    <div className="red-text center">
                        {authError ? <p>{authError}</p> : null}
                    </div>
                </div>
            </form>
        </div>
    );
};

export default SignIn;
