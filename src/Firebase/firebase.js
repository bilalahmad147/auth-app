import firebase from 'firebase/app'
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyCsSKMvgKEwCmAuaoxQUYTZRZAg_ibU2nA",
    authDomain: "image-upload-3d16d.firebaseapp.com",
    databaseURL: "https://image-upload-3d16d.firebaseio.com",
    projectId: "image-upload-3d16d",
    storageBucket: "image-upload-3d16d.appspot.com",
    messagingSenderId: "852835879875",
    appId: "1:852835879875:web:170463bbec763a4e970b76"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const storage = firebase.storage()

export {
    storage, firebase as default
}