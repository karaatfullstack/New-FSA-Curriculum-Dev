function main() {
    //grab the div with the id of "root"
    const root = document.getElementById("root");

    //create a new h1 element that says "USERS"
    const h1 = document.createElement("h1");
    h1.innerHTML = "USERS";

    //append the h1 element to the root div
    root.appendChild(h1);

    //fetch request to the url "https://jsonplaceholder.typicode.com/users"
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(data => {
            console.log(data);
            //loop through the data
            data.forEach(user => {
                //create a new p element for each user
                const p = document.createElement("p");
                //append the user's name to the p element
                p.innerHTML = user.name;
                //append the p element to the root div
                root.appendChild(p);
            });
        });
}

//call the main function
main();

// export the main function
// module.exports = { main };