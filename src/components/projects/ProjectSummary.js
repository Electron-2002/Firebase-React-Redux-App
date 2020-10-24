import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const ProjectSummary = ({ project }) => {
    return (
        <div className="bg-white shadow-md rounded mb-4 w-full border-black border-2">
            <div className="">
                <h2 className="border-b-2 border-black pl-6 pb-4 pr-4 bg-pink-300 text-blue-700 text-3xl font-bold capitalize flex flex-col">
                    <p className="rounded-full bg-white px-2 py-1 mt-2 font-bold text-xs text-right self-end">
                        {moment(project.createdAt.toDate()).calendar()}
                    </p>
                    {project.title}
                </h2>
                <div className="flex justify-between items-center mr-3">
                    <p className="text-blue-600 px-2 py-1 ml-2 my-2 font-bold text-sm capitalize">
                        Posted by: {project.firstName} {project.lastName}
                    </p>
                    <div className="font-bold">View Blog ➡</div>
                </div>
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
        title: PropTypes.string,
    }),
};

export default ProjectSummary;
