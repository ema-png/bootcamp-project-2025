// app/api/blog/[slug]/route.ts
import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/database/db";
import Blog from "@/database/blogSchema";

export async function GET(
  _req: NextRequest,
  context: { params: Promise<{ slug: string }> }
) {
  await connectDB();

  const { slug } = await context.params;
  console.log("🔑 [API] slug from params:", slug);

  try {
    console.log("🔍 [API] Blog.findOne({ slug })");
    const blog = await Blog.findOne({ slug }).orFail();
    console.log("✅ [API] Blog found:", {
      _id: blog._id?.toString?.(),
      title: blog.title,
      slug: blog.slug,
    });

    return NextResponse.json(blog);
  } catch (err) {
    console.error("💥 [API] blog page error for slug:", slug, err);
    return NextResponse.json("Blog not found.", { status: 404 });
  }
}
