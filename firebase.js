// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4mAUcUXiujXZnrFFvTOC_KDRJl1U6T0k",
  authDomain: "thesis-montra-app-1eef7.firebaseapp.com",
  projectId: "thesis-montra-app-1eef7",
  storageBucket: "thesis-montra-app-1eef7.appspot.com",
  messagingSenderId: "1078465613538",
  appId: "1:1078465613538:web:83daa4d1e320c9ceee18bb"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);

let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()

export { auth };