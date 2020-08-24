import React from 'react';
import { useFirestoreConnect } from 'react-redux-firebase';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

const ProjectDetails = (props) => {
    const {
        match: {
            params: { id },
        },
    } = props;

    useFirestoreConnect([{ collection: 'projects' }]);
    const projectDetails = useSelector((state) =>
        state.firestore.data.projects ? state.firestore.data.projects[id] : null
    );

    if (!projectDetails) {
        return <div className="container center">Loading...</div>;
    }
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">{projectDetails.title}</span>
                    <p className="">{projectDetails.content}</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>
                        Posted by {projectDetails.firstName}
                        {projectDetails.lastName}
                    </div>
                    <div>{projectDetails.createdAt.seconds}</div>
                </div>
            </div>
        </div>
    );
};

ProjectDetails.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            id: PropTypes.string.isRequired,
        }),
    }),
};

export default ProjectDetails;
