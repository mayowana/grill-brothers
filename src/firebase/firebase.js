import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAKcyKVvuuQ5KFKfd_WUYzsRtSKNgWF2B0",
    authDomain: "grill-brothers.firebaseapp.com",
    databaseURL: "https://grill-brothers.firebaseio.com",
    projectId: "grill-brothers",
    storageBucket: "grill-brothers.appspot.com",
    messagingSenderId: "1018519809161",
    appId: "1:1018519809161:web:5bf0142c98c2a29d7baa58",
    measurementId: "G-4CF6SCD2MB"
  };

  firebase.initializeApp(firebaseConfig);
  export const db = firebase.firestore();