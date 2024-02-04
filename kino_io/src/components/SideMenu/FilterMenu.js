import React from 'react';
import { Autocomplete, TextField, Paper } from '@mui/material';
import { FlagIcon } from "react-flag-kit";

const filterMenuStyle = {
    flex: 1,
    padding: '10px',
};

const genres = ["Action", "Adventure", "Animation", "Comedy", "Crime",
    "Documentary", "Drama", "Family", "Fantasy",
    "History", "Horror", "Music", "Mystery", "Romance",
    "Science Fiction", "TV Movie", "Thriller", "War",
    "Western"]

const streamingServices = ["Netflix", "Max", "Hulu", "DisneyPlus",
    "Peacock", "ParamountPlus", "AppleTV", "AMC+"]

const countryCodes = ["US", "CA", "GB", "AU", "DE", "FR", "NL", "BR", "CZ",
    "ES", "IT", "MX", "IN", "JP", "SE", "NO", "DK", "RU", "ZA", "KR", "CN", "SG",
    "HK", "MY", "TH", "AR", "CH", "BE", "AT", "FI", "IE"]

const languages = [
    "English", "French", "German",
    "Dutch", "Portuguese", "Czech", "Spanish",
    "Italian", "Hindi", "Japanese", "Swedish",
    "Norwegian", "Danish", "Russian", "Zulu",
    "Afrikaans", "Korean", "Mandarin", "Malay",
    "Tamil", "Thai", "Irish", "Finnish"
];

const countryNames = {
    "US": "United States", "CA": "Canada",
    "GB": "United Kingdom", "AU": "Australia",
    "DE": "Germany", "FR": "France",
    "NL": "Netherlands", "BR": "Brazil",
    "CZ": "Czech Republic", "ES": "Spain",
    "IT": "Italy", "MX": "Mexico",
    "IN": "India", "JP": "Japan",
    "SE": "Sweden", "NO": "Norway",
    "DK": "Denmark", "RU": "Russia",
    "ZA": "South Africa", "KR": "South Korea",
    "CN": "China", "SG": "Singapore",
    "HK": "Hong Kong", "MY": "Malaysia",
    "TH": "Thailand", "AR": "Argentina",
    "CH": "Switzerland", "BE": "Belgium",
    "AT": "Austria", "FI": "Finland",
    "IE": "Ireland"
};


const languageToCountry = {
    "English": "GB", "French": "FR",
    "German": "DE", "Dutch": "NL",
    "Portuguese": "BR", "Czech": "CZ",
    "Spanish": "ES", "Italian": "IT",
    "Hindi": "IN", "Japanese": "JP",
    "Swedish": "SE", "Norwegian": "NO",
    "Danish": "DK", "Russian": "RU",
    "Zulu": "ZA", "Afrikaans": "ZA",
    "Korean": "KR", "Mandarin": "CN",
    "Malay": "MY", "Tamil": "IN",
    "Thai": "TH", "Irish": "IE",
    "Finnish": "FI"
};

const getCountryCode = (language) => {
    return languageToCountry[language] || "Unknown";
};

const getCountryName = (countryCode) => {
    return countryNames[countryCode] || "";
};



