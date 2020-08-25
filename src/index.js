import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import {
    ReactReduxFirebaseProvider,
    getFirebase,
    isLoaded,
} from 'react-redux-firebase';
import { createFirestoreInstance } from 'redux-firestore';
import { createStore, applyMiddleware } from 'redux';
import { Provider, useSelector } from 'react-redux';
import thunk from 'redux-thunk';
import firebaseConfig from './config/firebaseConfig';
import rootReducer from './store/reducers/rootReducer';
import App from './App';

const rrfConfig = {
    userProfile: 'users',
    useFirestoreForProfile: true,
};

const store = createStore(
    rootReducer,
    applyMiddleware(thunk.withExtraArgument(getFirebase))
);

const rrfProps = {
    firebase: firebaseConfig,
    config: rrfConfig,
    dispatch: store.dispatch,
    createFirestoreInstance,
};

const AuthIsLoaded = ({ children }) => {
    const auth = useSelector((state) => state.firebase.auth);

    if (!isLoaded(auth)) {
        return <h3 className="center-align bold">Splash Screen</h3>;
    }
    return children;
};

ReactDOM.render(
    <Provider store={store}>
        <ReactReduxFirebaseProvider {...rrfProps}>
            <Router>
                <AuthIsLoaded>
                    <App />
                </AuthIsLoaded>
            </Router>
        </ReactReduxFirebaseProvider>
    </Provider>,
    document.getElementById('root')
);
