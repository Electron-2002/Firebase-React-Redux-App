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
        <div className="flex items-center justify-between flex-wrap max-w-5xl mx-auto mt-10">
            <form
                onSubmit={submitHandler}
                autoComplete="off"
                className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mx-10 w-full"
            >
                <div className="text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6 md:mb-10 md:border-b md:pb-6">
                        Register
                    </h1>
                </div>
                <div className="flex flex-wrap -mx-3 md:mb-6">
                    <div className="w-full md:w-1/2 md:pl-12 md:pr-4">
                        <label
                            className="block uppercase tracking-wide text-blue-800 text-xs font-bold mb-2"
                            htmlFor="email"
                        >
                            E-Mail
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="E-Mail"
                            onChange={changeHandler}
                            value={formFields.email}
                            className="appearance-none block w-full bg-gray-200 text-blue-800 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-2 focus:border-blue-800"
                        />
                    </div>

                    <div className="w-full md:w-1/2 md:pr-12 md:pl-4">
                        <label
                            htmlFor="password"
                            className="block uppercase tracking-wide text-blue-800 text-xs font-bold mb-2"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Password"
                            className="appearance-none block w-full bg-gray-200 text-blue-800 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-2 focus:border-blue-800 focus:border-gray-500"
                            onChange={changeHandler}
                            value={formFields.password}
                        />
                    </div>
                </div>

                <div className="flex flex-wrap -mx-3 mb-3">
                    <div className="w-full md:w-1/2 md:pl-12 md:pr-4">
                        <label
                            htmlFor="firstName"
                            className="block uppercase tracking-wide text-blue-800 text-xs font-bold mb-2"
                        >
                            First Name
                        </label>
                        <input
                            type="text"
                            name="firstName"
                            id="firstName"
                            placeholder="First Name"
                            className="appearance-none block w-full bg-gray-200 text-blue-800 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-2 focus:border-blue-800 focus:border-gray-500"
                            onChange={changeHandler}
                            value={formFields.firstName}
                        />
                    </div>

                    <div className="w-full md:w-1/2 md:pr-12 md:pl-4">
                        <label
                            htmlFor="lastName"
                            className="block uppercase tracking-wide text-blue-800 text-xs font-bold mb-2"
                        >
                            Last Name
                        </label>
                        <input
                            type="text"
                            name="lastName"
                            id="lastName"
                            placeholder="Last Name"
                            className="appearance-none block w-full bg-gray-200 text-blue-800 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-2 focus:border-blue-800 focus:border-gray-500"
                            onChange={changeHandler}
                            value={formFields.lastName}
                        />
                    </div>
                </div>

                <div className="text-red-500 text-center text-xs md:text-sm mb-3">
                    {authError ? <p>{authError.message}</p> : null}
                </div>

                <div className="text-center md:border-t pt-4 md:pt-6">
                    <button
                        className="w-2/3 md:w-1/3 shadow bg-pink-500 hover:bg-pink-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                        type="submit"
                    >
                        Sign up
                    </button>
                </div>
            </form>
        </div>
    );

    // return (
    //     <div className="container">
    //         <form onSubmit={submitHandler} className="white">
    //             <h5 className="grey-text text-darken-3">Sign Up</h5>
    //             <div className="input-field">
    //                 <label htmlFor="email">E-Mail</label>
    //                 <input
    //                     type="email"
    //                     name="email"
    //                     id="email"
    //                     onChange={changeHandler}
    //                     value={formFields.email}
    //                 />
    //             </div>

    //             <div className="input-field">
    //                 <label htmlFor="password">Password</label>
    //                 <input
    //                     type="password"
    //                     name="password"
    //                     id="password"
    //                     onChange={changeHandler}
    //                     value={formFields.password}
    //                 />
    //             </div>

    //             <div className="input-field">
    //                 <label htmlFor="firstName">First Name</label>
    //                 <input
    //                     type="text"
    //                     name="firstName"
    //                     id="firstName"
    //                     onChange={changeHandler}
    //                     value={formFields.firstName}
    //                 />
    //             </div>

    //             <div className="input-field">
    //                 <label htmlFor="lastName">Last Name</label>
    //                 <input
    //                     type="text"
    //                     name="lastName"
    //                     id="lastName"
    //                     onChange={changeHandler}
    //                     value={formFields.lastName}
    //                 />
    //             </div>

    //             <div className="input-field">
    //                 <button
    //                     className="btn pink lighten-1 z-depth-0"
    //                     type="submit"
    //                 >
    //                     Sign up
    //                 </button>
    //                 <div className="red-text center">
    //                     {authError ? <p>{authError.message}</p> : null}
    //                 </div>
    //             </div>
    //         </form>
    //     </div>
    // );
};

export default SignUp;
