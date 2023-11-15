'use client'

export default function Modal({movie, onClose}){
    if (!movie) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4">
            <div className="bg-white p-4 rounded-lg max-w-xl w-full">
                <h2 className="text-2xl font-bold mb-2 text-gray-800">{movie.title}</h2>
                <p className="text-gray-600">{movie.overview}</p>
                <div className="mt-4">
                    <p className="text-gray-600"><strong>Release Date:</strong> {movie.release_date}</p>
                    <p className="text-gray-600"><strong>Rating:</strong> {movie.vote_average}/10</p>
                    <p className="text-gray-600"><strong>Vote Count:</strong> {movie.vote_count}</p>
                </div>
                <button onClick={onClose} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Close</button>
            </div>
      </div>
    )
}