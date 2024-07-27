import React, { useContext, useEffect } from 'react' 
import Header from "./components/Header"
import Blogs from "./components/Blogs"
import PagInation from "./components/Pagination"
import { AppContext } from './context/AppContext'



const App = () => {
  const {fetchBlogposts} = useContext(AppContext)

  useEffect(() =>{
    fetchBlogposts();

  },[]);




  return (
    <div> 
      <Header />
      <Blogs />
      <PagInation />
    </div>
  )
}

export default App
