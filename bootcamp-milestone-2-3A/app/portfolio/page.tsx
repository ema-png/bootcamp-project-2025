import { Suspense } from 'react';
import connectDB from "@/database/db";
import PortfolioModel from "@/database/portfolioSchema";
import PortfolioEntry from '@/components/portfolioEntry';

async function getPortfolioEntries(){
  await connectDB() // function from db.ts before

  try {
      // query for all blogs and sort by date
      const portfolio_entries = await PortfolioModel.find().sort({ date: -1 }).orFail()
      // send a response as the blogs as the message
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
            <PortfolioEntry
                key = {String(pe._id)}
                _id = {String(pe._id)}
                title = {pe.title}
                date = {new Date(pe.date).toLocaleDateString()}
                description = {pe.description}
                image = {pe.image}
                imageAlt = {pe.imageAlt}
                slug = {pe.slug}
            />
        )}
      </div>
      </Suspense>
    </main>
  );
}
      
function Loading() {
    return <h1 className = "pagetitle"> Loading...! </h1>;
    
}
