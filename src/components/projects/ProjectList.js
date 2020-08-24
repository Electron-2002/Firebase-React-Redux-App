import React from 'react';
import PropTypes from 'prop-types';
import ProjectSummary from './ProjectSummary';

const ProjectList = ({ projects }) => {
    return (
        <div className="project-list section">
            {projects &&
                projects.map((project) => (
                    <ProjectSummary project={project} key={project.id} />
                ))}
        </div>
    );
};

ProjectList.propTypes = {
    projects: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            title: PropTypes.string,
            content: PropTypes.string,
        })
    ),
};

export default ProjectList;
