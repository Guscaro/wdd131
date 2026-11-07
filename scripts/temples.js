const year = document.querySelector("#currentyear");
const today = new Date();
year.textContent = today.getFullYear();
document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;


const hamButton = document.querySelector("#menu");
const nav = document.querySelector("nav");
const title = document.querySelector("header h1")

hamButton.addEventListener("click", () => {
    nav.classList.toggle("open");
    hamButton.classList.toggle("open");
    title.classList.toggle("open")
});












