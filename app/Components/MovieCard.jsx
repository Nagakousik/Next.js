"use client";
import { useState } from "react";

export default function MovieCard() {
  const [movies, setMovies] = useState([
    { id: 1, name: "Pushpa-2", rating: 0 },
    { id: 2, name: "Animal", rating: 0 },
    { id: 3, name: "Dhurandhar", rating: 0 },
    { id: 4, name: "Rockstar", rating: 0 },
  ]);

  function updateRating(id, newRating) {
    setMovies((prev) =>
      prev.map((movie) =>
        movie.id === id ? { ...movie, rating: newRating } : movie
      )
    );
  }

  function Rating({ rating, onChange }) {
    return (
      <div className="rating">
        <button onClick={() => rating > 0 && onChange(rating - 1)}>-</button>
        <span>⭐ {rating}</span>
        <button onClick={() => rating < 5 && onChange(rating + 1)}>+</button>
      </div>
    );
  }

  return (
    <>
      <style>{`
        body {
          margin: 0;
          font-family: Arial, sans-serif;
          background: #f1f5f9;
        }

        .container {
          max-width: 900px;
          margin: auto;
          padding: 20px;
        }

        h1 {
          text-align: center;
          margin-bottom: 20px;
        }

        h2 {
          margin-top: 30px;
          color: #1e293b;
        }

        .list {
          display: grid;
          gap: 15px;
        }

        .card {
          background: white;
          padding: 15px;
          border-radius: 10px;
          box-shadow: 0 5px 15px rgba(0,0,0,0.05);
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .rating {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .rating button {
          padding: 5px 10px;
          border: none;
          border-radius: 6px;
          background: #2563eb;
          color: white;
          cursor: pointer;
        }

        .rating button:hover {
          background: #1d4ed8;
        }

        .rated {
          color: #16a34a;
          font-weight: bold;
        }
      `}</style>

      <div className="container">
        <h1>🎬 Movies</h1>

        {/* All Movies */}
        <h2>🎬 All Movies</h2>
        <div className="list">
          {movies
            .filter((m) => m.rating === 0)
            .map((movie) => (
              <div className="card" key={movie.id}>
                <p>{movie.name}</p>
                <Rating
                  rating={movie.rating}
                  onChange={(r) => updateRating(movie.id, r)}
                />
              </div>
            ))}
        </div>

        {/* Rated Movies */}
        <h2>⭐ Rated Movies</h2>
        <div className="list">
          {movies
            .filter((m) => m.rating > 0)
            .map((movie) => (
              <div className="card" key={movie.id}>
                <p className="rated">
                  {movie.name} - {movie.rating} ⭐
                </p>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}