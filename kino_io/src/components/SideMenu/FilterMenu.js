import React from 'react';
import { Typography } from '@mui/material';

const filterMenuStyle = {
    flex: 1,
    border: '1px solid #ccc',
    borderRadius: '5px',
    padding: '10px',
};

function FilterMenu() {
    return (
        <div style={filterMenuStyle}>
            <Typography variant="h3" component="h4">
                Filter Menu
            </Typography>
        </div>
    );
}

export default FilterMenu;
