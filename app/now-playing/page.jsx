'use client'

import { useEffect, useState } from "react";
import { BASE_URL } from "../constants";
import MovieGrid from "../components/MovieGrid";
import Modal from "../components/Modal";

export default function NowPlaying(){
    const [movies, setMovies] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null)

    useEffect(() => {
        fetch(`${BASE_URL}/movie/now_playing?api_key=${process.env.NEXT_PUBLIC_API_KEY}`)
            .then((response) => response.json())
            .then((data) => setMovies(data.results))
            .catch((error) => console.error('Error fetching movies in NowPlaying: ', error))
    }, [])

    function handleCloseModal(){
        setSelectedMovie(null)
    }

    function handleMovieClick(movie){
        setSelectedMovie(movie)
    }

    return (
        <div className="bg-gray-900 text-white min-h-screen">
            <main className="flex flex-col items-center justify-center min-h-screen py-2">
                <h1 className="text-6xl font-bold m-3">Now Playing</h1>
                <MovieGrid movies={movies} handleMovieClick={handleMovieClick} />
                {selectedMovie && <Modal movie={selectedMovie} onClose={handleCloseModal} />}
            </main>
        </div>
    )

}