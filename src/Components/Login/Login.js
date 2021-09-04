import React, { useContext } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import Modal from 'react-modal';
import { Container, Row, Col } from 'react-bootstrap';
import google from '../../img/google.svg';
import './Login.css';
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

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
};
  
Modal.setAppElement('#root');

const Login = ({modalIsOpen, closeModal}) => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const provider = new firebase.auth.GoogleAuthProvider();
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const handleGoogleSignIn = () => {
        //google sign in auth
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                const user = result.user;
                const {displayName, email, photoURL} = user;
                const signedInUser = {
                    isSignedIn: true,
                    email: email,
                    photo: photoURL,
                    success: true,
                    name: (displayName.split(' '))[0]
                };
                setUserToken();
                console.log(signedInUser);
                // console.log(signedInUser);
    
                setLoggedInUser(signedInUser);
                history.replace(from);
                closeModal();
            }).catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
            });
    }

    const setUserToken = () => {
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(function(idToken) {
            localStorage.setItem('token', idToken);
        }).catch(function(error) {
            console.log(error);
        });
    }

    return (
        <>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <button onClick={closeModal} type="button" class="close">
                    <span aria-hidden="true">×</span>
                </button>
                <div className="text-center">
                    <h2 className="text-center reg-25">Login to 
                        <b className="font-bold"> Haatbazar</b>
                    </h2>
                </div>

                <Container className="my-5">
                    <Row>
                        <Col md={12}>
                            <Row>
                                <Col md={12}>
                                    <div className="social-login d-block">
                                        <button onClick={handleGoogleSignIn}>
                                            <img src={google} alt="google"/>
                                            <span className="ml-2">Continue with Google</span> 
                                        </button>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>

            </Modal>
        </>
    );
};

export default Login;