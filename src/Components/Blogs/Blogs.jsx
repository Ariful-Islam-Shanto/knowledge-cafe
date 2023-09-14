import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';

const Blogs = ({handleBookmark, handleMarkAsRead}) => {
    const [blogs, setBlogs] = useState([]);

useEffect(() => {
    fetch('../../../public/blog.json')
    .then(res => res.json())
    .then(data => setBlogs(data));
}, [])
// console.log(blogs);
    return (
        <div className={` flex-1 grid grid-cols-1 gap-8`}>
            {blogs.map(blog => <Blog handleMarkAsRead={handleMarkAsRead} handleBookmark={handleBookmark}  key={blog.id} blog={blog} ></Blog>)}
        
        </div>
        
    );
};

export default Blogs;