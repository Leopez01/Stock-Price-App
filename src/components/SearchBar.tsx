import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";

interface SearchBarProps {
  onSearch: (symbol: string) => void; //Function to handle the search
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [symbol, setSymbol] = useState<string>("");

  // Function to handle the search button click
  const handleSearchClick = () => {
    onSearch(symbol);
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      marginTop={2}
    >
      <TextField
        label="Stock Symbol"
        variant="outlined"
        value={symbol}
        onChange={(e) => setSymbol(e.target.value)}
        style={{ marginRight: "16px" }}
      />
      <Button variant="contained" color="primary" onClick={handleSearchClick}>
        Search
      </Button>
    </Box>
  );
};

export default SearchBar;
