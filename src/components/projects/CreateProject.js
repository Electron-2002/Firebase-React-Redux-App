import React, { useState } from 'react';

const CreateProject = () => {
    const [formFields, setFormFields] = useState({
        title: '',
        content: '',
    });

    const changeHandler = (e) => {
        setFormFields({
            ...formFields,
            [e.target.name]: e.target.value,
        });
    };

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(formFields);
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

export default CreateProject;
