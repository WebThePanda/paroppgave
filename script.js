const movies = ['Dune', 'Parasite', 'Spider-Verse', 'Kon-Tiki', 'Barbie'];
const list = document.getElementById('movies-list');
const input = document.getElementById('new-title');

document.getElementById('new-movie').addEventListener('submit', function(event) {
    event.preventDefault();
    const text = input.value.trim();
    if (text === '') return;
    
    const span = document.createElement('span');
    const deleteBtn = document.createElement('button');

    
    span.textContent = text;
    span.classList = "movie-card";

    deleteBtn.textContent = "x";
    deleteBtn.classList = "remove-btn"
    deleteBtn.addEventListener('click', function() {
        span.remove();
    });

    list.appendChild(span);
    span.appendChild(deleteBtn);

    input.value = '';
});

function showMovies() {
    for (i in movies) {
        const span = document.createElement('span');
        const deleteBtn = document.createElement('button');
        
        span.textContent = movies[i];
        span.classList = "movie-card";

        deleteBtn.textContent = "x";
        deleteBtn.classList = "remove-btn"
        deleteBtn.addEventListener('click', function() {
            span.remove();
        })
        
        list.appendChild(span);
        span.appendChild(deleteBtn);


        //list.innerHTML += `<span class="movie-card">${movies[i]}</span>`;
    };
};

showMovies();