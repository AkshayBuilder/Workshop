
import Link from 'next/link';
import Movie from '@/lib/movie';
import { Photo } from './photo';

export async function BooksGrid({
  movies,
}: {
  movies: Movie[];
}) {
  return (
    <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7">
      {!movies?.length ? (
        <p className="text-center text-muted-foreground col-span-full">
          No books found.
        </p>
      ) : (
        movies?.map((film, index) => (
          <MovieLink
            key={Math.random()}
            priority={index < 10}
            movie={film}
          />
        ))
      )}
    </div>
  );
}

function MovieLink({
  priority,
  movie
}: {
  priority: boolean;
  movie: Movie;
}) {

  return (
    <div className="relative">
    <Link
    href={`/`}
    key={Math.random()}
    className="block transition ease-in-out md:hover:scale-105"
    prefetch={false}
  >
    
      {/* Photo Component */}
      <Photo
        src={movie.posterimage!}
        title={movie.name}
        priority={priority}
      />
    
      <span className="absolute bottom-0 left-0  p-2 text-sm font-semibold">
        
      </span>
    
    </Link>
    {movie.name.length > 12 ? `${movie.name.slice(0,12)}...` : movie.name}
    </div>
  );
}