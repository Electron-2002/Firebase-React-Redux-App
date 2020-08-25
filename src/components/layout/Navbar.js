import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

const Navbar = () => {
    const auth = useSelector((state) => state.firebase.auth);
    const profile = useSelector((state) => state.firebase.profile);
    console.log(auth);

    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to="/" className="brand-logo">
                    FirebaseApp
                </Link>
                {auth.uid ? (
                    <SignedInLinks profile={profile} />
                ) : (
                    <SignedOutLinks />
                )}
            </div>
        </nav>
    );
};

export default Navbar;
