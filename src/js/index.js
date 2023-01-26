const trailerButton = document.querySelector(".trailer-button");
const modal = document.querySelector(".modal");
const closeButton = document.querySelector(".close-video");
const video = document.getElementById("video");
const videoSrc = video.getAttribute("src");

function toggleModal() {
    modal.classList.toggle("shown");
}

trailerButton.addEventListener("click", () => {
    video.setAttribute("src", videoSrc);
    toggleModal();
});

closeButton.addEventListener("click", () => {
    toggleModal();
    video.setAttribute("src", "");
});
