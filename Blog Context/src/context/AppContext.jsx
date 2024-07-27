import { createContext, useState } from "react";
import {baseUrl} from "../baseUrl"

export const AppContext = createContext();

export default function AppContextProvider({children}){
       const [loading , setLoading ] = useState(false);
       const [posts , setPosts] = useState([]);
       const [page ,setPage] = useState(1);
       const [totalPages , setTotalPages ] =useState(null);






       async function fetchBlogposts(page=1){
              setLoading(true);
              let url = `${baseUrl}?page=${page}`;
              console.log("printing the final url")
              console.log(url)

              try{
                     const result = await fetch(url);
                     const data = await result.json();
                     console.log(data);
                     setPage(data.page);
                     setPosts(data.posts);
                     setTotalPages(data.totalPages);


              }
              catch(error){
                     alert("error in fetching data ");
                     setPage(1);
                     setPosts([]);
                     setTotalPages(null);

              }
              setLoading(false);

       }

       function handlePageChnage(page){
              setPage(page);
              fetchBlogposts(page)

       }




       const value ={
              posts ,
              setPosts,
              loading,
              setLoading,
              page,
              setPage,
              totalPages,
              setTotalPages,
              fetchBlogposts,
              handlePageChnage
              

       };






       return <AppContext.Provider value={value}>
       {children}
       </AppContext.Provider>

}