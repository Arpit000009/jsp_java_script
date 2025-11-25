let heading = document.createElement("h1");
heading.textContent = "RAINBOW";

const letters = heading.textContent.split("");

heading.textContent = "";

let colours = ["voilet","indigo","blue","Green","Yellow","Orange","Red"];
let i = 0;

letters.forEach(element => {
    let span = document.createElement("span");

    span.textContent = element;

    span.style.color = colours[i];
    i++;

    heading.appendChild(span);
});

document.body.appendChild(heading);
