import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { useFirestoreConnect } from 'react-redux-firebase';
import { updateProject } from '../../store/actions/projectActions';

const UpdateProject = (props) => {
    const {
        match: {
            params: { id },
        },
    } = props;

    useFirestoreConnect([{ collection: 'projects' }]);
    const projectDetails = useSelector((state) =>
        state.firestore.data.projects ? state.firestore.data.projects[id] : null
    );

    const [formFields, setFormFields] = useState({
        title: projectDetails.title,
        content: projectDetails.content,
    });

    const dispatch = useDispatch();

    const changeHandler = (e) => {
        setFormFields({
            ...formFields,
            [e.target.name]: e.target.value,
        });
    };

    const submitHandler = (e) => {
        e.preventDefault();

        dispatch(updateProject(id, formFields.content));

        props.history.push(`/project/${id}`);
    };

    if (!projectDetails) {
        return <div className="container center">Loading...</div>;
    }

    return (
        <div className="flex items-center justify-between flex-wrap max-w-5xl mx-auto mt-10">
            <form
                onSubmit={submitHandler}
                autoComplete="off"
                className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mx-10 w-full"
            >
                <div className="text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6 md:mb-10 md:border-b md:pb-6">
                        Update Blog
                    </h1>
                </div>
                <div className="flex flex-wrap -mx-3 md:mb-6">
                    <div className="w-full md:mx-12">
                        <label
                            className="block uppercase tracking-wide text-blue-800 text-xs font-bold mb-2"
                            htmlFor="title"
                        >
                            Title
                        </label>
                        <input
                            type="text"
                            name="title"
                            id="title"
                            placeholder="Title"
                            contentEditable="false"
                            value={formFields.title}
                            className="appearance-none block w-full bg-gray-200 text-blue-800 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-2 focus:border-blue-800"
                        />
                    </div>

                    <div className="w-full md:mx-12">
                        <label
                            htmlFor="content"
                            className="block uppercase tracking-wide text-blue-800 text-xs font-bold mb-2"
                        >
                            Content
                        </label>
                        <textarea
                            name="content"
                            id="content"
                            placeholder="Content Description"
                            className="appearance-none block w-full bg-gray-200 text-blue-800 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-2 focus:border-gray-500"
                            onChange={changeHandler}
                            value={formFields.content}
                            rows={10}
                        />
                    </div>
                </div>

                <div className="text-center md:border-t pt-4 md:pt-6">
                    <button
                        className="w-2/3 md:w-1/3 shadow bg-pink-500 hover:bg-pink-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                        type="submit"
                    >
                        Update
                    </button>
                </div>
            </form>
        </div>
    );
};

UpdateProject.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            id: PropTypes.string.isRequired,
        }),
    }),
    history: PropTypes.shape({
        push: PropTypes.func.isRequired,
    }),
};

export default UpdateProject;
