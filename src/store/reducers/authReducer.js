const initialState = {
    authError: null,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            console.log('Login Success!');
            return {
                ...state,
                authError: null,
            };

        case 'LOGIN_ERROR':
            console.log('Login Failed!');
            return {
                ...state,
                authError: 'Login Failed!',
            };

        case 'LOGOUT_SUCCESS':
            console.log('Logout Success!');
            return state;

        case 'SIGNUP_SUCCESS':
            console.log('Signup Success!');
            return {
                ...state,
                authError: null,
            };

        case 'SIGNUP_ERROR':
            console.log('Signup Failed!');
            return {
                ...state,
                authError: action.payload,
            };

        default:
            return state;
    }
};

export default authReducer;
