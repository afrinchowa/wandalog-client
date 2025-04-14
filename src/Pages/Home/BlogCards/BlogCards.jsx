import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import BlogCard from "./BlogCard";
import SectionTitle from "../../../components/SectionTitle";

const BlogCards = () => {
  const loadedBlogs = useLoaderData();
  const [blogs, setBlogs] = useState(loadedBlogs);
  return (
    <div className="m-20">
      <SectionTitle
        heading={" Blog Section "}
        subHeading={"Let's make the imaginarie more enhanced"}
      ></SectionTitle>
      <div className="grid md:grid-cols-1 gap-5">
        {blogs.map((blog) => (
          <BlogCard
            key={blog._id}
            blog={blog}
            blogs={blogs}
            setBlogs={setBlogs}
          ></BlogCard>
        ))}
      </div>
    </div>
  );
};

export default BlogCards;
