import firebase from 'firebase/compat/app';
import "firebase/compat/analytics";
import 'firebase/compat/auth';
import firebaseConfig from "./firebase.config";
import jwt_decode from "jwt-decode";

export const initializeLoginFramework = () => { 
    if(firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig);
    }else{
        firebase.app();
    }
}

export const handleGoogleSignIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    //google sign in auth
    return firebase.auth()
        .signInWithPopup(provider)
        .then(result => handleResponse(result))
}

const handleResponse = (result) => {
        const user = result.user;
        const {displayName, email, photoURL} = user;
        const signedInUser = {
            isSignedIn: true,
            email: email,
            photo: photoURL || "https://i.ibb.co/7CzR0Dg/users.jpg",
            success: true,
            name: (displayName.split(' '))[0]
        }
        return signedInUser;
}

export const setUserToken = () => {
    firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(function(idToken) {
        localStorage.setItem('token', idToken);
    }).catch(function(error) {
        console.log(error);
    });
}

export const getDecodedUser = () => {
    const token = localStorage.getItem('token');
    if (!token) {
        return {
            isSignedIn: false,
            email: '',
            name: '',
            photo: '',
            success: false,
            error: ''
        };
    }
    const {name, email, picture} = jwt_decode(token);
    const decodedUser = {
        isSignedIn: true,
        email: email,
        photo: picture,
        success: true,
        name: (name.split(' '))[0]
    }
    return decodedUser;
}


export const handleSignOut = () => {
    return firebase.auth().signOut()
    .then(() => {
      localStorage.removeItem('token');
      const signedOutUser = {
        isSignedIn: false,
        name: '',
        email: '',
        photo: '',
        success: false,
        error: ''
      }
      return signedOutUser;
    })
    .catch(error => console.log(error.message))
}