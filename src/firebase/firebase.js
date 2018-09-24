import firebase from 'firebase';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyAXTZOPfhB0mKN47rxIuMs9H_mc8odWS5g",
  authDomain: "red-social-framework.firebaseapp.com",
  databaseURL: "https://red-social-framework.firebaseio.com",
  projectId: "red-social-framework",
  storageBucket: "red-social-framework.appspot.com",
  messagingSenderId: "359981357151"
  };
  const firebaseExport = firebase.initializeApp(config);

  export default firebaseExport;

  