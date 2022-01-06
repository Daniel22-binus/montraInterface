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
// let app;
// if (firebase.apps.length === 0) {
//   firebase.initializeApp(firebaseConfig);
//   firebase.firestore().settings({ experimentalForceLongPolling: true });
// } 
// else {
//   app = firebase.app();
// }
// const auth = firebase.auth();

// let app2;
// if (firebase.apps.length === 0) {
//   app2 = firebase.initializeApp(firebaseConfig);
// } else {
//   app2 = firebase.app();
// }
// const db = firebase.firestore().settings({ experimentalForceLongPolling: true })

// firebase.firestore().settings({experimentalForceLongPolling: true});
export {auth};
// export {db};




export default firebase;



// if (firebase.apps.length === 0) {
//   firebase.initializeApp(firebaseConfig);
// }
// if(firebase.apps.length === 0){
//   firebase.initializeApp(firebaseConfig)
//   // var db = firebase.firestore();
// }

// firebase.firestore().settings({experimentalForceLongPolling: true});

// export const firebase = firebase.firestore();
// const app = initializeApp(firebaseConfig);
// export const db = app.database();

// if (firebase.apps.length === 0) {
//   firebase.initializeApp(firebaseConfig)
// }

// export firebase;
