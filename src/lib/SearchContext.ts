import { createContext, useContext, useState, ReactNode } from 'react';

// Define the context type
interface SearchContextType {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

// Create the context
const SearchContext = createContext<SearchContextType | undefined>(undefined);

// Hook to use the context
export const useSearch = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error("useSearch must be used within a SearchProvider");
  }
  return context;
};

// Provider component
export const SearchProvider = ({ children }: { children: ReactNode }) => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  return (
    <SearchContext.Provider value={{ searchTerm, setSearchTerm }}>
      {children}
    </SearchContext.Provider>
  );
};