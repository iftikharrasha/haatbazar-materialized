import firebase from 'firebase/compat/app';
import "firebase/compat/analytics";
import 'firebase/compat/auth';
import firebaseConfig from "./firebase.config";
import {UserContext} from "../../App";

if(firebase.apps.length === 0){
    firebase.initializeApp(firebaseConfig);
}else{
    firebase.app();
}

