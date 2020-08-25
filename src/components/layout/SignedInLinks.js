import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { signOut } from '../../store/actions/authActions';

const SignedInLinks = (props) => {
    const {
        profile: { initials },
    } = props;

    const dispatch = useDispatch();

    return (
        <ul className="right">
            <li>
                <NavLink to="/create">New Project</NavLink>
            </li>
            <li>
                <NavLink to="/" onClick={() => dispatch(signOut())}>
                    Logout
                </NavLink>
            </li>
            <li>
                <NavLink to="/" className="btn btn-floating pink lighten-1">
                    {initials}
                </NavLink>
            </li>
        </ul>
    );
};

SignedInLinks.propTypes = {
    profile: PropTypes.shape({
        initials: PropTypes.string,
    }),
};

export default SignedInLinks;
