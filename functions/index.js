const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp(functions.config().firebase);

exports.helloWorld = functions.https.onRequest((request, response) => {
    functions.logger.info('Hello logs!', { structuredData: true });
    response.send('Hello Firebase!');
});

const createNotification = (notification) => {
    return admin
        .firestore()
        .collection('notifications')
        .add(notification)
        .then((doc) => {
            console.log('Notification Added!', doc);
        });
};

exports.projectCreated = functions.firestore
    .document('projects/{projectId}')
    .onCreate((doc) => {
        const project = doc.data();

        const notification = {
            content: 'New Project Added!',
            user: `${project.firstName} ${project.lastName}`,
            time: admin.firestore.FieldValue.serverTimestamp(),
        };

        return createNotification(notification);
    });
