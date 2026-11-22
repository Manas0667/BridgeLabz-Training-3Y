const gallery = document.getElementById("gallery");
const modal = document.getElementById("modal");
const modalContent = document.getElementById("modalContent");
const modalImage = document.getElementById("modalImage");

gallery.addEventListener("click", event => {
    if (event.target.tagName === "IMG") {
        modalImage.src = event.target.src.replace("/300/200", "/1000/700");
        modal.style.display = "flex";
    }
});

modal.addEventListener("click", () => {
    modal.style.display = "none";
});

modalContent.addEventListener("click", event => {
    event.stopPropagation();
});