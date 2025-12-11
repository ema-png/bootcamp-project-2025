import React from "react";
import style from "./portfolioEntry.module.css";
import Link from "next/link";
import Image from "next/image";

export default function PortfolioEntry(){
    return(
        <div className = {style.project}>
            <div className = {style.projectimage}>
                <Link href="/">
                    <Image src="/personalwebsite.png" alt="emma's website" width = {700} height = {700}>
                    </Image>
                </Link>
            </div>
            <div className = {style.projectdetails}>
                <p className = {style.projectname}>
                     Personal Website
                </p>
                <p className = {style.projectdescription}>
                    Project for Hack4Impact application, made using HTML, CSS, and React
                </p>
                <p className = {style.projectLink}>
                <Link href="/">click me to view!</Link>
                </p>
            </div>
        </div>
    )
}