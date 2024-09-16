"use server";
import Movie from "@/lib/movie";
export async function fetchMovies(page:string){
 const apiUrl = `https://test.create.diagnal.com/data/${page}.json`;
 try{
    const res = await fetch(apiUrl,{ cache: 'no-store'})
    const jsonData = await res.json();
    const data: Movie[] = jsonData.page['content-items'].content.map((item: any) => ({
    name: item.name,
    posterimage: item['poster-image'], // Rename to fit your Movie interface
  }));
     return data; 
   }catch(error){
    console.log("Error fetching data:",error);
    return null;
   }
 
}