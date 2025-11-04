import React from "react";
import style from "./portfolio.module.css";
/*mport { PortfolioEntry } from "../app/portfolioEntries"*/
import Link from "next/link";
import Image from "next/image";

export default function Portfolio(){
    return(
        <div className = {style.project}>
            <div className = {style.projectimage}>
                <Link href="index.html">
                    <Image src="./personalwebsite.png" alt="emma's website" width = {700} height = {700}>
                    </Image>
                </Link>
            </div>
            <div className = {style.projectdetails}>
                <p className = {style.projectname}>
                    <h2> <strong> Personal Website </strong> </h2> 
                </p>
                <p className = {style.projectdescription}>
                    Project for Hack4Impact application, made using HTML and CSS
                </p>
                <Link href="/">click me to see the project!</Link>
            </div>
        </div>
    )
}