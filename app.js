const bodyElement = document.getElementById("bodyEl");
const h1Element = document.getElementById("first-h1");
const h2AElement = document.getElementById("first-h2");
const h2BElement = document.getElementById("second-h2");

function changeToGrey() {
    bodyElement.style.backgroundColor = "#666464";
    h1Element.style.color = "#ffffff";
    h2AElement.style.color = "#ffffff";
    h2BElement.style.color = "#ffffff";
    bodyElement.style.transition = "all 1.5s";
}

function changeToWhite() {
    bodyElement.style.backgroundColor = "#ffffff";
    h1Element.style.color = "#000000";
    h2AElement.style.color = "#000000";
    h2BElement.style.color = "#000000";
    bodyElement.style.transition = "all 1.5s";
}

function changeToBlue() {
    bodyElement.style.backgroundColor = "#235df5";
    h1Element.style.color = "#ffffff";
    h2AElement.style.color = "#ffffff";
    h2BElement.style.color = "#ffffff";
    bodyElement.style.transition = "all 1.5s";
}

function changeToYellow() {
    bodyElement.style.backgroundColor = "#fce711";
    h1Element.style.color = "#000000";
    h2AElement.style.color = "#000000";
    h2BElement.style.color = "#000000";
    bodyElement.style.transition = "all 1.5s";
}