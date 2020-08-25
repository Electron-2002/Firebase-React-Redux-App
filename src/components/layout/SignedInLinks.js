import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signOut } from '../../store/actions/authActions';

const SignedInLinks = () => {
    const dispatch = useDispatch();

    return (
        <ul className="right">
            <li>
                <NavLink to="/create">New Project</NavLink>
            </li>
            <li>
                <button type="button" onClick={() => dispatch(signOut())}>
                    Logout
                </button>
            </li>
            <li>
                <NavLink to="/" className="btn btn-floating pink lighten-1">
                    SB
                </NavLink>
            </li>
        </ul>
    );
};

export default SignedInLinks;
