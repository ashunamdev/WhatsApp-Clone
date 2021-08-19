import firebase from 'firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAmZmoINA9yjwpsU0Dh5AuQJczDau13ggI",
    authDomain: "whats-app-clone-6be49.firebaseapp.com",
    projectId: "whats-app-clone-6be49",
    storageBucket: "whats-app-clone-6be49.appspot.com",
    messagingSenderId: "729972322999",
    appId: "1:729972322999:web:effde3a19e21f95a7e9332",
    measurementId: "G-S9CVKPWDVH"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  

  export { auth, provider};
  export default db;