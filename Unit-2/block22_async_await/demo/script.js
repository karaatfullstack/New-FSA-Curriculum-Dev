// Get the recipe list container element
const recipeList = document.querySelector('.recipe-list');
const recipeForm = document.querySelector('#recipe-form');

// Make a GET request to the RESTful API endpoint
fetch('http://localhost:8080/api/demo/recipes')
    .then(response => response.json())
    .then(data => {
        // Loop through the recipe items and create the HTML for each item
        data.forEach(recipe => {
            const recipeItem = `
        <div class="recipe-item">
          <img class="recipe-image" src="${recipe.image_url}">
          <div class="recipe-title">${recipe.title}</div>
          <div class="recipe-description">${recipe.description}</div>
          <a href="#" class="recipe-link">View Recipe</a>
        </div>
      `;
            // Add the recipe item to the recipe list container
            recipeList.innerHTML += recipeItem;
        });
    })
    .catch(error => {
        console.error('Error fetching recipes:', error);
    });

recipeForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const titleInput = document.getElementById('title');
    const titleValue = titleInput.value.trim(); // Trim leading and trailing whitespace

    if (!titleValue) {
        console.log('Title field cannot be empty');
        return;
    }

    const formData = new FormData(recipeForm);

    fetch('http://localhost:8080/api/demo/recipes', {
        method: 'POST',
        body: formData
    })
        .then(response => {
            if (response.ok) {
                console.log('Recipe added successfully');
                recipeForm.reset();
            } else {
                console.log('Error adding recipe');
            }
        })
        .catch(error => {
            console.error('Error submitting form:', error);
        });
});
