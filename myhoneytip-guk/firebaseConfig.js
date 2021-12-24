//import * as firebase from 'firebase/app';
import firebase from 'firebase/app';

// 사용할 파이어베이스 서비스 주석을 해제합니다
//import "firebase/auth";
import "firebase/database";
//import "firebase/firestore";
//import "firebase/functions";
import "firebase/storage";

// Initialize Firebase
//파이어베이스 사이트에서 봤던 연결정보를 여기에 가져옵니다
const firebaseConfig = {
    apiKey: "AIzaSyA3ft6LfrtmkDWwX6RdZxHyCeaK_5EOUNU",
    authDomain: "sparta-myhoneytip-a4cbd.firebaseapp.com",
    databaseURL: "https://sparta-myhoneytip-a4cbd-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "sparta-myhoneytip-a4cbd",
    storageBucket: "sparta-myhoneytip-a4cbd.appspot.com",
    messagingSenderId: "1044520674365",
    appId: "1:1044520674365:web:3149453e98bd23bc5c7654",
    measurementId: "G-4QF7WT1TGW"
};

//사용 방법입니다. 
//파이어베이스 연결에 혹시 오류가 있을 경우를 대비한 코드로 알아두면 됩니다.
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export const firebase_db = firebase.database()