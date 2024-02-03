import React, { useState } from 'react';
import { Box, Button } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX, faCheck } from '@fortawesome/free-solid-svg-icons';




const movieCardStyle = {
    width: '100%',
    maxWidth: '70%',
    padding: '5%',
    border: '1px solid #ccc',
    marginBottom: '10px',
};

const boxStyle = {
    flex: '1',
    border: '1px solid #ccc',
    borderRadius: '5px',
    padding: '10px',
    display: 'flex',
    flexDirection: 'column',
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
                    <Box sx={{ display: 'flex', width: '100%', justifyContent: 'space-around', marginTop: 'auto' }}>
                        <Button variant="outlined" color="error" onClick={handleDisliking} >
                            <FontAwesomeIcon icon={faX} />
                        </Button>
                        <Button variant="outlined" color="success" onClick={handleLiking} >
                            <FontAwesomeIcon icon={faCheck} />
                        </Button>
                    </Box>
                </Box>
            </Box>
        </div>
    );
}

export default MovieCard;