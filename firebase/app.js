import { auth , createUserWithEmailAndPassword,signInWithEmailAndPassword } from "./firebase.js";

const register = (()=>{

    const email = document.getElementById("email")
    const password = document.getElementById("password")
    console.log(email.value,password.value)
    // const auth = getAuth();
    signInWithEmailAndPassword(auth, email.value, password.value)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        console.log('user',user)
        // ...
      })
      .catch((error) => {
        console.log(error)
      });
})

let registerBtn = document.getElementById("registerbtn")

registerBtn.addEventListener('click', register)

