import React, { useEffect, useState } from 'react';
import { Box, Button } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX, faCheck, faSpinner } from '@fortawesome/free-solid-svg-icons';
import Image from 'material-ui-image';
import AspectRatio from '@mui/joy/AspectRatio';




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

    const [displayMovieList, setDisplayMovieList] = useState([]);
    const [currMovie, setCurrMovie] = useState(0);


    useEffect(() => {
        if(movieList.length != 0)
            setDisplayMovieList(movieList.filter((movie) => !likedList.find(temp => temp.id === movie.id) && !dislikedList.find(temp => temp.id === movie.id)))
    }, [movieList])

    useEffect(() => {
        if(displayMovieList != null && displayMovieList.length != 0)
            setCurrMovie(displayMovieList[0])
    }, [displayMovieList])

    const handleLiking = () => {
        const likedCopy = likedList.map((movie) => JSON.parse(JSON.stringify(movie)));
        const currCopy = JSON.parse(JSON.stringify(currMovie));
        likedCopy.push(currCopy);
        setLikedList(likedCopy);
        setDisplayMovieList(oldValues => {
            return oldValues.filter((_, i) => i !== 0)
          })
    }

    const handleDisliking = () => {
        const dislikedCopy = dislikedList.map((movie) => JSON.parse(JSON.stringify(movie)));
        const currCopy = JSON.parse(JSON.stringify(currMovie));
        dislikedCopy.push(currCopy);
        setDislikedList(dislikedCopy);
        setDisplayMovieList(oldValues => {
            return oldValues.filter((_, i) => i !== 0)
          })
    }

    return (
        <div style={movieCardStyle}>
            <Box component="div" sx={{ display: 'flex', flexDirection: 'column', border: '1px solid #ccc', borderRadius: '5px', height: '100%' }}>
                {currMovie != null && (
                    <AspectRatio objectFit="contain">
                        <img
                    src={"https://image.tmdb.org/t/p/original" + currMovie.poster_path}
                  />
                    </AspectRatio>
                    
                )}
                {currMovie == null && (
                    <FontAwesomeIcon icon={faSpinner} spinPulse />
                )}
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
