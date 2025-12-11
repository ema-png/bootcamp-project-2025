import BlogPageComponent from "@/components/blogPage"

type Props = {
  params: Promise<{ slug: string }>;
};

async function getBlog(slug: string) {
  try {
    const res = await fetch(`http://localhost:3000/api/blog/${slug}`, {
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
    <BlogPageComponent
      key={blog.key}
      title={blog.title}
      date={new Date(blog.date).toLocaleDateString()}
      image={blog.image}
      imageAlt={blog.imageAlt}
      description={blog.content}
    />
  );
}
