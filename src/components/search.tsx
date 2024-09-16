"use client";
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/app/redux/store';// Adjust the path to your store
import { setSearchTerm } from '@/app/redux/searchSlice'; // Adjust the path to your slice

export function SearchComponent() {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state: RootState) => state.search.searchTerm);
  const [input, setInput] = useState(searchTerm);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSearch = () => {
    dispatch(setSearchTerm(input)); // Dispatch search term to Redux store
  };

  return (
    <div
      className="relative flex items-center justify-between w-full h-15 p-2 bg-cover bg-center rounded-full shadow-lg"
      style={{ background: 'linear-gradient(to right, blue, black)' }} // Gradient background from blue to black
    >
      <button className="p-2 bg-gray-500 text-white rounded-full">
        ←
      </button>

      <input
        type="text"
        placeholder="Search for movies..."
        className="w-full max-w-lg p-1 bg-gray-200 rounded-l-lg focus:outline-none"
        value={input} // Controlled input
        onChange={handleInputChange} // Update input value
      />

      <button onClick={handleSearch} className="ml-2 p-2 bg-blue-600 text-white rounded-lg">
        Search
      </button>
    </div>
  );
}
