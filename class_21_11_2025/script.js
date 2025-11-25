let heading = document.createElement("h1");
heading.textContent = "";

let greets = ["hi","hello","namaste","namaskar","jai ho ","Jai shree Ram","jai Ram","hello how are you?","to kaise hain aap","aur bhai sahab kya haal chal","aur batao badhiys sab"];

document.body.appendChild(heading);

function greeting(){
    let text = randomgreet();
    heading.innerText = greets[text];


}

function randomgreet(){
    let r = Math.floor(Math.random()*greets.length)

    return r;
}


