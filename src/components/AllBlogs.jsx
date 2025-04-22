import axios from "axios";
import { useEffect, useState } from "react";

const AllBlogs = () => {
  const [categories, setCategories] = useState([]);
  const [allBlogs, setAllBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [id, setId] = useState(null);

  const getCategories = async () => {
    try {
      const result = await axios.get("https://hr.mediusware.xyz/api/website/blogs/categories/");
      setCategories(result?.data || []);
    } catch (error) {
      console.error("Error fetching categories", error);
    }
  };

  const getBlogs = async () => {
    try {
      const result = await axios.get("https://hr.mediusware.xyz/api/website/blogs/");
      const blogs = result?.data?.results || [];
      setAllBlogs(blogs);
      setFilteredBlogs(blogs);
    } catch (error) {
      console.error("Error fetching blogs", error);
    }
  };

  useEffect(() => {
    getCategories();
    getBlogs();
  }, []);

  useEffect(() => {
    if (id) {
      const filtered = allBlogs.filter((blog) =>
        blog.categories?.some((cat) => cat.id === id)
      );
      setFilteredBlogs(filtered);
    } else {
      setFilteredBlogs(allBlogs);
    }
  }, [id, allBlogs]);

  return (
    <div className="container mb-12">
      <div className="flex items-center justify-between gap-3 md:flex-row flex-col">
        <p className="sm:text-[48px] text-2xl leading-8 font-bold">
          All <span className="text-[#00A88E]"> Blogs</span>
        </p>
      </div>

      <div className="flex items-center flex-wrap justify-center gap-4 sm:py-12 py-5">
        <button
          className={`sm:py-[11px] py-1 sm:px-6 px-4 border rounded-3xl ${id === null ? "text-white bg-[#0060AF]" : "bg-white"
            }`}
          onClick={() => setId(null)}
        >
          All
          <span className="px-[6px] py-1 rounded-lg ms-1 text-[#008F79] bg-[#EAECF0] h-[20px]">
            {allBlogs.length}
          </span>
        </button>

        {categories?.map(({ id: catId, name, slug, total_blog }) => (
          <button
            key={slug}
            className={`sm:py-[11px] py-1 sm:px-6 px-4 border rounded-3xl ${id === catId ? "text-white bg-[#0060AF]" : "bg-white"
              }`}
            onClick={() => setId(catId)}
          >
            {name}
            <span className="px-[6px] py-1 rounded-lg ms-1 bg-[#EAECF0] h-[20px]">
              {total_blog}
            </span>
          </button>
        ))}
      </div>

      <div className="p-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredBlogs.map((blog, idx) => (
          <div
            key={idx}
            className="group rounded-xl overflow-hidden bg-[#f8fbfd] shadow-md transition-transform duration-300"
          >
            <div className="relative">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-60 object-cover rounded-t-xl"
              />

              <div className="absolute top-0 right-0 bg-white text-sm text-blue-600 rounded-r-t-xl -xl font-medium px-3 py-2  shadow-md flex items-center gap-1">
                {blog.read_time_minute || "N/A"} min read
              </div>

              <div className="absolute bottom-3 right-3 flex gap-2 flex-wrap">
                {blog.categories?.map((cat) => (
                  <span
                    key={cat.slug}
                    className="bg-white text-xs text-gray-700 px-3 py-1 rounded-full font-medium shadow-sm"
                  >
                    {cat.name}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white p-4 pt-10 -mt-6 relative z-10 transition-transform duration-500 group-hover:-translate-y-10 rounded-b-xl">
              <div className="flex items-center gap-3 mb-3">
                <img
                  src={blog.author?.image}
                  alt={blog.author?.full_name}
                  className="w-9 h-9 rounded-full object-cover"
                />
                <div className="text-sm">
                  <p className="font-medium text-gray-800">
                    {blog.author?.full_name || "Unknown Author"}
                  </p>
                  <p className="text-gray-500 text-xs">
                    {new Date(blog.created_at).toLocaleDateString()}
                  </p>
                </div>
              </div>

              <h3 className="text-lg font-semibold text-gray-800 leading-snug">
                {blog.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllBlogs;
