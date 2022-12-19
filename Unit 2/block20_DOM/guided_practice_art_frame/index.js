// grab the root div
const root = document.getElementById("root");

// create a new h1 element that says "MONA LISA"
const h1 = document.createElement("h1");
h1.innerHTML = "MONA LISA";

// append the h1 element to the root div
root.appendChild(h1);

// create a new img element
const img = document.createElement("img");

// set the src attribute of the img element to the mona lisa image
img.src = './assets/mona_lisa.jpg';

// append the img element to the root div
root.appendChild(img);

// create a new p element
const p = document.createElement("p");

// set the innerHTML of the p element to the description of the mona lisa
p.innerHTML = "The Mona Lisa is a half-length portrait painting by the Italian Renaissance artist Leonardo da Vinci. It is considered an archetypal masterpiece of the Italian Renaissance, and has been described as the best known, the most visited, the most written about, the most sung about, the most parodied work of art in the world. The painting's novel qualities include the subject's enigmatic expression, the monumentality of the composition, the subtle modelling of forms, and the atmospheric illusionism. It is regarded as Leonardo's masterpiece and the best known work of Renaissance painting. It has been in the Louvre in Paris since 1797, acquired by King Louis XVI of France and early in his reign, and is the world's most visited art object."

// append the p element to the root div
root.appendChild(p);