import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const ProjectSummary = ({ project }) => {
    return (
        <div className="card z-depth-0 project-summary">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">{project.title}</span>
                <p>
                    Posted by {project.firstName} {project.lastName}
                </p>
                <p className="grey-text">
                    {moment(project.createdAt.toDate()).calendar()}
                </p>
            </div>
        </div>
    );
};

ProjectSummary.propTypes = {
    project: PropTypes.shape({
        firstName: PropTypes.string.isRequired,
        lastName: PropTypes.string.isRequired,
        createdAt: PropTypes.shape({
            toDate: PropTypes.func,
        }),
    }),
};

export default ProjectSummary;
