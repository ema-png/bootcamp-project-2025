import BlogPageComponent from "@/components/blogPage"
import Comment from "@/components/comments";
import CommentForm from "@/components/commentForm";
import type { IComment } from "@/database/blogSchema";

type Props = {
  params: Promise<{ slug: string }>;
};

async function getBlog(slug: string) {
  try {

    const getBaseUrl = () => {
      if (process.env.VERCEL_URL) {
        return `https://${process.env.VERCEL_URL}`;
      }
      return 'http://localhost:3000';
    };

    const base = getBaseUrl();

    const res = await fetch(`/blog/${slug}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch blog");
    }

    return res.json();
  } catch (err) {
    console.error("GET BLOG ERROR:", err);
    return null;
  }
}

export default async function BlogPage(props: Props) {
  
  const { slug } = await props.params;
  const blog = await getBlog(slug);

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <main>
      <BlogPageComponent
        key={blog.key}
        title={blog.title}
        date={new Date(blog.date).toLocaleDateString()}
        image={blog.image}
        imageAlt={blog.imageAlt}
        description={blog.content}
      />

      <CommentForm slug = {slug}/>

      {blog.comments && blog.comments.length > 0 && (
        <section className = "commentbox">
          <h3 className = "commenttitle">Comments</h3>
          {blog.comments.map((comment: IComment, index: number) => (
            <Comment key={index} comment={comment} />
          ))}
        </section>
      )}

    </main>
  );
}
