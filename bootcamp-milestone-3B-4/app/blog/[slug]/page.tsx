// app/blog/[slug]/page.tsx

import BlogPageComponent from "@/components/blogPage";
import Comment from "@/components/comments";
import CommentForm from "@/components/commentForm";
import type { IComment } from "@/database/blogSchema";

type Props = {
  params: Promise<{ slug: string }>; // 👈 important: Promise
};

async function getBlog(slug: string) {
  try {
    const baseUrl =
      process.env.NODE_ENV === "development"
        ? "http://localhost:3000"
        : `https://${process.env.VERCEL_URL}`;

    console.log("🌍 [getBlog] NODE_ENV:", process.env.NODE_ENV);
    console.log("🌍 [getBlog] BASE URL:", baseUrl);

    const url = `${baseUrl}/api/blog/${slug}`;
    console.log("📡 [getBlog] Fetching URL:", url);

    const res = await fetch(url, {
      cache: "no-store",
    });

    console.log("📡 [getBlog] Status:", res.status);

    const text = await res.text();
    console.log("📡 [getBlog] Raw body:", text);

    if (!res.ok) {
      console.error("❌ [getBlog] Failed:", res.status, text);
      return null;
    }

    return JSON.parse(text);
  } catch (err) {
    console.error("💥 [getBlog] ERROR:", err);
    return null;
  }
}



export default async function BlogPage({ params }: Props) {
  const { slug } = await params; // 👈 THIS is the key fix
  console.log("🧩 [Page] Rendering for slug:", slug);

  const blog = await getBlog(slug);

  if (!blog) {
    console.log("⚠️ [Page] No blog returned from getBlog");
    return (
      <main>
        <h1>Blog not found</h1>
      </main>
    );
  }

  console.log("✅ [Page] Got blog:", {
    title: blog.title,
    slug: blog.slug,
  });

  return (
    <main>
      <BlogPageComponent
        key={blog.key ?? blog._id ?? blog.slug}
        title={blog.title}
        date={new Date(blog.date).toLocaleDateString()}
        image={blog.image}
        imageAlt={blog.imageAlt}
        description={blog.content}
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
