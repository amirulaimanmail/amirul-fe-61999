import { createContext, ReactNode, useContext, useState } from "react";

interface MovieContextType {
  movies: any[]; // You can define a specific type for your movies array
  setMovies: (movies: any[]) => void;
  displayFinder: number;
  setDisplayFinder: (value: number) => void;
  movieDisplay: number;
  setMovieDisplay: (value: number) => void;
  fetchMovies: (params: string) => void;
}

// Create the context
const MovieContext = createContext<MovieContextType | undefined>(undefined);

// Custom hook for easier access
export const useMovieContext = () => {
  const context = useContext(MovieContext);
  if (!context) {
    throw new Error("useMovieContext must be used within a MovieProvider");
  }
  return context;
};

export const MovieProvider = ({ children }: { children: ReactNode }) => {
  const [movies, setMovies] = useState<any[]>([]);
  const [displayFinder, setDisplayFinder] = useState<number>(0);
  const [movieDisplay, setMovieDisplay] = useState<number>(0);

  const fetchMovies = async (params: string) => {
    try {
      setMovies([]);
      setMovieDisplay(displayFinder);
      const res = await fetch(params);

      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await res.json();
      setMovies(data.data); // Set the movies in context
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <MovieContext.Provider
      value={{
        movies,
        setMovies,
        displayFinder,
        setDisplayFinder,
        movieDisplay,
        setMovieDisplay,
        fetchMovies,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};
