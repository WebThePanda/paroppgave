const movies = [
    'Dune', 
    'Parasite', 
    'Spider-Verse', 
    'Kon-Tiki', 
    'Barbie', 
    'Doctor Strange in the Multiverse of Madness'
];
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
        const index = movies.indexOf(text)
        span.remove();
        console.log(text)
        console.log(index)
        if (index > -1) {
            movies.splice(index, 1)
        }
        updateCounter();
    });

    list.appendChild(span);
    span.appendChild(deleteBtn);

    movies.push(text);
    console.log(movies);

    input.value = '';
    updateCounter();
});

function showMovies() {
    for (i in movies) {
        const span = document.createElement('span');
        const deleteBtn = document.createElement('button');
        const j = movies[i]
        
        span.textContent = movies[i];
        span.classList = "movie-card";

        deleteBtn.textContent = "x";
        deleteBtn.addEventListener('click', function() {
            const index = movies.indexOf(j)
            span.remove();
            console.log(j)
            console.log(index)
            if (index > -1) {
                movies.splice(index, 1)
            }
            updateCounter();
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