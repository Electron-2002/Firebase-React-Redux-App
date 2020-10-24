import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { useSelector } from 'react-redux';

const Notifications = ({ notifications }) => {
    const auth = useSelector((state) => state.firebase.auth);

    return (
        <div className="bg-white shadow-md rounded px-2 pt-4 mx-6">
            <div className="flex items-center border-b pb-4 justify-center">
                <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    />
                </svg>
                <h1 className="text-xl md:text-xl font-bold text-blue-900 ml-2">
                    Notifications
                </h1>
            </div>
            {auth.uid ? (
                <ul className="mt-4">
                    {notifications &&
                        notifications.map((notification) => (
                            <li key={notification.id} className="pl-5">
                                <span className="capitalize px-2 text-white text-xs bg-blue-400 rounded-full">
                                    {moment(
                                        notification.time.toDate()
                                    ).fromNow()}
                                </span>
                                <br />
                                <span role="img" aria-label="">
                                    🔔
                                </span>
                                <span className="ml-2 capitalize font-bold">
                                    {notification.content}
                                </span>
                                <p className="capitalize mt-1">
                                    <strong className="font-semibold">
                                        User:{' '}
                                    </strong>
                                    {notification.user}
                                </p>
                                {notification.type === 1 && (
                                    <p className="capitalize mt-1">
                                        <strong className="font-semibold">
                                            Title:{' '}
                                        </strong>
                                        {notification.title}
                                    </p>
                                )}

                                <br />
                            </li>
                        ))}
                </ul>
            ) : (
                <div className="text-center mt-4 text-blue-800">
                    Login to see notifications...
                </div>
            )}
        </div>
    );

    // return (
    //     <div className="section">
    //         <div className="card z-depth-0">
    //             <div className="card-content">
    //                 <span className="card-title">Notifications</span>
    //                 <ul className="notifications">
    //                     {notifications &&
    //                         notifications.map((notification) => (
    //                             <li key={notification.id}>
    //                                 <span className="pink-text">
    //                                     {notification.user}:{' '}
    //                                 </span>
    //                                 <span>{notification.content}</span>
    //                                 <div className="grey-text note-date">
    //                                     {moment(
    //                                         notification.time.toDate()
    //                                     ).fromNow()}
    //                                 </div>
    //                                 <br />
    //                             </li>
    //                         ))}
    //                 </ul>
    //             </div>
    //         </div>
    //     </div>
    // );
};

Notifications.propTypes = {
    notifications: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            user: PropTypes.string,
            content: PropTypes.string,
            time: PropTypes.shape({
                toDate: PropTypes.func,
            }),
        })
    ),
};

export default Notifications;
