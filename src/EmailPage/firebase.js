import firebase from "firebase/compat/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBJe83es6uU5WI9179m1PNWuLfv8vsKXJE",
    authDomain: "deempay-website-form.firebaseapp.com",
    projectId: "deempay-website-form",
    storageBucket: "deempay-website-form.appspot.com",
    messagingSenderId: "808094500246",
    appId: "1:808094500246:web:8efea3541fbcc0fdb349b7",
    measurementId: "G-Z2TBTLVHQF"
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase;