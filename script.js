const imageContainer = document.querySelector(".img-container")
const prev = document.getElementById("Prev")
const next = document.getElementById("Next")

let x = 0;
prev.addEventListener("click", () => {
    x = x + 45;
    updateGallery();
})

next.addEventListener("click", () => {
    x = x - 45;
    updateGallery();
})

function updateGallery(){
    imageContainer.style.transform = `perspective(1000px) rotateY(${x}deg)` ;

}