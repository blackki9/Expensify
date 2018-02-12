import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBAtyoXWUy5ZTtOWdbp5NxWyzTTU8ibsXY",
    authDomain: "expensify-6abb8.firebaseapp.com",
    databaseURL: "https://expensify-6abb8.firebaseio.com",
    projectId: "expensify-6abb8",
    storageBucket: "expensify-6abb8.appspot.com",
    messagingSenderId: "1011405974515"
  };

  firebase.initializeApp(config);

  const database = firebase.database();

  export {firebase, database as default};
  // database.ref('expense').on('child_removed', (snapshot) => {

// });

// database.ref('expense').on('child_changed', (snapshot) => {

// });

// database.ref('expense').on('child_added', (snapshot) => {

// });