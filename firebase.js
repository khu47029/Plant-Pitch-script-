import { initializeApp } from 
"https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
getAuth,
GoogleAuthProvider,
signInWithPopup,
signOut
} from 
"https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import {
getFirestore
} from
"https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {

apiKey: "YOUR_KEY",
authDomain: "YOUR_DOMAIN",
projectId: "YOUR_ID",
storageBucket: "YOUR_BUCKET",
messagingSenderId: "YOUR_MSG_ID",
appId: "YOUR_APP_ID"

};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const provider = new GoogleAuthProvider();

export const db = getFirestore(app);
