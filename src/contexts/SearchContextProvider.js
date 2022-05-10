import React, { createContext, useContext, useState } from "react";

const SearchContext = createContext();
const baseUrl = "https://google-search3.p.rapidapi.com/api/v1";

export const SearchContextProvider = ({ children }) => {
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("elon musk");

  const getResult = async (type) => {
    setLoading(true);

    const result = await fetch(`${baseUrl}${type}`, {
      method: "GET",
      headers: {
        "X-User-Agent": "desktop",
        "X-Proxy-Location": "EU",
        "X-RapidAPI-Host": "google-search3.p.rapidapi.com",
        "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
      },
    });

    const data = await result.json();

    setResult(data);
    setLoading(false);
  };

  return (
    <SearchContext.Provider
      value={{ getResult, result, loading, searchTerm, setSearchTerm }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export const useSearchContext = () => useContext(SearchContext);
