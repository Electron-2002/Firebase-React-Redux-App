import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { createProject } from '../../store/actions/projectActions';

const CreateProject = (props) => {
    const [formFields, setFormFields] = useState({
        title: '',
        content: '',
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

        dispatch(createProject(formFields));

        props.history.push('/');
    };

    return (
        <div className="flex items-center justify-between flex-wrap max-w-5xl mx-auto mt-10">
            <form
                onSubmit={submitHandler}
                autoComplete="off"
                className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mx-10 w-full"
            >
                <div className="text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6 md:mb-10 md:border-b md:pb-6">
                        New Blog
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
                            onChange={changeHandler}
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
                        />
                    </div>
                </div>

                <div className="text-center md:border-t pt-4 md:pt-6">
                    <button
                        className="w-2/3 md:w-1/3 shadow bg-pink-500 hover:bg-pink-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                        type="submit"
                    >
                        Create
                    </button>
                </div>
            </form>
        </div>
    );
    // return (
    //     <div className="container">
    //         <form onSubmit={submitHandler} className="white">
    //             <h5 className="grey-text text-darken-3">Create New Project</h5>
    //             <div className="input-field">
    //                 <label htmlFor="title">Title</label>
    //                 <input
    //                     type="text"
    //                     name="title"
    //                     id="title"
    //                     onChange={changeHandler}
    //                     value={formFields.title}
    //                 />
    //             </div>

    //             <div className="input-field">
    //                 <label htmlFor="content">Project Content</label>
    //                 <textarea
    //                     name="content"
    //                     id="content"
    //                     onChange={changeHandler}
    //                     value={formFields.content}
    //                     className="materialize-textarea"
    //                 />
    //             </div>

    //             <div className="input-field">
    //                 <button
    //                     className="btn pink lighten-1 z-depth-0"
    //                     type="submit"
    //                 >
    //                     Create
    //                 </button>
    //             </div>
    //         </form>
    //     </div>
    // );
};

CreateProject.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func.isRequired,
    }),
};

export default CreateProject;
