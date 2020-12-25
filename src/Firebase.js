// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBfP0NnJDDxvUuf4k49RXqklUI4m4Kqkwo",
  authDomain: "facebook-clone-e9ac0.firebaseapp.com",
  databaseURL: "https://facebook-clone-e9ac0.firebaseio.com",
  projectId: "facebook-clone-e9ac0",
  storageBucket: "facebook-clone-e9ac0.appspot.com",
  messagingSenderId: "894613232951",
  appId: "1:894613232951:web:682b3b34dcdb209dc4ceb2",
  measurementId: "G-DG36428FGZ",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
