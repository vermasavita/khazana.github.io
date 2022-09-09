import { useState } from "react";
import { BlogCard } from "../../components/blogs/BlogCard";
import { blogData } from "../../data/blog";
const Blog = () => {
  const [data, setData] = useState(blogData);
  return (
    <div className="main" id="achievements">
      <div className="achievement-main-div ">
        <div className="achievement-header">
          <h1 className="heading achievement-heading">Blogs</h1>
        </div>
        <div className="achievement-cards-div">
          {data.map((blog) => (
            <BlogCard key={blog.id} {...blog} />
          ))}
        </div>
      </div>
    </div>
  );
};

export { Blog };
