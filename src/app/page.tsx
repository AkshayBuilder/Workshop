
import { Suspense } from 'react';
import { LoadMore } from '@/components/loadMore';
import { fetchMovies } from '@/actions/fetch-movies';
import Loading from './loading';


export default async function Page()
 {
     const data = await fetchMovies("page1");

  return (
    <div className="flex flex-col h-full">
    {/* LoadMore now contains the SearchComponent */}
    <div className="flex-grow overflow-auto min-h-[200px]">
      <div className="group-has-[[data-pending]]:animate-pulse p-4">
        <Suspense fallback={<Loading/>}>
        <LoadMore initialMovies={data} />
        </Suspense>
      </div>
    </div>
  </div>
    
  );
}
