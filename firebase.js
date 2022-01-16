// import * as firebase from 'firebase';
import firebase from 'firebase';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBUDrK3edPaZO240M2PRsOlyRbWSKWu5GA',
  authDomain: 'thesis-montra-app-b6e32.firebaseapp.com',
  projectId: 'thesis-montra-app-b6e32',
  storageBucket: 'thesis-montra-app-b6e32.appspot.com',
  messagingSenderId: '122875313426',
  appId: '1:122875313426:web:4ebce8d44ac0088c8f47cb',
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);

if (firebase.apps.length === 0){
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({experimentalForceLongPolling: true});
}

const auth = firebase.auth();
export {auth};
export default firebase;
