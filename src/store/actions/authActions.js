export const signIn = (credentials) => (dispatch, _, getFirebase) => {
    const firebase = getFirebase();

    firebase
        .auth()
        .signInWithEmailAndPassword(credentials.email, credentials.password)
        .then(() => {
            dispatch({ type: 'LOGIN_SUCCESS' });
        })
        .catch((err) => {
            dispatch({ type: 'LOGIN_ERROR', payload: err });
        });
};

export const signOut = () => (dispatch, _, getFirebase) => {
    const firebase = getFirebase();

    firebase
        .auth()
        .signOut()
        .then(() => {
            dispatch({ type: 'LOGOUT_SUCCESS' });
        });
};

export const signUp = (userDetails) => (dispatch, _, getFirebase) => {
    const firebase = getFirebase();
    const firestore = firebase.firestore();

    firebase
        .auth()
        .createUserWithEmailAndPassword(userDetails.email, userDetails.password)
        .then((res) => {
            return firestore
                .collection('users')
                .doc(res.user.uid)
                .set({
                    firstName: userDetails.firstName,
                    lastName: userDetails.lastName,
                    initials:
                        userDetails.firstName[0] + userDetails.lastName[0],
                });
        })
        .then(() => {
            dispatch({ type: 'SIGNUP_SUCCESS' });
        })
        .catch((err) => {
            dispatch({ type: 'SIGNUP_ERROR', payload: err });
        });
};
