import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js'

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword  } from 
'https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js';

// const auth = getAuth();
// createUserWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed up 
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // ..
//   });

const firebaseConfig = {
  apiKey: "AIzaSyBRb12mvZ2F_OGh2-rlsc1Eb8sJSFQxLUQ",
  authDomain: "smit-learn-practice.firebaseapp.com",
  projectId: "smit-learn-practice",
  storageBucket: "smit-learn-practice.appspot.com",
  messagingSenderId: "1038210209275",
  appId: "1:1038210209275:web:d323b6d0ed09cd8bbfe75e"
};

const app = initializeApp(firebaseConfig);


const auth = getAuth(app)

export{
    auth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword 
}