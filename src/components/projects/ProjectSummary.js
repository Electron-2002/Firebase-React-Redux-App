import React from 'react';
import PropTypes from 'prop-types';

const ProjectSummary = ({ project }) => {
    return (
        <div className="card z-depth-0 project-summary">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">{project.title}</span>
                <p>Posted by Satej Bidvai</p>
                <p className="grey-text">1st Jan, 2020: 12am</p>
            </div>
        </div>
    );
};

ProjectSummary.propTypes = {
    project: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
    }),
};

export default ProjectSummary;
