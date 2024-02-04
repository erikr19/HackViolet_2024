import React, { useEffect, useState } from 'react';
import axios from 'axios';

import SideMenu from './components/SideMenu/SideMenu';
import MovieCard from './components/MovieCard/MovieCard';


function App() {


  const [movieList, setMovieList] = useState([]);
  const [likedList, setLikedList] = useState([]);
  const [dislikedList, setDislikedList] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [selectedStreamingServices, setSelectedStreamingServices] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("");

  useEffect(() => {
    axios.get('http://localhost:8000/api/searchUnfiltered')
      .then(response => {
        setMovieList(response.data.results)
  
      })
  }, [])

  const handleClearFilters = () => {
    setSelectedCountry("");
    setSelectedGenres([]);
    setSelectedLanguage("");
    setSelectedStreamingServices([]);
    axios.get('http://localhost:8000/api/searchUnfiltered')
      .then(response => {
        setMovieList(response.data.results)
    })
  }

  const handleApplyFilters = () => {
    let genres = [
      
        { "id": 28, "name": "Action" },
        { "id": 12, "name": "Adventure" },
        { "id": 16, "name": "Animation" },
        { "id": 35, "name": "Comedy" },
        { "id": 80, "name": "Crime" },
        { "id": 99, "name": "Documentary" },
        { "id": 18, "name": "Drama" },
        { "id": 10751, "name": "Family" },
        { "id": 14, "name": "Fantasy" },
        { "id": 36, "name": "History" },
        { "id": 27, "name": "Horror" },
        { "id": 10402, "name": "Music" },
        { "id": 9648, "name": "Mystery" },
        { "id": 10749, "name": "Romance" },
        { "id": 878, "name": "Science Fiction" },
        { "id": 10770, "name": "TV Movie" },
        { "id": 53, "name": "Thriller" },
        { "id": 10752, "name": "War" },
        { "id": 37, "name": "Western" }
      
    ]
    let languages = [
      {"id": "en", "language" : "English"},
      {"id": "fr", "language" : "French"},
      {"id": "de", "language" : "German"},
      {"id": "nl", "language" : "Dutch"},
      {"id": "pt", "language" : "Portuguese"},
      {"id": "cs", "language" : "Czech"},
      {"id": "es", "language" : "Spanish"},
      {"id": "it", "language" : "Italian"},
      {"id": "hi", "language" : "Hindi"},
      {"id": "ja", "language" : "Japanese"},
      {"id": "sv", "language" : "Swedish"},
      {"id": "no", "language" : "Norwegian"},
      {"id": "ru", "language" : "Russian"},
      {"id": "zu", "language" : "Zulu"},
      {"id": "af", "language" : "Afrikaans"},
      {"id": "ko", "language" : "Korean"},
      {"id": "zh", "language" : "Mandarin"},
      {"id": "ml", "language" : "Malay"},
      {"id": "ta", "language" : "Tamil"},
      {"id": "th", "language" : "Thai"},
      {"id": "ga", "language" : "Irish"},
      {"id": "fi", "language" : "Finnish"}
    ]
    let currUrl="https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc";
    if(selectedLanguage !== "") {
        currUrl=currUrl + "&with_original_language=" + languages.find(temp => temp.language === selectedLanguage).id;
    }
    if(selectedGenres.length === 1) {
        const genre = genres.find(genre => genre.name === selectedGenres[0])
        currUrl=currUrl + "&with_genres=" + genre.id;
    }
    else if(selectedGenres.length > 1) {
        currUrl=currUrl + "&with_genres=" + selectedGenres[0];
        selectedGenres.map((genre, i) => {
            if(i != 0) {
                const tempGenre = genres.find(temp => temp.name === genre)
                currUrl=currUrl + "%7C" + tempGenre.id;
            }
        })
    }
    if(selectedStreamingServices.length === 1) {
        currUrl=currUrl + "&with_watch_providers=" + selectedStreamingServices[0];
    }
    else if(selectedStreamingServices.length > 1) {
        currUrl=currUrl + "&with_watch_providers=" + selectedStreamingServices[0];
        selectedStreamingServices.map((service, i) => {
            if(i != 0) {
                currUrl=currUrl + "%7C" + service;
            }
        })
    }
    if(selectedCountry !== "") {
        currUrl=currUrl + "&with_origin_country=" + selectedCountry;
    }

    axios.post('http://localhost:8000/api/searchFiltered',{currUrl})
      .then(response => {
        setMovieList(response.data.results)
        console.log(response.data.results)
      })
    
}
  
  

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
        selectedCountry={selectedCountry}
        setSelectedCountry={setSelectedCountry}
        selectedLanguage={selectedLanguage}
        setSelectedLanguage={setSelectedLanguage}
        handleApplyFilters={handleApplyFilters}
        handleClearFilters={handleClearFilters}
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
