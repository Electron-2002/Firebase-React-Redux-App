import { getFirebase } from 'react-redux-firebase';

export const createProject = (project) => {
    return (dispatch) => {
        const firestore = getFirebase().firestore();
        firestore
            .collection('projects')
            .add({
                firstName: 'Satej',
                lastName: 'Bidvai',
                authorId: 12345,
                createdAt: new Date(),
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
