import React from "react";
import style from "./portfolioEntry.module.css";
import Link from "next/link";
import Image from "next/image";
import { Portfolio } from "../app/portfolioData"

export default function PortfolioEntry(props : Portfolio){
    return(
        <div className = {style.project}>
            <div className = {style.projectimage}>
                <Link href="/">
                    <Image src={props.image} alt={props.imageAlt} width = {700} height = {700}>
                    </Image>
                </Link>
            </div>
            <div className = {style.projectdetails}>
                <p className = {style.projectname}>
                     {props.title}
                </p>
                <p className = {style.projectdescription}>
                    {props.description}
                </p>
                <p className = {style.projectLink}>
                <Link href={props.slug}>click me to view!</Link>
                </p>
                <br></br>
            </div>
        </div>
    )
}