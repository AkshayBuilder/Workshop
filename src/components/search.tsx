"use client";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/redux/store"; // Adjust the path to your store
import { setSearchTerm } from "@/app/redux/searchSlice"; // Adjust the path to your slice
import backButton from "../assets/Back.png";
import searchIcon from "../assets/search.png"; // Assuming this asset exists

export function SearchComponent() {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state: RootState) => state.search.searchTerm);
  const [searchEnabled, setSearchEnabled] = useState(false);
  const placeholderTitle = "Romantic Comedy";

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchTerm(e.target.value)); // Directly update Redux state.Comments by Akshay G Nambiar
  };

  const handleSearchClick = () => {
    setSearchEnabled(!searchEnabled); // Logic for changing visibility of input box visibility
  };

  return (
    <div className="fixed w-full top-0 flex items-center justify-between h-12 bg-black bg-opacity-100 text-white shadow-lg z-50 px-4">
      {/* Back Button */}
      <div className="flex items-center space-x-2 ">
        <img
          className="w-6 h-6 cursor-pointer"
          src="Back.png"
          alt="Back Icon"
        />
        
        {!searchEnabled && (
          <div className="ml-2overflow-hidden whitespace-nowrap">
            <div className="text-white">{placeholderTitle}</div>
          </div>
        )}
      </div>

      {/* Search Input */}
      {searchEnabled && (
        <input
          className="border-none rounded-full h-8 w-[50%] sm:w-[40%] md:w-[30%] lg:w-[25%] xl:w-[20%] p-2 text-black"
          onChange={handleInputChange}
          type="text"
          value={searchTerm}
          placeholder="Search for movies..."
        />
      )}

      {/* Search Icon */}
      <img
        className="w-6 h-6 cursor-pointer mr-3"
        onClick={handleSearchClick}
        src="search.png"
        alt="Search Icon"
      />
    </div>
  );
}
