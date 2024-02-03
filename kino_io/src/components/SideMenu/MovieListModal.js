import React from 'react';
import { Box } from '@mui/material';


const movieListStyle = {
    height: '15%',
    border: '1px solid #ccc',
    marginBottom: '10px',
};

function MovieListModal() {
    return (
        <div style={movieListStyle}>
            <Box component="div" sx={{ display: 'inline' }}>Movie List</Box>
        </div>
    );
}

export default MovieListModal;
