import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { ReactReduxFirebaseProvider, getFirebase } from 'react-redux-firebase';
import { createFirestoreInstance } from 'redux-firestore';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
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

ReactDOM.render(
    <Provider store={store}>
        <ReactReduxFirebaseProvider {...rrfProps}>
            <Router>
                <App />
            </Router>
        </ReactReduxFirebaseProvider>
    </Provider>,
    document.getElementById('root')
);
