import React, { useState } from 'react'
import Header from '../../components/home/Header'
import Searchbar from '../../components/home/Searchbar'
import Bloglist from '../../components/home/Bloglist'
import { blogList } from '../../conf/data'
const Home = () => {
  const [blogs, setBlogs]=useState(blogList);
  const [searchKey, setSearchKey] = useState('');
  //search submit
  const handleSearchSubmit=(event)=>{
    event.preventDefault();
    handleSearchResults();
  }
  //search for blogs by category
  const handleSearchResults=()=>{
      const allBlogs=blogList;
      const filteredBlogs=allBlogs.filter(blog=>
        blog.category.toLowerCase().includes(searchKey.toLowerCase().trim()))
        setBlogs(filteredBlogs);
  };
  const handleClearSearch=()=>{
      setBlogs(blogList);
      setSearchKey('');
  };
  return (
    <div>
        <Header/>
        <Searchbar value={searchKey}
        clearSearch={handleClearSearch}
         formSubmit={handleSearchSubmit} 
         handleSearchKey={(e)=> setSearchKey(e.target.value)} />
        {!blogs.length ? <EmptyList/> : <Bloglist blogs={blogs} />}
        
    </div>
  )
}

export default Home