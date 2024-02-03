import React from 'react';
import { Typography } from '@mui/material';

const filterMenuStyle = {
    flex: 1,
    border: '1px solid #ccc',
    borderRadius: '5px',
    padding: '10px',
};

const genres = ["Action", "Adventure", "Animation", "Comedy", "Crime", 
    "Documentary", "Drama", "Family", "Fantasy", 
    "History", "Horror", "Music", "Mystery", "Romance", 
    "Science Fiction", "TV Movie", "Thriller", "War", 
    "Western"]
  const streaming_services = ["Netflix", "Max", "Hulu", "Sling", "DisneyPlus", 
  "Peacock", "ParamountPlus", "AppleTV", "Philo", "Freevee", "AMC"]

function FilterMenu({
    selectedGenres,
    setSelectedGenres,
    selectedStreamingServices,
    setSelectedStreamingServices,

}) {
    return (
        <div style={filterMenuStyle}>
            <Typography variant="h3" component="h4">
                Filter Menu
            </Typography>
        </div>
    );
}

export default FilterMenu;
