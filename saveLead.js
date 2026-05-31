import {
db
} from "./firebase.js";

import {
collection,
addDoc
} from
"https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

async function saveLead(data){

await addDoc(
collection(db,"leads"),
data
);

}
