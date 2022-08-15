import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    apiKey: "AIzaSyCgJoc-_Znu6763T2anhijP_EbjqjSzPDI",
    authDomain: "git-test-1-e801a.firebaseapp.com",
    projectId: "git-test-1-e801a",
    storageBucket: "git-test-1-e801a.appspot.com",
    messagingSenderId: "1080856871453",
    appId: "1:1080856871453:web:319e9465a60e0842dd7cf4"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
