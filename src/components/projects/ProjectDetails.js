import React from 'react';
import { useFirestoreConnect } from 'react-redux-firebase';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProject } from '../../store/actions/projectActions';

const ProjectDetails = (props) => {
    const {
        match: {
            params: { id },
        },
    } = props;

    const dispatch = useDispatch();

    const auth = useSelector((state) => state.firebase.auth);

    useFirestoreConnect([{ collection: 'projects' }]);
    const projectDetails = useSelector((state) => {
        console.log(state);
        return state.firestore.data.projects
            ? state.firestore.data.projects[id]
            : null;
    });

    const deleteHandler = () => {
        dispatch(deleteProject(id));

        console.log(props.history);
        props.history.push('/');
    };

    const updateHandler = () => {
        props.history.push(`/update/${id}`);
    };

    if (!projectDetails) {
        return <div className="container center">Loading...</div>;
    }

    return (
        <div className="flex items-center justify-between flex-wrap max-w-5xl mx-auto mt-10">
            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mx-10 w-full">
                <div className="text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6 md:mb-10 md:border-b md:pb-6">
                        {projectDetails.title}
                    </h1>
                </div>

                <p className="font-medium text-sm md:text-lg md:mb-6">
                    {projectDetails.content.split('\n').map((item) => {
                        return (
                            // eslint-disable-next-line react/no-array-index-key
                            <span>
                                {item}
                                <br />
                            </span>
                        );
                    })}
                </p>

                {projectDetails.authorId === auth.uid ? (
                    <div className="md:border-t pt-4 md:pt-6 flex justify-center">
                        <button
                            className="w-2/3 md:w-1/4 shadow bg-pink-500 hover:bg-pink-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                            type="button"
                            onClick={updateHandler}
                        >
                            Edit
                        </button>
                        <div className="w-3" />
                        <button
                            className="w-2/3 md:w-1/4 shadow bg-pink-500 hover:bg-pink-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                            type="button"
                            onClick={deleteHandler}
                        >
                            Delete
                        </button>
                    </div>
                ) : null}
            </div>
        </div>
    );
    // return (
    //     <div className="container section project-details">
    //         <div className="card z-depth-0">
    //             <div className="card-content">
    //                 <span className="card-title">{projectDetails.title}</span>
    //                 <p className="">{projectDetails.content}</p>
    //             </div>
    //             <div className="card-action grey lighten-4 grey-text">
    //                 <div>
    //                     Posted by {projectDetails.firstName}
    //                     {projectDetails.lastName}
    //                 </div>
    //                 <div>
    //                     {moment(projectDetails.createdAt.toDate()).calendar()}
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // );
};

ProjectDetails.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            id: PropTypes.string.isRequired,
        }),
    }),
    history: PropTypes.shape({
        push: PropTypes.func.isRequired,
    }),
};

export default ProjectDetails;
