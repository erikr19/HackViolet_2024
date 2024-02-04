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
    handleClearFilters,
}) {
    const [openMovieList, setOpenMovieList] = useState(false);

    const handleOpenMovieList = () => {
        setOpenMovieList(true);
    };

    const handleCloseMovieList = () => {
        setOpenMovieList(false);
    };

    return (
        <div style={{ width: '30%', height: '100vh', backgroundColor: '#11151c', position: 'relative' }}>
            <Container maxWidth="lg" className="app">
                <CssBaseline />
                <Grid container spacing={0} direction="column" alignItems="center" justifyContent="space-between" style={{ flex: '1' }}>
                    <Grid item style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                        <img src="kino.png" alt="Kino" style={{ maxWidth: '100%', height: 'auto' }} />
                    </Grid>
                    <Grid item>
                        <FilterMenu
                            selectedGenres={selectedGenres}
                            setSelectedGenres={setSelectedGenres}
                            selectedStreamingServices={selectedStreamingServices}
                            setSelectedStreamingServices={setSelectedStreamingServices}
                            selectedCountry={selectedCountry}
                            setSelectedCountry={selectedCountry}
                            selectedLanguage={selectedLanguage}
                            setSelectedLanguage={setSelectedLanguage}
                        />
                    </Grid>
                    <Grid item>
                        <Button
                            onClick={handleApplyFilters}
                            variant="contained"
                            fullWidth
                            style={{ backgroundColor: '#4f7d78', color: 'white', marginBottom: '10px' }}
                        >
                            Apply Filters
                        </Button>
                        <Button
                            onClick={handleClearFilters}
                            variant="contained"
                            fullWidth
                            style={{ backgroundColor: '#9c6268', color: 'white', marginBottom: '10px' }}
                        >
                            Clear Filters
                        </Button>
                        <Button
                            onClick={handleOpenMovieList}
                            variant="contained"
                            fullWidth
                            style={{ backgroundColor: '#79629c', color: 'white' }}
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
                </Grid>
            </Container>
        </div>
    );
}

export default SideMenu;
