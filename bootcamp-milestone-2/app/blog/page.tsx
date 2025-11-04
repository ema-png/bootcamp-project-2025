import React from "react";
import BlogPreview from '@/components/blogPreview';
import blogs from "../blogData"



export default function Blog() {
  return (
            <main>
                <h1 className="pagetitle">
                    ₊✩‧₊˚Emma&apos;s Blog˚₊✩‧₊
                </h1>
                <p className="sub_title">
                    read for life updates!
                </p>
                <div className="blogentry">
                    {blogs.map(blog => 
                        <BlogPreview
                            title = {blog.title}
                            date = {blog.date}
                            description = {blog.description}
                            image = {blog.image}
                            imageAlt = {blog.imageAlt}
                            key = {blog.slug}
                        />
		            )}
                </div>
            </main>
  );
}
