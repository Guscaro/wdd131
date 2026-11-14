const year = document.querySelector("#currentyear");

const today = new Date();

year.textContent = today.getFullYear();

document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;



const temperature = 45;
const windSpeed = 10;

function calculateWindChill(temp, speed) {
    return (35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16)).toFixed(1)
}

const windChillElement = document.querySelector("#windChill")
if (temperature <= 50 && windSpeed >3) {
    windChillElement.textContent = `${calculateWindChill(temperature, windSpeed)} °F`
} else {
    windChillElement.textContent = "N/A"
}
