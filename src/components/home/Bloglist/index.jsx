import React from 'react'
import Blogitems from './Blogitem'
import './styles.css'
const Bloglist = ({blogs}) => {
  return (
    <div className="blogList-wrap">
         {blogs.map((blog)=>(
            <Blogitems blog={blog} key={blog.id}/>
         ))}
         </div>
  )
}

export default Bloglist