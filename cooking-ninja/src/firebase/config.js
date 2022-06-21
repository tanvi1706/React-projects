import firebase from "firebase/app";
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAQi5sz_kDzrdNUv76W8-fy5LK-H5TrzgM",
    authDomain: "cooking-project-9de10.firebaseapp.com",
    projectId: "cooking-project-9de10",
    storageBucket: "cooking-project-9de10.appspot.com",
    messagingSenderId: "469929865125",
    appId: "1:469929865125:web:ee2614fa3206514796824c"
  };


firebase.initializeApp(firebaseConfig);

const projectFirestore = firebase.firestore();

export { projectFirestore }

