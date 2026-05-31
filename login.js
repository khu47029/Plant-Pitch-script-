import {
auth,
provider
} from "./firebase.js";

import {
signInWithPopup
} from 
"https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const loginBtn =
document.getElementById("loginBtn");

loginBtn.onclick = async () => {

try{

const result =
await signInWithPopup(auth, provider);

const user = result.user;

alert("Welcome " + user.displayName);

}
catch(err){

console.log(err);

}

};
