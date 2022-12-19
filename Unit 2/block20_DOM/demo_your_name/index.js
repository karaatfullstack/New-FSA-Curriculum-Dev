const NAME = "your name";

function main() {
    // get the div with the id of "root"
    const root = document.getElementById("root");

    //create a new h1 element that says "YOUR NAME"
    const h1 = document.createElement("h1");
    h1.innerHTML = NAME;

    //append the h1 element to the root div
    root.appendChild(h1);
}

//call the main function
main();