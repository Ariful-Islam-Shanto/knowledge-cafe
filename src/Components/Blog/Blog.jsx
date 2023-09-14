import React from 'react';

const Blog = ({blog, handleBookmark, handleMarkAsRead}) => {
    const {title, author, description, cover, author_image, posted_date, hashtags,readingTime} = blog;
    // console.log(cover);
    return (
        <div className='space-y-4'>
            <img className='rounded-lg w-full h-[250px]' src={cover} alt="" />
            <div className='flex justify-between items-center'>
                <div className='flex gap-3'>
                <img className='w-10 h-10 rounded-full' src={author_image} alt="" />
                <div>
                    <h3 className='text-xl text-black font-bold'>{author}</h3>
                    <p className='text-sm text-gray-400 font-medium'>{posted_date}</p>
                </div>
                </div>
                <p className='text-gray-400'>{readingTime} min read <i onClick={() => {
                    handleBookmark(blog);
                }} class="fa-regular fa-bookmark"></i></p>
            </div>
            <h1 className='text-4xl text-black font-bold'>{title}</h1>
            <p className='text-gray-600'>{description}</p>
            <div className='flex gap-2'>
                {hashtags.map( hash => <p className='text-blue-600'># {hash}</p>)}
            </div>
            <div>
            <span onClick={() => {
                handleMarkAsRead(blog);
            }} className=' text-purple-700 underline' ><a >Mark as read</a></span>
            </div>
            <hr />
        </div>
    );
};

export default Blog;