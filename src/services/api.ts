import axios from "axios";

const API_KEY = "crhal3hr01qrbc71slsgcrhal3hr01qrbc71slt0";
const BASE_URL = "https://finnhub.io/api/v1/quote";

export const fetchStockPrice = async (symbol: string) => {
  try {
    const response = await axios.get(
      `${BASE_URL}?symbol=${symbol}&token=${API_KEY}`
    );
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch stock price");
  }
};
