console.log('Hello World!');

const message = document.querySelector('#message')

const addBtn = document.querySelector("form");

function addMovie(e) {
    e.preventDefault();
    const inputField = document.querySelector("input");

    const movie = document.createElement("li");

    const movieTitle = document.createElement("span");
    movieTitle.textContent = inputField.value
    movieTitle.addEventListener('click', crossOffMovie);
    movie.appendChild(movieTitle);

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = ('x');
    deleteBtn.addEventListener('click', deleteMovie);
    document.querySelector("ul").appendChild(movie);
    movie.appendChild(deleteBtn);
    
    inputField.value = ''
};

// DELETE BUTTON //

addBtn.addEventListener("submit", addMovie);

function deleteMovie(e) {
    e.preventDefault();
    e.target.parentNode.remove();
}


// ONCE WATCHED //

function crossOffMovie(e) {
    e.preventDefault();
    e.target.classList.toggle('checked');

    if(e.target.classList.contains('checked') === true) {
    alert('Movie has been marked as watched!');
    } else {
    alert('Movie has been added back.');
    }
}
