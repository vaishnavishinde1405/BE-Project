// Initialize Firebase with your configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtXuQ7bYgcmCwVmeHuaotJWIqGdcEyn30",
  authDomain: "vitalhealth-f942b.firebaseapp.com",
  projectId: "https://vitalhealth-f942b-default-rtdb.firebaseio.com",
  storageBucket: "vitalhealth-f942b.appspot.com",
  messagingSenderId: "640012521069",
  appId: "1:640012521069:web:5bbe315ad0a1962921f964"
};

firebase.initializeApp(firebaseConfig);

// Get references to the HTML elements
const loginForm = document.getElementById('login-form');

// Add an event listener to the login form
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Sign in with Firebase authentication
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // User signed in successfully
      const user = userCredential.user;
      // Redirect or perform actions after successful login
      // You can add window.location.href = 'dashboard.html'; or any other action.
    })
    .catch((error) => {
      // Handle errors (e.g., display error messages to the user)
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(errorCode, errorMessage);
    });
});
