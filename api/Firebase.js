import * as firebase from 'firebase';
require("firebase/firestore");

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAITMcQrzrP4BwA4KvgBchmuGM0pqozg_I",
  authDomain: "noname-b0e59.firebaseapp.com",
  databaseURL: "https://noname-b0e59.firebaseio.com",
  projectId: "noname-b0e59",
  storageBucket: "noname-b0e59.appspot.com",
  messagingSenderId: "457308878121",
  appId: "1:457308878121:web:50c81564dc5d5b22d93338",
  measurementId: "G-QJ4PL4NK53"
};

class Firebase {

  // Initialize Firebase
  constructor() {
    firebase.initializeApp(firebaseConfig);
  }

  //Add new user
  signUp = async (user) => {
    try {
      await firebase.auth().createUserWithEmailAndPassword(user.email, user.password);

      let db = this.firestore.collection('users').doc(this.uid);
      db.set({
        name: user.name,
        surname: user.surname,
        birthdate: user.birthdate,
        email: user.email,
        phoneNumber: user.phoneNumber,
        createdDate: this.timestamp
      })

    } catch (error) {
      alert(error);
    }
  }

  //Check user for login
  static checkUser(email, password) {
    this.init();
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(error => alert(error.message));
  }

  //Sign out
  signOut = () => {
    firebase.auth().signOut();
  };

  //Get the firestore
  get firestore() {
    return firebase.firestore();
  }

  //Get the current user Id
  get uid() {
    return (firebase.auth().currentUser || {}).uid;
  }

  //Get the actual date
  get timestamp() {
    return Date.now();
  }
}

Firebase.shared = new Firebase();
export default Firebase;