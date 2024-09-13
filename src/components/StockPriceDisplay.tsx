import React from "react";
import { Typography, Box } from "@mui/material";

interface StockPriceDisplayProps {
  price: number; // The current stock price to display
  symbol: string; // The stock symbol for which the price is displayed
}

const StockPriceDisplay: React.FC<StockPriceDisplayProps> = ({
  price,
  symbol,
}) => {
  return (
    <Box textAlign="center" marginTop={3}>
      <Typography variant="h5">
        Current Price for {symbol.toUpperCase()}
      </Typography>
      <Typography variant="h4" color="primary">
        ${price.toFixed(2)}
      </Typography>
    </Box>
  );
};

export default StockPriceDisplay;
