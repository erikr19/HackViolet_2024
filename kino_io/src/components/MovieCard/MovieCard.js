import React, { useEffect, useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX, faCheck, faSpinner } from '@fortawesome/free-solid-svg-icons';
import AspectRatio from '@mui/joy/AspectRatio';

const movieCardStyle = {
    width: '100%',
    maxWidth: '70%',
    padding: '0%',
    border: '1px solid #000',
    marginBottom: '10px',
};

const imageBoxStyle = {
    backgroundColor: '#2f3136',
    border: '1px solid #000',
};

const descriptionBoxStyle = {
    flex: '1',
    border: '1px solid #000',
    padding: '10px',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#3e3e42',
};

const titleBoxStyle = {
    backgroundColor: '#4a4a4d',
    padding: '10px',
    color: '#fff',
    textAlign: 'center',
    borderBottom: '1px solid #000',
};

function MovieCard({
    movieList,
    setMovieList,
    likedList,
    setLikedList,
    dislikedList,
    setDislikedList
}) {
    const [displayMovieList, setDisplayMovieList] = useState([]);
    const [currMovie, setCurrMovie] = useState(0);

    useEffect(() => {
        if (movieList.length !== 0)
            setDisplayMovieList(movieList.filter((movie) => !likedList.includes(movie) && !dislikedList.includes(movie)));
    }, [movieList, likedList, dislikedList]);

    useEffect(() => {
        if (displayMovieList != null && displayMovieList.length !== 0)
            setCurrMovie(displayMovieList[0]);
    }, [displayMovieList]);

    const handleLiking = () => {
        setLikedList([...likedList, currMovie]);
        setDisplayMovieList(oldValues => oldValues.filter((_, i) => i !== 0));
    };

    const handleDisliking = () => {
        setDislikedList([...dislikedList, currMovie]);
        setDisplayMovieList(oldValues => oldValues.filter((_, i) => i !== 0));
    };

    return (
        <div style={movieCardStyle}>
            <Box sx={{ display: 'flex', flexDirection: 'column', border: '1px solid #ccc', borderRadius: '5px', height: '100%' }}>
                {currMovie != null && (
                    <Box style={titleBoxStyle}>
                        <Typography variant="h5" component="h2">
                            {currMovie.title}
                        </Typography>
                    </Box>
                )}
                {currMovie != null && (
                    <AspectRatio objectFit="contain">
                        <div style={{ ...imageBoxStyle, flex: '1' }}>
                            <img
                                src={"https://image.tmdb.org/t/p/original" + currMovie.poster_path}
                                alt={currMovie.title}
                            />
                        </div>
                    </AspectRatio>
                )}
                {currMovie == null && (
                    <FontAwesomeIcon icon={faSpinner} spinPulse />
                )}
                {currMovie !== null && (
                    <Box style={descriptionBoxStyle}>
                        {currMovie.overview}
                        <Box sx={{ display: 'flex', width: '100%', justifyContent: 'space-around', marginTop: 'auto' }}>
                            <Button
                                variant="contained"
                                color="error"
                                onClick={handleDisliking}
                                sx={{
                                    padding: '10px 20px',
                                    fontSize: '1rem',
                                    borderRadius: '20px',
                                    minWidth: '120px',
                                    '& .MuiButton-startIcon': {
                                        margin: 0,
                                    },
                                }}
                                startIcon={<FontAwesomeIcon icon={faX} size="lg" />}
                            >
                            </Button>
                            <Button
                                variant="contained"
                                color="success"
                                onClick={handleLiking}
                                sx={{
                                    padding: '10px 20px',
                                    fontSize: '1rem',
                                    borderRadius: '20px',
                                    minWidth: '120px',
                                    '& .MuiButton-startIcon': {
                                        margin: 0,
                                    },
                                }}
                                startIcon={<FontAwesomeIcon icon={faCheck} size="lg" />}
                            >
                            </Button>
                        </Box>
                    </Box>
                )}
            </Box>
        </div>
    );
}

export default MovieCard;
