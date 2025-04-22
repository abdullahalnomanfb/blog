// import axios from "axios";
// import { useEffect, useState } from "react";
// import { FaRegClock } from "react-icons/fa";

// const Blog = () => {
//     const [blogs, setBlog] = useState([]);

//     const getBlog = async () => {
//         const result = await axios.get("https://hr.mediusware.xyz/api/website/blogs/");
//         setBlog(result?.data?.results);
//     };

//     useEffect(() => {
//         getBlog();
//     }, []);

//     return (
//         <div className="p-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//             {blogs.map((blog, idx) => (
//                 <div key={idx} className="rounded-xl overflow-hidden bg-[#f8fbfd]">
//                     <div className="relative">
//                         <img
//                             src={blog.image}
//                             alt={blog.name}
//                             className="w-full h-60 object-cover rounded-t-xl"
//                         />

//                         <div className="absolute top-3 right-3 bg-white text-sm text-blue-600 font-medium px-3 py-1 rounded-full shadow-md flex items-center gap-1">
//                             <FaRegClock className="text-blue-500" />
//                             {blog.reading_time || "8 min"} read
//                         </div>

//                         <div className="absolute -bottom-6 left-0 bg-white rounded-t-xl flex items-center px-3 py-2 gap-2">
//                             <img
//                                 src="https://randomuser.me/api/portraits/men/32.jpg"
//                                 alt={blog.author_name}
//                                 className="w-8 h-8 rounded-full object-cover"
//                             />
//                             <div className="text-sm">
//                                 <p className="font-medium text-gray-800">{blog.author_name || "test author"}</p>
//                                 <p className="text-gray-500 text-xs">{blog.created_at || "Date"}</p>
//                             </div>
//                         </div>

//                         {/* Tags */}
//                         <div className="absolute bottom-3 right-3 flex gap-2">
//                             <span className="bg-white text-xs text-gray-700 px-3 py-1 rounded-full font-medium shadow-sm">
//                                 {blog.category || "UX/UI"}
//                             </span>
//                             <span className="bg-white text-xs text-gray-700 px-3 py-1 rounded-full font-medium shadow-sm">
//                                 Design
//                             </span>
//                         </div>
//                     </div>

//                     {/* Title */}
//                     <div className="pt-8 pb-4 px-4 bg-white">
//                         <h3 className="text-lg font-semibold text-gray-800 leading-snug">
//                             {blog.name || "Test Blog"}
//                         </h3>
//                     </div>
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default Blog;




import axios from "axios";
import { useEffect, useState } from "react";
import { FaRegClock } from "react-icons/fa";

const Blog = () => {
    const [blogs, setBlog] = useState([]);

    const getBlog = async () => {
        const result = await axios.get("https://hr.mediusware.xyz/api/website/blogs/");
        setBlog(result?.data?.results);
    };

    useEffect(() => {
        getBlog();
    }, []);

    return (
        <div className="p-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {blogs.map((blog, idx) => (
                <div
                    key={idx}
                    className="group rounded-xl overflow-hidden bg-[#f8fbfd] shadow-md transition-transform duration-300 "
                >
                    <div className="relative">
                        {/* Image */}
                        <img
                            src={blog.image}
                            alt={blog.name}
                            className="w-full h-60 object-cover rounded-t-xl"
                        />

                        {/* Reading time badge */}
                        <div className="absolute top-3 right-3 bg-white text-sm text-blue-600 font-medium px-3 py-1 rounded-full shadow-md flex items-center gap-1">
                            <FaRegClock className="text-blue-500" />
                            {blog.reading_time || "8 min"} read
                        </div>

                        {/* Tags */}
                        <div className="absolute bottom-3 right-3 flex gap-2">
                            <span className="bg-white text-xs text-gray-700 px-3 py-1 rounded-full font-medium shadow-sm">
                                {blog.category || "UX/UI"}
                            </span>
                            <span className="bg-white text-xs text-gray-700 px-3 py-1 rounded-full font-medium shadow-sm">
                                Design
                            </span>
                        </div>
                    </div>

                    {/* Hover-animated section */}
                    <div className="bg-white p-4 pt-10 -mt-6 relative z-10 transition-transform duration-300 group-hover:-translate-y-2 rounded-b-xl">
                        {/* Author */}
                        <div className="flex items-center gap-3 mb-3">
                            <img
                                src="https://randomuser.me/api/portraits/men/32.jpg"
                                alt={blog.author_name}
                                className="w-9 h-9 rounded-full object-cover"
                            />
                            <div className="text-sm">
                                <p className="font-medium text-gray-800">
                                    {blog.author_name || "Test Author"}
                                </p>
                                <p className="text-gray-500 text-xs">
                                    {blog.created_at || "Date"}
                                </p>
                            </div>
                        </div>

                        {/* Title */}
                        <h3 className="text-lg font-semibold text-gray-800 leading-snug">
                            {blog.name || "Test Blog"}
                        </h3>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Blog;
