const year = document.querySelector("#currentyear");
const today = new Date();
year.textContent = today.getFullYear();
document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;


const hamButton = document.querySelector("#menu");
const nav = document.querySelector("nav");
const title = document.querySelector("header h1");

hamButton.addEventListener("click", () => {
    nav.classList.toggle("open");
    hamButton.classList.toggle("open");
    title.classList.toggle("open");
});




const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },

    {
        templeName: "Cochabamba Bolivia",
        location: "Cochabamba, Bolivia",
        dedicated: "2000, April, 30",
        area: 35500,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/cochabamba-bolivia-temple/cochabamba-bolivia-temple-13685-thumb.jpg"
    },
    {
        templeName: "Panama City Panama",
        location: "Provinca de Panama, Panama",
        dedicated: "2008, August, 10",
        area: 18943,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/panama-city-panama-temple/panama-city-panama-temple-4872-thumb.jpg"
    },
    {
        templeName: "Logan Utah",
        location: "Logan, Utah, United States",
        dedicated: "1884, May, 17-18",
        area: 119619,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/logan-utah-temple/logan-utah-temple-64061-thumb.jpg"
    },

];




createTempleCard(temples);

const pageTitle = document.querySelector("h2");
const oldtempleLink = document.querySelector("#oldtemple");
oldtempleLink.addEventListener("click", () => {
    createTempleCard(temples.filter(temple => temple.dedicated.split(",")[0] < 1900));
    pageTitle.textContent = "Old";
});



const newtempleLink = document.querySelector("#newtemple");
newtempleLink.addEventListener("click", () => {
    createTempleCard(temples.filter(temple => temple.dedicated.split(",")[0] > 2000));
    pageTitle.textContent = "New";
});

const largetempleLink = document.querySelector("#largetemple");
largetempleLink.addEventListener("click", () => {
    createTempleCard(temples.filter(temple => temple.area > 90000));
    pageTitle.textContent = "Large";
});

const smalltempleLink = document.querySelector("#smalltemple");
smalltempleLink.addEventListener("click", () => {
    createTempleCard(temples.filter(temple => temple.area < 10000));
    pageTitle.textContent = "Small";
});

const hometempleLink = document.querySelector("#hometemple");
hometempleLink.addEventListener("click", () => {
    createTempleCard(temples);
    pageTitle.textContent = "Home";
});



function createTempleCard(filteredTemples) {
    document.querySelector(".res-grid").innerHTML = "";
    filteredTemples.forEach(temple => {
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let location = document.createElement("p");
        let dedication = document.createElement("p");
        let area = document.createElement("p");
        let img = document.createElement("img");

        name.textContent = temple.templeName;
        location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
        dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
        area.innerHTML = `<span class="label">Size:</span> ${temple.area} sq ft`;
        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", `${temple.templeName} Temple`);
        img.setAttribute("loading", "lazy");

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedication);
        card.appendChild(area);
        card.appendChild(img);

        document.querySelector(".res-grid").appendChild(card);

    });
}






