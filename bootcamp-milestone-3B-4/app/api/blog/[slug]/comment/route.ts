import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/database/db";
import Blog from "@/database/blogSchema";
import type { IComment } from "@/database/blogSchema";

export async function POST(
  req: NextRequest,
  context: { params: Promise<{ slug: string }> } 
) {
  await connectDB();

  const { slug } = await context.params;

  const { user, comment } = await req.json();

  if (!user || !comment) {
    return NextResponse.json(
      { error: "user, comment required" },
      { status: 400 }
    );
  }

  const newComment: IComment = {
    user,
    comment,
    time: new Date(),
  };

  try {
    const updatedBlog = await Blog.findOneAndUpdate(
      { slug },
      { $push: { comments: newComment } },
      { new: true }    
    ).orFail();

    console.log("updated comments:", updatedBlog.comments);

    return NextResponse.json(updatedBlog);
  } catch (err) {
    console.error("comment error:", err);
    return NextResponse.json("Blog not found.", { status: 404 });
  }
}
