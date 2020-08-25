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

export default createProject;
