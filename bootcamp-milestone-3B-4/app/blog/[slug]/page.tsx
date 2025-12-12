// app/blog/[slug]/page.tsx
import BlogPageComponent from "@/components/blogPage";
import Comment from "@/components/comments";
import CommentForm from "@/components/commentForm";
import type { IComment } from "@/database/blogSchema";

type Props = {
  params: { slug: string };
};

async function getBlog(slug: string) {
  try {
    const res = await fetch(`/api/blog/${slug}`, { cache: "no-store" });

    if (!res.ok) {
      console.error("Failed to fetch blog:", res.status);
      return null;
    }

    return res.json();
  } catch (err) {
    console.error("GET BLOG ERROR:", err);
    return null;
  }
}



export default async function BlogPage({ params }: Props) {
  const { slug } = params;
  const blog = await getBlog(slug);

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <main>
      <BlogPageComponent
        key={blog._id} // or blog.slug if you prefer
        title={blog.title}
        date={new Date(blog.date).toLocaleDateString()}
        image={blog.image}
        imageAlt={blog.imageAlt}
        description={blog.content} // or blog.description depending on component
      />

      <CommentForm slug={slug} />

      {blog.comments && blog.comments.length > 0 && (
        <section className="commentbox">
          <h3 className="commenttitle">Comments</h3>
          {blog.comments.map((comment: IComment, index: number) => (
            <Comment key={index} comment={comment} />
          ))}
        </section>
      )}
    </main>
  );
}
