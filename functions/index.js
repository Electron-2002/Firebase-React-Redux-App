const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp(functions.config().firebase);

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
            content: 'New Blog Added!',
            user: `${project.firstName} ${project.lastName}`,
            time: admin.firestore.FieldValue.serverTimestamp(),
            title: project.title,
            type: 1,
        };

        return createNotification(notification);
    });

exports.projectDeleted = functions.firestore
    .document('projects/{projectId}')
    .onDelete((doc) => {
        const project = doc.data();

        const notification = {
            content: 'Blog Deleted!',
            user: `${project.firstName} ${project.lastName}`,
            time: admin.firestore.FieldValue.serverTimestamp(),
            title: project.title,
            type: 1,
        };

        return createNotification(notification);
    });

exports.userAdded = functions.auth.user().onCreate((user) => {
    return admin
        .firestore()
        .collection('users')
        .doc(user.uid)
        .get()
        .then((doc) => {
            const newUser = doc.data();

            const notification = {
                content: 'New User added!',
                user: `${newUser.firstName} ${newUser.lastName}`,
                time: admin.firestore.FieldValue.serverTimestamp(),
                type: 2,
            };

            return createNotification(notification);
        });
});
