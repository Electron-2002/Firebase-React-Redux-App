import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [menuToggler, setMenuToggler] = useState(false);

    const auth = useSelector((state) => state.firebase.auth);
    const profile = useSelector((state) => state.firebase.profile);

    return (
        <nav className="bg-blue-500 p-6">
            <div className="flex items-center justify-between flex-wrap max-w-5xl md:mx-auto">
                <Link
                    to="/"
                    className="flex items-center flex-shrink-0 text-white mr-6"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                        />
                    </svg>
                    <span className="font-bold text-xl md:text-3xl tracking-tight">
                        Bloggy
                    </span>
                </Link>
                <div className="block md:hidden">
                    <button
                        type="button"
                        className="flex items-center px-2 py-1 border-2 rounded text-blue-100 border-blue-300 hover:text-white hover:border-white focus:outline-none"
                        onClick={() =>
                            setMenuToggler((prevState) => !prevState)
                        }
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="fill-current h-5 w-5 focus:h-6 focus:w-6"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
                </div>

                <div
                    className={`w-full block flex-grow mt-4 md:mt-0 md:flex md:items-center md:w-auto ${
                        !menuToggler && 'hidden md:block'
                    }`}
                >
                    {auth.uid ? (
                        <SignedInLinks profile={profile} />
                    ) : (
                        <SignedOutLinks />
                    )}
                </div>
            </div>
        </nav>
    );

    // return (
    //     <nav className="nav-wrapper grey darken-3">
    //         <div className="container">
    //             <Link to="/" className="brand-logo">
    //                 FirebaseApp
    //             </Link>
    //             {auth.uid ? (
    //                 <SignedInLinks profile={profile} />
    //             ) : (
    //                 <SignedOutLinks />
    //             )}
    //         </div>
    //     </nav>
    // );
};

export default Navbar;
