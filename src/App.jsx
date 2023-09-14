import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Blogs from "./Components/Blogs/Blogs";
import Nav from "./Components/Navbar/Nav";
import Bookmark from "./Components/Bookmark/Bookmark";

function App() {
  const [bookmark, setBookmark] = useState([]);
  const [reading, setReading] = useState(0);
  const [showBookmark, setShowBookmark] = useState(true);

  const handleBookmark = (blog) => {
    const bookMarks = [...bookmark, blog];
    setBookmark(bookMarks);
  };

  const handleMarkAsRead = (blog) => {
    const blogId = blog.id;
    // console.log(blogId);
    const remainingTime = JSON.parse(blog.readingTime);
    setReading(reading + remainingTime );
    const remainingBookmark = bookmark.filter(bookmark => bookmark.id !== blogId);
    setBookmark(remainingBookmark);
  }

  const handleShowBookmark = () => {
    setShowBookmark(!showBookmark);
  }

  return (
    <div className={` px-6 md:px-12 lg:px-24 xl:px-40 py-8`}>
      <Nav handleShowBookmark={handleShowBookmark}></Nav>
      <hr className="pb-8 " />
      <div
        className="relative flex flex-col md:flex-row lg:flex-row gap-7 
      "
      >
        <Blogs handleMarkAsRead={handleMarkAsRead} handleBookmark={handleBookmark} ></Blogs>
        <div>
          <div className={ `ml-6 md:ml-0 lg:ml-0 absolute top-0 md:static lg:static ${showBookmark ? "hidden" : "block"} md:block lg:block md:flex-1 bg-transparent backdrop-blur-xl md:bg-gray-50 lg:bg-gray-50 shadow-xl shadow-blue-100 lg:w-[400px] rounded-lg p-10 space-y-4`}>
            <div className="bg-purple-100 rounded-lg p-4 border-2 border-purple-300">
              <h1 className="text-xl font-bold text-center text-purple-700">Spend time on read : {reading}</h1>
            </div>
            <h1 className="text-2xl text-center font-semibold text-white md:text-black lg:text-black">
              Bookmarked Blogs : {bookmark.length}
            </h1>
            <div className="flex flex-col gap-2">
              {bookmark.map((blog) => (
                <Bookmark blog={blog}></Bookmark>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
