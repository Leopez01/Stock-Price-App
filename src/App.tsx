import React, { useState } from "react";
import { Container } from "@mui/material";
import SearchBar from "./components/SearchBar";
import StockPriceDisplay from "./components/StockPriceDisplay";
import ErrorMessage from "./components/ErrorMessage";
import { fetchStockPrice } from "./services/api";

const App: React.FC = () => {
  const [stockPrice, setStockPrice] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [symbol, setSymbol] = useState<string>("");

  const handleSearch = async (symbol: string) => {
    setError(null);
    setStockPrice(null);

    try {
      // Fetch the stock price using the API
      const data = await fetchStockPrice(symbol);
      if (data && data.c) {
        setStockPrice(data.c); // 'c' is the current price from API response
        setSymbol(symbol);
      } else {
        setError("Invalid stock symbol. Please try again.");
      }
    } catch (error) {
      setError("Failed to fetch stock price. Please try again later.");
    }
  };

  return (
    <Container maxWidth="sm">
      <SearchBar onSearch={handleSearch} />
      {error && <ErrorMessage message={error} />}
      {stockPrice !== null && (
        <StockPriceDisplay price={stockPrice} symbol={symbol} />
      )}
    </Container>
  );
};

export default App;

