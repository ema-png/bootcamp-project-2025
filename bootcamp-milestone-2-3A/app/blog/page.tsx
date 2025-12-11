import connectDB from "@/database/db";
import BlogModel from "@/database/blogSchema";
import BlogPreview from '@/components/blogPreview';

async function getBlogs(){
	await connectDB() // function from db.ts before

	try {
			// query for all blogs and sort by date
	    const blogs = await BlogModel.find().sort({ date: -1 }).orFail()
			// send a response as the blogs as the message
	    return blogs
	} catch (err) {
        console.error(err)
	    return null
	}
}


export default async function BlogPage() {
    const blogs = await getBlogs(); // fetch from MongoDB

    if (!blogs) {
        return (
        <main>
            <h1>loading error</h1>
        </main>
        );
    }
  
    return (
            <main>
                <h1 className="pagetitle">
                    ₊✩‧₊˚Emma&apos;s Blog˚₊✩‧₊
                </h1>
                <p className="sub_title">
                    read for life updates!
                </p>
                <div className="blogentry">
                    {blogs.map((blog) => 
                        <BlogPreview
                            key = {String(blog._id)}
                            _id = {String(blog._id)}
                            title = {blog.title}
                            date = {new Date(blog.date).toLocaleDateString()}
                            description = {blog.description}
                            image = {blog.image}
                            imageAlt = {blog.imageAlt}
                            slug = {blog.slug}
                            comments={blog.comments}
                        />
		            )}
                </div>
            </main>
  );
}

