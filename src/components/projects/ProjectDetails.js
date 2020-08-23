import React from 'react';
import PropTypes from 'prop-types';

const ProjectDetails = (props) => {
    const {
        match: {
            params: { id },
        },
    } = props;

    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title - {id}</span>
                    <p className="">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Deserunt est culpa dignissimos quo aliquid
                        pariatur animi, veniam dicta libero ab laborum
                        accusantium, doloremque dolorem sapiente similique quas
                        recusandae, inventore minus!
                    </p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by Satej Bidvai</div>
                    <div>1st Jan, 2020: 12 am</div>
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
