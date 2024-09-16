"use client";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import Movie from "@/lib/movie";
import { Spinner } from "./ui/spinner";
import { fetchMovies } from "@/actions/fetch-movies";
import Link from 'next/link';
import { Photo } from './photo';
import { RootState } from "@reduxjs/toolkit/query"; // Correct path to the store
import { SearchComponent } from "@/components/search";
import { useSelector, useDispatch, Provider } from 'react-redux';
import { store } from "@/app/redux/store";

export function LoadMore({ initialMovies }: { initialMovies: Movie[] | null }) {
  const [movies, setMovies] = useState<Movie[] | null>(initialMovies || []);
  const [pagesLoaded, setPagesLoaded] = useState("page3");
  const [loading, setLoading] = useState(true); // Loading state to manage spinner
  const searchTerm = useSelector((state: RootState) => state.search.searchTerm); // Get the search term from Redux

  const { ref, inView } = useInView({
    threshold: 0,
  });

  // Function to load more movies when scrolled into view
  async function loadMoreMovies() {
    const next = pagesLoaded === "page3" ? "page1" : "page3";
    const newMovies = await fetchMovies(next);

    if (newMovies?.length) {
      setPagesLoaded(next);
      setMovies((prev: Movie[] | null) => [
        ...(prev?.length ? prev : []),
        ...newMovies,
      ]);
    }
  }

  useEffect(() => {
    if (inView) {
      loadMoreMovies();
    }
  }, [inView]);

  // Filter movies based on the search term from Redux
  const filteredMovies = movies?.filter((movie) =>
    movie.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Provider store={store}>
    <div className="flex flex-col h-full">
      {/* SearchComponent for searching movies */}
      <div className="p-4 rounded-lg shadow-lg">
        <SearchComponent />
      </div>

      {/* Movies grid */}
      <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7">
        {!filteredMovies?.length ? (
          <p className="text-center text-muted-foreground col-span-full">
            No movies found.
          </p>
        ) : (
          filteredMovies.map((film, index) => {
            const isLastElement = index === filteredMovies.length - 1;

            return (
              <MovieLink
                key={Math.random()}
                priority={index < 10}
                movie={film}
                ref={isLastElement ? ref : null} // Assign ref only to the last element
              />
            );
          })
        )}
      </div>

      {/* Infinite scroll spinner */}
      <div ref={ref}>
        <Spinner />
      </div>
    </div>
    </Provider>
  );
}

const MovieLink = ({
  priority,
  movie,
  ref,
}: {
  priority: boolean;
  movie: Movie;
  ref?: any;
}) => {
  return (
    <div className="relative" ref={ref}>
      <Link
        href={`/`}
        key={Math.random()}
        className="block transition ease-in-out md:hover:scale-105"
        prefetch={false}
      >
        <Photo
          src={movie.posterimage!}
          title={movie.name}
          priority={priority}
        />
        <span className="absolute bottom-0 left-0 p-2 text-sm font-semibold"></span>
      </Link>
      {movie.name}
    </div>
    
  );
};
