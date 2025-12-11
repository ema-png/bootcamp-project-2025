import mongoose, { Schema } from "mongoose";
import { IComment } from "./blogSchema";

// typescript type (can also be an interface)
type PortfolioModel = {
	title: string;
	slug: string; 
	date: Date;
	description: string; // for preview
	content: string; // text content for individual blog page
	image: string; // url for string in public
	imageAlt: string; // alt for image
  comments: IComment[]; // array for comments
};

// mongoose schema 
const portfolioSchema = new Schema<PortfolioModel>({
    title: { type: String, required: true },
    slug: { type: String, required: true },
    date: { type: Date, required: false, default: new Date()},
    description: { type: String, required: true },
    image: { type: String, required: true },
    imageAlt: { type: String, required: true },
    comments : [{
        user : { type: String, required: true },
        comment : { type: String, required: true },
        time : { type: Date, required: true }
    }]
})

// defining the collection and model
const Portfolio =
  mongoose.models["portfolio_entries"] ||
  mongoose.model("portfolio_entries", portfolioSchema);

export default Portfolio;
