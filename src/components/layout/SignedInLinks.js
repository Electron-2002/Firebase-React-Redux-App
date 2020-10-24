import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signOut } from '../../store/actions/authActions';

const SignedInLinks = () => {
    const dispatch = useDispatch();

    return (
        <ul className="text-sm md:flex-grow md:flex md:items-center md:justify-end">
            <li>
                <NavLink
                    to="/"
                    className="block mt-4 md:text-base md:tracking-wide md:bg-pink-500 md:uppercase md:px-3 md:py-2 md:rounded-full md:inline-block md:mt-0 text-white transform md:hover:-translate-y-1 md:hover:scale-110 transition ease-in-out duration-500 mr-4 font-semibold"
                >
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/create"
                    className="block mt-4 md:text-base md:tracking-wide md:bg-pink-500 md:uppercase md:px-3 md:py-2 md:rounded-full md:inline-block md:mt-0 text-white transform md:hover:-translate-y-1 md:hover:scale-110 transition ease-in-out duration-500 mr-4 font-semibold"
                >
                    New Blog
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/"
                    onClick={() => dispatch(signOut())}
                    className="block mt-4 md:text-base md:tracking-wide md:bg-pink-500 md:uppercase md:px-3 md:py-2 md:rounded-full md:inline-block md:mt-0 text-white transform md:hover:-translate-y-1 md:hover:scale-110 transition ease-in-out duration-500 font-semibold"
                >
                    Logout
                </NavLink>
            </li>
        </ul>
    );

    // return (
    //     <ul className="right">
    //         <li>
    //             <NavLink to="/create">New Project</NavLink>
    //         </li>
    //         <li>
    //             <NavLink to="/" onClick={() => dispatch(signOut())}>
    //                 Logout
    //             </NavLink>
    //         </li>
    //         <li>
    //             <NavLink to="/" className="btn btn-floating pink lighten-1">
    //                 {initials}
    //             </NavLink>
    //         </li>
    //     </ul>
    // );
};

export default SignedInLinks;
