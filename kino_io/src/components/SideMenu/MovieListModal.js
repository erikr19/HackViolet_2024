import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    maxHeight: '80vh',
    overflowY: 'auto',
    bgcolor: '#333',
    color: 'white',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    '&::-webkit-scrollbar': {
        width: '8px',
    },
    '&::-webkit-scrollbar-thumb': {
        background: '#555',
        borderRadius: '4px',
    },
};

const tabStyle = {
    backgroundColor: '#222',
    color: 'white',
};

const selectedTabStyle = {
    backgroundColor: 'white',
    color: 'black',
};

const movieEntryStyle = {
    marginBottom: '20px',
    borderBottom: '1px solid #ccc',
    paddingBottom: '20px',
};

const movieTitleStyle = {
    fontSize: '18px',
    fontWeight: 'bold',
};

const buttonStyle = {
    color: 'white',
    backgroundColor: '#333',
    '&:hover': {
        backgroundColor: '#555',
    },
};

export default function MovieListModal({
    likedMovies,
    dislikedMovies,
    open,
    onClose,
    setLikedList,
    setDislikedList,
}) {
    const [selectedTab, setSelectedTab] = useState(0);

    const handleTabChange = (event, newValue) => {
        setSelectedTab(newValue);
    };

    const moveMovie = (movie, sourceList, targetList) => {
        const updatedSourceList = sourceList.filter((item) => item.id !== movie.id);

        const updatedTargetList = [...targetList, movie];

        setLikedList(selectedTab === 0 ? updatedSourceList : updatedTargetList);
        setDislikedList(selectedTab === 1 ? updatedSourceList : updatedTargetList);
    };

    return (
        <div>
            <Modal
                open={open}
                onClose={onClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Tabs
                        value={selectedTab}
                        onChange={handleTabChange}
                        variant="fullWidth"
                        indicatorColor="primary"
                        textColor="primary"
                        aria-label="Movie Tabs"
                        sx={tabStyle}
                    >
                        <Tab
                            label="Liked"
                            sx={
                                selectedTab === 0
                                    ? { ...selectedTabStyle, ...tabStyle }
                                    : tabStyle
                            }
                        />
                        <Tab
                            label="Disliked"
                            sx={
                                selectedTab === 1
                                    ? { ...selectedTabStyle, ...tabStyle }
                                    : tabStyle
                            }
                        />
                    </Tabs>

                    {selectedTab === 0 && (
                        <div>
                            {likedMovies.length === 0 ? (
                                <Typography variant="subtitle1" sx={movieTitleStyle}>
                                    No Liked Movies
                                </Typography>
                            ) : (
                                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                    {likedMovies.map((movie, index) => (
                                        <div key={index} style={movieEntryStyle}>
                                            <Typography variant="subtitle1" sx={movieTitleStyle}>
                                                {movie.original_title}
                                            </Typography>
                                            <img
                                                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                                alt={movie.original_title}
                                                style={{ maxWidth: '100%', height: 'auto' }}
                                            />
                                            <p>{movie.overview.slice(0, 100)}...</p>
                                            <Button
                                                onClick={() =>
                                                    moveMovie(movie, likedMovies, dislikedMovies)
                                                }
                                                variant="contained"
                                                sx={buttonStyle}
                                            >
                                                Move to Disliked
                                            </Button>
                                        </div>
                                    ))}
                                </Typography>
                            )}
                        </div>
                    )}
                    {selectedTab === 1 && (
                        <div>
                            {dislikedMovies.length === 0 ? (
                                <Typography variant="subtitle1" sx={movieTitleStyle}>
                                    No Disliked Movies
                                </Typography>
                            ) : (
                                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                    {dislikedMovies.map((movie, index) => (
                                        <div key={index} style={movieEntryStyle}>
                                            <Typography variant="subtitle1" sx={movieTitleStyle}>
                                                {movie.original_title}
                                            </Typography>
                                            <img
                                                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                                alt={movie.original_title}
                                                style={{ maxWidth: '100%', height: 'auto' }}
                                            />
                                            <p>{movie.overview.slice(0, 150)}...</p>
                                            <Button
                                                onClick={() =>
                                                    moveMovie(movie, dislikedMovies, likedMovies)
                                                }
                                                variant="contained"
                                                sx={buttonStyle}
                                            >
                                                Move to Liked
                                            </Button>
                                        </div>
                                    ))}
                                </Typography>
                            )}
                        </div>
                    )}
                </Box>
            </Modal>
        </div>
    );
}
