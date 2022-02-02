import {initializeApp} from 'firebase/app'
import {PhoneAuthProvider} from 'firebase/auth'
// import {firebase} from 'firebase'
// import AuthUI from 'firebaseui';

// var firebase = require('firebase');
var firebaseui = require('firebaseui');

import React, { Component } from 'react';
// import 'https://www.gstatic.com/firebasejs/ui/6.0.0/firebase-ui-auth.css'
import config from './firebaseConfig'



class App extends Component {
  componentDidMount() {
    const fbase = initializeApp(config);
    const uiConfig = { callbacks: {
        signInSuccessWithAuthResult: function(authResult, redirectUrl) {
          // User successfully signed in.
          // Return type determines whether we continue the redirect automatically
          // or whether we leave that to developer to handle.
          return true;
        },
        uiShown: function() {
          // The widget is rendered.
          // Hide the loader.
          document.getElementById('loader').style.display = 'none';
        }
      },
      // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
      signInFlow: 'popup',
      signInSuccessUrl: 'https://www.google.com',
      signInOptions: [
  
        // Leave the lines as is for the providers you want to offer your users.

        PhoneAuthProvider.PROVIDER_ID
      ],
      defaultCountry: 'IN',
      defaultNationalNumer: '7674079300',
    };
    var ui = new firebaseui.auth.AuthUI(firebase.auth());
    ui.start("#firebaseui-auth-container", uiConfig);
  }
  render() {
    return (
      <>
      <h1>REACT PHONE AUTHENTICATION</h1>
      <div id="firebaseui-auth-container"></div>
      </>
    )
  }
}

export default App




