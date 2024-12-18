import React from 'react';

function MovieList() {
    const arrMovieNames = [
        'The Godfather',
        'Pulp Fiction',
        'Inception',
        'The Dark Knight',
        'Forrest Gump',
        'Fight Club',
        'The Matrix',
        'Goodfellas',
        'Se7en',
        'Gladiator'
    ];

    return (
        <div>
            <h1>Movie List</h1>
            <ul>
                {arrMovieNames.map((movie, index) => (
                    <li key={index}>{movie}</li>
                ))}
            </ul>
        </div>
    );
}

export default MovieList;
