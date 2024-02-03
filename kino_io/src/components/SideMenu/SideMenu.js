import React, { useState } from 'react';

import { Button, Container, CssBaseline, Grid } from '@mui/material';
import FilterMenu from './FilterMenu';
// import MovieListModal from './MovieListModal'; 

function SideMenu() {

    const [openMovieList, setOpenMovieList] = useState(false);

    const handleOpenMovieList = () => {
        // first we will pull all the liked movies of the selected user
        setOpenMovieList(true);
    }

    return (
        <div style={{ width: '30%', height: '100vh', border: '1px solid #ccc', borderRadius: '5px' }}>
            <Container maxWidth="lg" className="app">
                <CssBaseline />
                <Grid container spacing={0}>
                    <Grid item xs={12}>
                        <Button onClick={handleOpenMovieList}>Open Movie List</Button>
                    </Grid>
                    <Grid item xs={12}>
                        <FilterMenu />
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}

export default SideMenu;
