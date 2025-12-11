import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/database/db";
import Portfolio from "@/database/portfolioSchema";
import type { IComment } from "@/database/blogSchema";

export async function POST(req: NextRequest) {
  await connectDB();

  const {name, user, comment} = await req.json() as {
    name? : string;
    user? : string;
    comment?: string;
  }


  if (!name || !user || !comment) {
    return NextResponse.json(
      { error: "name, user, comment required" },
      { status: 400 }
    );
  }

  const newComment: IComment = {
    user,
    comment,
    time: new Date(),
  };

  try {
    const updatedPortfolio = await Portfolio.findOneAndUpdate(
      { name },
      { $push: { comments: newComment } },
      { new: true }        
    ).orFail();

    console.log("updated comments:", updatedPortfolio.comments);

    return NextResponse.json(updatedPortfolio);
  } catch (err) {
    console.error("comment error:", err);
    return NextResponse.json("portfolio entry not found.", { status: 404 });
  }
}
