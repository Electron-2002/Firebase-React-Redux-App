import React from 'react';
import { useSelector } from 'react-redux';
import { useFirestoreConnect } from 'react-redux-firebase';
import Notifications from './Notifications';
import ProjectList from '../projects/ProjectList';

const Dashboard = () => {
    useFirestoreConnect([
        { collection: 'projects', orderBy: ['createdAt', 'desc'] },
        { collection: 'notifications', limit: 3, orderBy: ['time', 'desc'] },
    ]);

    const projects = useSelector((state) => state.firestore.ordered.projects);
    const notifications = useSelector(
        (state) => state.firestore.ordered.notifications
    );

    return (
        <div className="flex items-start justify-between flex-wrap max-w-5xl mx-auto mt-10 ">
            <div className="w-full md:w-3/5">
                <ProjectList projects={projects} />
            </div>
            <div className="w-full md:w-2/6">
                <Notifications notifications={notifications} />
            </div>
        </div>
    );

    // return (
    //     <div className="dashboard container">
    //         <div className="row">
    //             <div className="col s12 m6">
    //                 <ProjectList projects={projects} />
    //             </div>
    //             <div className="col s12 m5 offset-m1">
    //                 <Notifications notifications={notifications} />
    //             </div>
    //         </div>
    //     </div>
    // );
};

export default Dashboard;
