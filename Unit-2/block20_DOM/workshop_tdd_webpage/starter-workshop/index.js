const users = [
    { name: "John", age: 25, occupation: "gardener" },
    { name: "Lenny", age: 51, occupation: "programmer" },
    { name: "Andrew", age: 43, occupation: "teacher" },
    { name: "Peter", age: 81, occupation: "teacher" },
    { name: "Anna", age: 43, occupation: "teacher" },
    { name: "Albert", age: 76, occupation: "programmer" },
    { name: "Adam", age: 47, occupation: "teacher" },
    { name: "Robert", age: 72, occupation: "driver" },
];

function main() {
    //grab the div with the id of "root"
    const root = document.getElementById("root");

    //create a new h1 element that says "USERS"
    const h1 = document.createElement("h1");
    h1.innerHTML = "USERS";

    //append the h1 element to the root div
    root.appendChild(h1);

    //create a new ul element
    const ul = document.createElement("ul");

    //loop through the users array
    for (let i = 0; i < users.length; i++) {
        //create a new li element
        const li = document.createElement("li");

        //set the innerHTML of the li element to the name of the user
        li.innerHTML = users[i].name;

        //append the li element to the ul element
        ul.appendChild(li);
    }

    //append the ul element to the root div
    root.appendChild(ul);
}

//call the main function
main();