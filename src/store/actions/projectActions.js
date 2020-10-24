export const createProject = (project) => {
    return (dispatch, getState, getFirebase) => {
        const { profile } = getState().firebase;
        const authorId = getState().firebase.auth.uid;

        const firestore = getFirebase().firestore();
        firestore
            .collection('projects')
            .add({
                firstName: profile.firstName,
                lastName: profile.lastName,
                createdAt: new Date(),
                authorId,
                ...project,
            })
            .then(() => {
                dispatch({ type: 'CREATE_PROJECT', payload: project });
            })
            .catch((err) => {
                dispatch({ type: 'CREATE_PROJECT_ERROR', payload: err });
            });
    };
};

export const deleteProject = (projectId) => {
    return (dispatch, _, getFirebase) => {
        const firestore = getFirebase().firestore();
        firestore
            .collection('projects')
            .doc(projectId)
            .delete()
            .then(() => {
                dispatch({ type: 'DELETE_PROJECT', payload: projectId });
            })
            .catch((err) => {
                dispatch({ type: 'DELETE_PROJECT_ERROR', payload: err });
            });
    };
};

export const updateProject = (projectId, content) => {
    return (dispatch, _, getFirebase) => {
        const firestore = getFirebase().firestore();
        firestore
            .collection('projects')
            .doc(projectId)
            .update({
                content,
            })
            .then(() => {
                dispatch({ type: 'UPDATE_PROJECT', payload: projectId });
            })
            .catch((err) => {
                dispatch({ type: 'UPDATE_PROJECT_ERROR', payload: err });
            });
    };
};
