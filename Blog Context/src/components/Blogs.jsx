import React, { useContext } from 'react'
import {AppContext} from '../context/AppContext'
import Spinner from './Spinner';
import './blog.css'

const Blogs = () => {
  const {posts,loading} =useContext(AppContext);
  console.log("printing inside the array")




  return (
    <div>
    {

          loading ? (<Spinner/>) : (
            posts.length == 0 ? (<div>
              No Post Found
            </div>) : (posts.map((post) =>(
              <div key={post.id}>
                <p className='title '>{post.title}</p>
                <p>
                  By <span>{post.author}</span>on <span>{post.category}</span>
                </p>
                <p>Posted on{post.date}</p>
                <p>{post.content}</p>
                <div>
                  {post.tags.map((tag,index) =>{
                    return <span className='index'>{`#${tag}`}</span>
                  })}
                </div>
              </div>
            )) )
      )
    }

    </div>
  )
}

export default Blogs