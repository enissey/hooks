import React, { useState } from "react"
import './App.css';
import AddMovie from "./Components/AddMovie/AddMovie";
import Header from "./Components/Header/Header";
import MoviesList from "./Components/MoviesList";
import Cover from "./Components/Cover/Cover";
import { Route, Routes } from 'react-router-dom'
import { moviesData } from "./moviesData"
import Trailer from "./Components/Trailer";

function App() {
  const [movies, setMovies] = useState(moviesData)
  const [searchTitle, setSearchTitle] = useState("")
  const [searchRate, setSearchRate] = useState(0)

  const addNewMovie = (x) => {
    setMovies([...movies, x])
  }


  return (
    <div className="App">
  <Routes>
    <Route path="/" element={<div>

      <Header setSearchTitle={setSearchTitle} setSearchRate={setSearchRate} searchRate={searchRate} />
      <Cover />
      <MoviesList movies={movies.filter(el => el.name.toLocaleLowerCase().includes(searchTitle.toLocaleLowerCase().trim()) && el.rating >= searchRate)} />
      <AddMovie addNewMovie={addNewMovie} />
    </div>} />

    <Route path="/Trailer/:name" element={<Trailer movies={movies} />} />
  </Routes>
    </div>
  );
}

export default App;
