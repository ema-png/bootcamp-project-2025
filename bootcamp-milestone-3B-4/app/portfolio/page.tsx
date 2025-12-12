import { Suspense } from 'react';
import connectDB from "@/database/db";
import PortfolioModel from "@/database/portfolioSchema";
import PortfolioEntry from '@/components/portfolioEntry';
import Comment from "@/components/comments";
import CommentForm from '@/components/commentFormPortfolio';
import type { IComment } from "@/database/blogSchema";

async function getPortfolioEntries(){
  await connectDB()

  try {
      const portfolio_entries = await PortfolioModel.find().sort({ date: -1 }).lean().orFail()
      return portfolio_entries
  } catch (err) {
        console.error(err)
      return null
  }
}

export default async function Portfolio() {
  const portfolio_entries = await getPortfolioEntries();

  if (!portfolio_entries) {
        return (
        <main>
            <h1 className='pagetitle'> Loading Error</h1>
        </main>
        );
    }
  
  return (
    <main>
      <h1 className="pagetitle">
        ₊✩‧₊˚Emma&apos;s Portfolio˚₊✩‧₊
      </h1>
      <Suspense fallback={<Loading />}>
      <div>
        {portfolio_entries.map((pe) => 
          <section key = {String(pe._id)}>
            <PortfolioEntry
              _id = {String(pe._id)}
              title = {pe.title}
              date = {new Date(pe.date).toLocaleDateString()}
              description = {pe.description}
              image = {pe.image}
              imageAlt = {pe.imageAlt}
              slug = {pe.slug}
            />

            <section className = "portfolioCommentBox">

              <CommentForm slug={pe.slug} />

              <section className = "portfolioComments">
                {pe.comments && pe.comments.length > 0 && (
                  <div>
                    {pe.comments.map((c: IComment, idx: number) => (
                    <Comment key={idx} comment={c} />
                    ))}
                  </div>
                )}
              </section>
            </section>
            <br></br>      
          </section>
        )}
      </div>
      </Suspense>
    </main>
  );
}
      
function Loading() {
    return <h1 className = "pagetitle"> Loading...! </h1>;
    
}
