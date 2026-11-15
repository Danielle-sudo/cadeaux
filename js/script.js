const bouton = document.getElementById("btnDecouvrir");
const message = document.getElementById("message");
bouton.addEventListener("click", function(){
    message.scrollIntoView({behavior: "smooth"});
});
const photos = document.querySelectorAll(".souvenir-img");
const modalImage = document.getElementById("modalImage");
const modalCaption = document.getElementById("modalCaption");
const photoModal = new bootstrap.Modal(
    document.getElementById("photoModal")
);
photos.forEach(function(photo){
    photo.addEventListener("click", function(){
        modalImage.src = photo.src;
        modalCaption.textContent = photo.parentElement.querySelectorAll("p").textContent;
        photoModal.show();
    });
});
const btnSurprise = document.getElementById("btnSurprise");
const messageSurprise = document.getElementById("messageSurprise")
btnSurprise.addEventListener("click", function(){
    messageSurprise.hidden = false;
    messageSurprise.scrollIntoView({
        behavior:"smooth",
        block:"center"
    });
    for(let i = 0; i < 80; i++){
        const confetti = document.createElement("span");
    confetti.className = "confetti";
    confetti.textContent  = ["🎉","✨","💖","✨","🎊","💖","✨","💖"][Math.floor(Math.random()*4)];
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.animationDelay = Math.random() * 2 + "s";
    document.body.appendChild(confetti);
    setTimeout(function(){
        confetti.remove();
    }, 5000);
    }
    btnSurprise.disabled = true;
    btnSurprise.textContent = "surprise decouverte 💖";
});