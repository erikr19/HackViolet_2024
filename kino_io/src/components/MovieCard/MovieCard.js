import React, { useState } from 'react';
import { Box } from '@mui/material';

const movieCardStyle = {
    width: '100%', // Set the width to 100% to ensure a fixed size within the parent container
    maxWidth: '70%', // Limit the maximum width to 70% of the available space
    padding: '5%', // Add 5% padding on all sides
    border: '1px solid #ccc',
    marginBottom: '10px',
};

const boxStyle = {
    flex: '1', // This ensures each box takes up equal space
    border: '1px solid #ccc',
    borderRadius: '5px',
    padding: '10px',
    display: 'flex', // Added to ensure content inside is flex
    flexDirection: 'column', // Adjust content direction
};

function MovieCard({
    movieList,
    setMovieList,
    likedList,
    setLikedList,
    dislikedList,
    setDislikedList
}) {

    const handleLiking = (currMovie) => {
        setLikedList(...likedList, currMovie)
    }

    const handleDisliking = (currMovie) => {
        setDislikedList(...dislikedList, currMovie)
    }

    return (
        <div style={movieCardStyle}>
            <Box component="div" sx={{ display: 'flex', flexDirection: 'column', border: '1px solid #ccc', borderRadius: '5px', height: '100%' }}>
                <Box style={boxStyle}>
                    Image Box
                </Box>
                <Box style={boxStyle}>
                    Description Box
                    {/* get currMovie description and display */}
                    {/* two buttons, one to like and one to dislike */}
                </Box>
            </Box>
        </div>
    );
}

export default MovieCard;
