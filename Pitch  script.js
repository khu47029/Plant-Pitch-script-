const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {

  const updateCounter = () => {

    const target = +counter.getAttribute('data-target');

    const count = +counter.innerText;

    const increment = target / 80;

    if(count < target){
      counter.innerText = Math.ceil(count + increment);
      setTimeout(updateCounter,20);
    }else{
      counter.innerText = target;
    }

  }

  updateCounter();

});

function generatePitch(){

  const business = document.getElementById('businessName').value;
  const city = document.getElementById('city').value;
  const type = document.getElementById('businessType').value;
  const extra = document.getElementById('extraInfo').value;

  const output = document.getElementById('output');

  output.innerHTML = `
Namaste Sir ✨

Aaj maine ${business} ko dekha aur genuinely laga ki is ${type.toLowerCase()} mein premium potential hai. 🔥

Aaj kal customers visit karne se pehle online impression check karte hain.

Agar koi customer ${city} mein aapko search kare aur uske saamne ek luxury-style website open ho:

• Premium branding
• WhatsApp booking
• Modern mobile experience
• Google Maps integration
• Service showcase
• Trust-focused design

Toh customer ka mindset instantly change ho jata hai.

Main Pragati Sahayak se hoon aur businesses ko premium online presence create karne mein help karta hoon.

${extra}

Agar aap chahein toh main aapke business ke naam ka custom homepage preview free mein design karke bhej sakta hoon. 🙌
  `;
}
