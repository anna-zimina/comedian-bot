const appendJoke = document.getElementById("chat-append-section");
const appendUserMsg = document.getElementById("user-append-section");

function sayHello() {
    const newdivhello = document.createElement("div");
    newdivhello.textContent = "Hello! I am a Comedian Bot, here to make you laugh. To start, press the button below.";
    appendJoke.appendChild(newdivhello);
    document.getElementById("start-button").style.display = "none";
    document.getElementById("request-joke").style.display = "block";
}

async function requestJoke() {
    const url = "https://official-joke-api.appspot.com/random_joke/?type=programming"

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("joke not found");
        }
        const data = await response.json();
        const keys = Object.keys(data);
        const finaljoke = (data[keys[1]] + " " + data[keys[2]]);   

        setTimeout(function startElement() {
            const newdivstart = document.createElement("div");
            newdivstart.innerHTML = "Tell me a joke!";
            newdivstart.style.backgroundColor = "#a9f9c4";
            newdivstart.style.alignSelf = "flex-end";
            appendJoke.appendChild(newdivstart);
        }, 1000)

        setTimeout(function jokeElement() {
            const newdiv = document.createElement("div");
            newdiv.textContent = finaljoke;
            appendJoke.appendChild(newdiv);
        }, 2000)

    } catch (error) {
        appendJoke.textContent = error.message;
    }
}