function FilterMenu({
    selectedGenres,
    setSelectedGenres,
    selectedStreamingServices,
    setSelectedStreamingServices,
    selectedCountry,
    setSelectedCountry,
    selectedLanguage,
    setSelectedLanguage
}) {
    return (
        <div style={filterMenuStyle}>
            <Autocomplete
                multiple
                disablePortal
                id="genres-autocomplete"
                options={genres}
                sx={{
                    width: 300,
                    "& .MuiOutlinedInput-root": { color: "white" },
                    "& .MuiInputLabel-root": { color: "white" },
                    "& .MuiSvgIcon-root": { color: "white" },
                    "& .MuiAutocomplete-tag": { color: "white" },
                    '& .MuiAutocomplete-paper': {
                        '&::-webkit-scrollbar': {
                            width: '8px',
                        },
                        '&::-webkit-scrollbar-thumb': {
                            background: '#555',
                            borderRadius: '4px',
                        },
                    },
                }}
                PaperComponent={({ children, ...other }) => (
                    <Paper
                        {...other}
                        style={{ backgroundColor: '#000', color: 'white' }}
                    >
                        {children}
                    </Paper>
                )}
                renderInput={(params) => <TextField {...params} label="Genre" InputLabelProps={{ style: { color: 'white' } }} />}
                value={selectedGenres}
                onChange={(_, newValue) => setSelectedGenres(newValue)}
            />


            <Autocomplete
                multiple
                disablePortal
                id="streaming-services-autocomplete"
                options={streamingServices}
                sx={{
                    width: 300,
                    "& .MuiOutlinedInput-root": { color: "white" },
                    "& .MuiInputLabel-root": { color: "white" },
                    "& .MuiSvgIcon-root": { color: "white" },
                    "& .MuiAutocomplete-tag": { color: "white" },
                    '& .MuiAutocomplete-paper': {
                        '&::-webkit-scrollbar': {
                            width: '8px',
                        },
                        '&::-webkit-scrollbar-thumb': {
                            background: '#555',
                            borderRadius: '4px',
                        },
                    },
                }}
                PaperComponent={({ children, ...other }) => (
                    <Paper
                        {...other}
                        style={{ backgroundColor: '#000', color: 'white' }}
                    >
                        {children}
                    </Paper>
                )}
                renderInput={(params) => <TextField {...params} label="Streaming Service" InputLabelProps={{ style: { color: 'white' } }} />}
                value={selectedStreamingServices}
                onChange={(_, newValue) => setSelectedStreamingServices(newValue)}
            />


            <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={countryCodes}
                sx={{
                    width: 300,
                    "& .MuiOutlinedInput-root": { color: "white" },
                    "& .MuiInputLabel-root": { color: "white" },
                    "& .MuiSvgIcon-root": { color: "white" },
                    "& .MuiAutocomplete-tag": { color: "white" },
                    '&::-webkit-scrollbar': {
                        width: '8px',
                    },
                    '&::-webkit-scrollbar-thumb': {
                        background: '#555',
                        borderRadius: '4px',
                    },
                }}
                PaperComponent={({ children }) => <Paper style={{ backgroundColor: '#000', color: '#000' }}>{children}</Paper>}
                renderInput={(params) => <TextField {...params} label="Country" InputLabelProps={{ style: { color: 'white' } }} />}
                renderOption={(props, option) => (
                    <li {...props} style={{ display: 'flex', alignItems: 'center', padding: '8px 12px' }}>
                        <FlagIcon
                            code={option}
                            size={24}
                        />
                        <span style={{ marginLeft: '8px', color: 'white' }}>
                            {option} - {getCountryName(option)}
                        </span>
                    </li>
                )}
                value={selectedCountry}
                getOptionLabel={(option) => `${getCountryName(option)}`}
                onChange={(_, newValue) => setSelectedCountry(newValue)}
            />


            <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={languages}
                sx={{
                    width: 300,
                    "& .MuiOutlinedInput-root": { color: "white" },
                    "& .MuiInputLabel-root": { color: "white" },
                    "& .MuiSvgIcon-root": { color: "white" },
                    "& .MuiAutocomplete-tag": { color: "white" },
                    '&::-webkit-scrollbar': {
                        width: '8px',
                    },
                    '&::-webkit-scrollbar-thumb': {
                        background: '#555',
                        borderRadius: '4px',
                    },
                }}
                PaperComponent={({ children }) => <Paper style={{ backgroundColor: '#000', color: '#000' }}>{children}</Paper>}
                renderInput={(params) => <TextField {...params} label="Language" InputLabelProps={{ style: { color: 'white' } }} />}
                renderOption={(props, option) => (
                    <li {...props} style={{ display: 'flex', alignItems: 'center', padding: '8px 12px', color: 'white' }}>
                        <FlagIcon
                            code={getCountryCode(option)}
                            size={24}
                        />
                        <span style={{ marginLeft: '8px' }}>
                            {option}
                        </span>
                    </li>
                )}
                value={selectedLanguage}
                getOptionLabel={(option) => `${option}`}
                onChange={(_, newValue) => setSelectedLanguage(newValue)}
            />

        </div>
    );
}

export default FilterMenu;

