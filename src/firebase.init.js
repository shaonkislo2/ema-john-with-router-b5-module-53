import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAjbctLpY2jaOjW6zHEZlgxiC7kSzrN4K0",
  authDomain: "ema-john-simple-b5-277ae.firebaseapp.com",
  projectId: "ema-john-simple-b5-277ae",
  storageBucket: "ema-john-simple-b5-277ae.appspot.com",
  messagingSenderId: "997935136883",
  appId: "1:997935136883:web:0e67ad3d9270429961aa06"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;