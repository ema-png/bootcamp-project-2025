import React from "react";
import BlogPreview from '@/components/blogPreview';
import reversed_blogs from "../blogData"



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
                    {reversed_blogs.map(blog => 
                        <BlogPreview
                            title = {blog.title}
                            date = {blog.date}
                            description = {blog.description}
                            image = {blog.image}
                            imageAlt = {blog.imageAlt}
                            slug = {blog.slug}
                            key = {blog.key}
                        />
		            )}
                </div>
            </main>
  );
}
