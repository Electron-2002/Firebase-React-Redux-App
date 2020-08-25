import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import { useSelector } from 'react-redux';

const Navbar = () => {
    const auth = useSelector((state) => state.firebase.auth);
    console.log(auth);

    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to="/" className="brand-logo">
                    FirebaseApp
                </Link>
                {auth.uid ? <SignedInLinks /> : <SignedOutLinks />}
            </div>
        </nav>
    );
};

export default Navbar;
