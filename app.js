let btnElement = document.querySelector(".nav_btn");
let hElement = document.querySelector(".left_h2");
let pElement = document.querySelector(".left_p1");
let logo = document.querySelector(".logo");
let link = document.querySelector(".nav_link")

let onef = true;

function changeon() {
    onef = !onef;

    if(onef) {
        btnElement.textContent = "Night";
        hElement.style.color = "black";
        pElement.style.color = "black";
        logo.style.color = "black";
        btnElement.style.background = "black";
        btnElement.style.color = "white";
        document.body.style.background = "white";
    } else {
        btnElement.textContent = "Day";
        hElement.style.color = "white";
        pElement.style.color = "white";
        logo.style.color = "white";
        btnElement.style.background = "white";
        btnElement.style.color = "black";
        document.body.style.background = "black";
    }
}