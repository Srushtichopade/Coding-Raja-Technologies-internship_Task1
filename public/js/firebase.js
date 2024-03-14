let firebaseConfig = {
    apiKey: "AIzaSyD2hAIpjyxH9oCEinko8EE32TAt0BJhS20",
    authDomain: "blog-srush.firebaseapp.com",
    projectId: "blog-srush",
    storageBucket: "blog-srush.appspot.com",
    messagingSenderId: "89263164476",
    appId: "1:89263164476:web:d4c9ac4c9be08c51e90739"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();