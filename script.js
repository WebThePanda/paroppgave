const movies = ['Dune', 'Parasite', 'Spider-Verse', 'Kon-Tiki', 'Barbie', 'Doctor Strange in the Multiverse of Madness'];
const list = document.getElementById('movies-list');
const input = document.getElementById('new-title');
const counter = document.getElementById('counter');
const randomMovie = document.getElementById('chosen-movie')

document.getElementById('new-movie').addEventListener('submit', function(event) {
    event.preventDefault();
    const text = input.value.trim();
    if (text === '') return;
    
    const span = document.createElement('span');
    const deleteBtn = document.createElement('button');

    
    span.textContent = text;
    span.classList = "movie-card";

    deleteBtn.textContent = "x";
    deleteBtn.addEventListener('click', function() {
        span.remove();
    });

    list.appendChild(span);
    span.appendChild(deleteBtn);

    movies.push(text);
    console.log(movies)

    input.value = '';
    updateCounter()
});

function showMovies() {
    for (i in movies) {
        const span = document.createElement('span');
        const deleteBtn = document.createElement('button');
        
        span.textContent = movies[i];
        span.classList = "movie-card";

        deleteBtn.textContent = "x";
        deleteBtn.addEventListener('click', function() {
            span.remove();
        })
        
        list.appendChild(span);
        span.appendChild(deleteBtn);
        updateCounter()

        //list.innerHTML += `<span class="movie-card">${movies[i]}</span>`;
    };
};

document.getElementById('pick-random').addEventListener('click', function() {
    let rm = Math.floor(Math.random() * movies.length);
    const span = document.createElement('span');

    randomMovie.textContent = movies[rm];
    console.log(movies[rm]);
    
});

function updateCounter() {
    var total = document.querySelectorAll('#movies-list span').length;
    counter.textContent = "Du har " + total + " filmer i listen."
}

showMovies();