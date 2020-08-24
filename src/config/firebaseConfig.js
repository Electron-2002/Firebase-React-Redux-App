import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase
const firebaseConfig = {
    apiKey: 'AIzaSyDyhD64JkG9a3lpCc-hVnlpwETDFxP7n1w',
    authDomain: 'fir-react-app-e9ff5.firebaseapp.com',
    databaseURL: 'https://fir-react-app-e9ff5.firebaseio.com',
    projectId: 'fir-react-app-e9ff5',
    storageBucket: 'fir-react-app-e9ff5.appspot.com',
    messagingSenderId: '198142362131',
    appId: '1:198142362131:web:9569aed2913a7008db75e6',
    measurementId: 'G-9CTGYBQZ3F',
};

firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
