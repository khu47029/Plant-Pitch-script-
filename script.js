const generateBtn = document.getElementById("generateBtn");
const output = document.getElementById("output");

const pitches = [
`
━━━━━━━━━━━━━━━━━━
💎 PREMIUM CLIENT PITCH
━━━━━━━━━━━━━━━━━━

Hello Team 👋

Aaj aapka business dekha —
genuinely laga ki aapke brand me premium growth potential hai.

Aaj kal customers pehle online trust dekhte hain.

Agar aapka:
✔ Website
✔ Instagram branding
✔ Google presence
✔ WhatsApp system

premium ho —
to leads aur appointments dono increase hote hain.

Interested ho to
main aapke business ka FREE premium concept demo bana sakta hoon ✨

━━━━━━━━━━━━━━━━━━
`,
`
🔥 AI GROWTH MESSAGE

Namaste 👋

Aapka business strong hai but online presentation aur bhi premium ban sakta hai.

Main specially local businesses ke liye:

✔ Premium websites
✔ Branding systems
✔ Lead generation
✔ WhatsApp automation
✔ Google optimization

build karta hoon.

Agar interested ho to reply kariye ✨
`
];

generateBtn.addEventListener("click",()=>{

  const businessName =
  document.getElementById("businessName").value;

  const city =
  document.getElementById("city").value;

  const type =
  document.getElementById("businessType").value;

  if(!businessName || !type){

    alert("Please fill required details");

    return;

  }

  output.innerHTML = "⚡ AI Generating Premium Pitch...";

  setTimeout(()=>{

    const randomPitch =
    pitches[Math.floor(Math.random()*pitches.length)];

    const finalPitch =
    randomPitch
    .replaceAll("business",type)
    .replaceAll("Team",businessName);

    typeWriter(finalPitch);

  },1500);

});

function typeWriter(text){

  output.innerHTML = "";

  let i = 0;

  const interval = setInterval(()=>{

    output.innerHTML += text.charAt(i);

    i++;

    if(i >= text.length){
      clearInterval(interval);
    }

  },15);

}

function copyPitch(){

  navigator.clipboard.writeText(output.innerText);

  alert("Pitch Copied");

}

function shareWhatsApp(){

  const text =
  encodeURIComponent(output.innerText);

  window.open(`https://wa.me/?text=${text}`);

}
async function generatePitch() {

const data = {
name: document.getElementById("bizName").value,
city: document.getElementById("bizCity").value,
type: document.getElementById("bizType").value,
platform: "WhatsApp",
source: "Instagram",
package: "Option B",
website: "No Website",
extra: document.getElementById("extraInfo").value,
tone: "Friendly"
};

const prompt = buildPrompt(data);

document.getElementById("output").innerHTML =
"⚡ AI is generating...";

try {

const result = await generateWithOpenAI(prompt);

document.getElementById("output").innerHTML =
`
<pre>${result}</pre>
`;

}
catch(err){

document.getElementById("output").innerHTML =
"❌ Error generating pitch";

console.log(err);

}

}
