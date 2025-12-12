import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/database/db";
import Blog from "@/database/blogSchema";

export async function GET(
  _req: NextRequest,
  { params }: { params: { slug: string } }
) {
  await connectDB();

  const { slug } = params;

  try {
    const blog = await Blog.findOne({ slug }).orFail();

    return NextResponse.json(blog, { status: 200 });
  } catch (err) {
    console.error("blog page error:", err);
    return NextResponse.json(
      { message: "Blog not found." },
      { status: 404 }
    );
  }
}

