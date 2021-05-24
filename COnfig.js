import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyD-yUY7Je0ynl-eXb4MrMKPa5QyIIfmThs",
    authDomain: "attendance-12343.firebaseapp.com",
  databaseURL: 'https://attendance-12343-default-rtdb.firebaseio.com/',
 projectId: "attendance-12343",
    storageBucket: "attendance-12343.appspot.com",
    messagingSenderId: "814435233503",
    appId: "1:814435233503:web:3d9bc17770d1aec76b836a",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase.database();
