import React from 'react';

const Bookmark = ({blog}) => {
    return (
        <div className={`bg-white px-8 rounded-xl shadow-xl shadow-blue-300 p-7 space-y-3`}>
            <div>
            <h1 className='text-xl font-semibold'>{blog.title}</h1>
            <p className='text-sm'>{blog.description.slice(0, 14)} <span className='text-gray-400 text-xs'>see more..</span></p>
            </div>
            {/* <button className='text-white text-sm font-thin px-4 py-2 bg-red-700'>Remove</button> */}
        </div>
    );
};

export default Bookmark;