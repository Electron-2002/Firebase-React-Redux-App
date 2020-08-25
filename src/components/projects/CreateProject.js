import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createProject } from '../../store/actions/projectActions';
import PropTypes from 'prop-types';

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

        console.log(props.history);
        props.history.push('/');
    };

    return (
        <div className="container">
            <form onSubmit={submitHandler} className="white">
                <h5 className="grey-text text-darken-3">Create New Project</h5>
                <div className="input-field">
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        name="title"
                        id="title"
                        onChange={changeHandler}
                        value={formFields.title}
                    />
                </div>

                <div className="input-field">
                    <label htmlFor="content">Project Content</label>
                    <textarea
                        name="content"
                        id="content"
                        onChange={changeHandler}
                        value={formFields.content}
                        className="materialize-textarea"
                    />
                </div>

                <div className="input-field">
                    <button
                        className="btn pink lighten-1 z-depth-0"
                        type="submit"
                    >
                        Create
                    </button>
                </div>
            </form>
        </div>
    );
};

CreateProject.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func.isRequired,
    }),
};

export default CreateProject;
