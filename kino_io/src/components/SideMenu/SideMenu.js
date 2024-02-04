import React, { useState } from 'react';

import { Button, Container, CssBaseline, Grid } from '@mui/material';
import FilterMenu from './FilterMenu';
import MovieListModal from './MovieListModal';

function SideMenu({
    selectedGenres,
    setSelectedGenres,
    selectedStreamingServices,
    setSelectedStreamingServices,
    likedList,
    setLikedList,
    dislikedList,
    setDislikedList,
    selectedCountry,
    setSelectedCountry,
    selectedLanguage,
    setSelectedLanguage,
    handleApplyFilters,
    handleClearFilters
}) {

    const [openMovieList, setOpenMovieList] = useState(false);


    const handleOpenMovieList = () => {
        // first we will pull all the liked movies of the selected user
        setOpenMovieList(true);
        console.log(likedList);
        console.log(dislikedList);
    }

    const handleCloseMovieList = () => {
        setOpenMovieList(false);
    }

    return (
        <div style={{ width: '30%', height: '100vh', border: '1px solid #ccc', borderRadius: '5px' }}>
            <Container maxWidth="lg" className="app">
                <CssBaseline />
                <Grid container spacing={0}>
                    <Grid container spacing={0} direction="column" alignItems="center" justifyContent="center">
                        <Button
                            onClick={handleOpenMovieList}
                            variant="contained"
                            style={{ backgroundColor: 'blue', color: 'white' }}
                        >
                            Open Movie List
                        </Button>
                        <MovieListModal
                            likedMovies={likedList}
                            dislikedMovies={dislikedList}
                            open={openMovieList}
                            onClose={handleCloseMovieList}
                            setLikedList={setLikedList}
                            setDislikedList={setDislikedList}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <Grid container spacing={2} direction="column" alignItems="center" justifyContent="center">
                            <Grid item container direction="row" spacing={2} justifyContent="center">
                                <Grid item>
                                    <Button
                                        onClick={handleApplyFilters}
                                        variant="contained"
                                        style={{ backgroundColor: 'green', color: 'white' }}
                                    >
                                        Apply Filters
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button
                                        onClick={handleClearFilters}
                                        variant="contained"
                                        style={{ backgroundColor: 'red', color: 'white' }}
                                    >
                                        Clear Filters
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>


                        <FilterMenu
                            selectedGenres={selectedGenres}
                            setSelectedGenres={setSelectedGenres}
                            selectedStreamingServices={selectedStreamingServices}
                            setSelectedStreamingServices={setSelectedStreamingServices}
                            selectedCountry={selectedCountry}
                            setSelectedCountry={setSelectedCountry}
                            selectedLanguage={selectedLanguage}
                            setSelectedLanguage={setSelectedLanguage}
                        />
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}

export default SideMenu;
