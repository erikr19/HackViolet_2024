import React, { useEffect, useState } from 'react';
import axios from 'axios';

import SideMenu from './components/SideMenu/SideMenu';
import MovieCard from './components/MovieCard/MovieCard';


function App() {


  const [movieList, setMovieList] = useState([]);
  const [likedList, setLikedList] = useState([]);
  const [dislikedList, setDislikedList] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState();
  const [selectedStreamingServices, setSelectedStreamingServices] = useState();

  useEffect(() => {
    axios.get('http://localhost:8000/api/searchUnfiltered')
      .then(response => {
        setMovieList(response.data.results)
  
      })
  }, [])
  
  

  // Stuff to test that the frontend and backend are connecting
  // const [message, setMessage] = useState('');
  // useEffect(() => {
  //   axios.get('http://localhost:8000/api/test')
  //     .then(response => {
  //       setMessage(response.data.message);
  //     })
  //     .catch(error => {
  //       console.error('Error:', error);
  //       setMessage('Error connecting to Flask backend.');
  //     });
  // }, []);

  return (
    <div style={{ display: 'flex' }}>
      <SideMenu 
        selectedGenres={selectedGenres}
        setSelectedGenres={setSelectedGenres}
        selectedStreamingServices={selectedStreamingServices}
        setSelectedStreamingServices={setSelectedStreamingServices}
        likedList={likedList}
        setLikedList={setLikedList}
        dislikedList={dislikedList}
        setDislikedList={setDislikedList}
      />
      <MovieCard
        movieList={movieList}
        setMovieList={setMovieList}
        likedList={likedList}
        setLikedList={setLikedList}
        dislikedList={dislikedList}
        setDislikedList={setDislikedList}
      />
    </div>
  );
}

export default App;
