import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedOutLinks = () => {
    return (
        <ul className="text-sm md:flex-grow md:flex md:items-center md:justify-end">
            <li>
                <NavLink
                    to="/signup"
                    className="block mt-4 md:text-base md:tracking-wide md:bg-pink-500 md:uppercase md:px-3 md:py-2 md:rounded-full md:inline-block md:mt-0 text-white transform md:hover:-translate-y-1 md:hover:scale-110 transition ease-in-out duration-500 mr-4 font-semibold"
                >
                    Sign Up
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/signin"
                    className="block mt-4 md:text-base md:tracking-wide md:bg-pink-500 md:uppercase md:px-3 md:py-2 md:rounded-full md:inline-block md:mt-0 text-white transform md:hover:-translate-y-1 md:hover:scale-110 transition ease-in-out duration-500 font-semibold"
                >
                    Login
                </NavLink>
            </li>
        </ul>
    );

    // return (
    //     <ul className="right">
    //         <li>
    //             <NavLink to="/signup">Sign Up</NavLink>
    //         </li>
    //         <li>
    //             <NavLink to="/signin">Login</NavLink>
    //         </li>
    //     </ul>
    // );
};

export default SignedOutLinks;
