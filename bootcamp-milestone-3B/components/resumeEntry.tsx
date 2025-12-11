import React from "react";
import style from "./resumeEntry.module.css";
import { ResumeEntry } from "../app/resumeEntries"

export default function Resume(props : ResumeEntry){
    return(
        <div>
            <div className = {style.entry}>
                <h3 className ={style.entrytitle}>
                    {props.entry_title}
                </h3>
                <p className={style.entryinfo}>
                    {props.entry_info}
                </p>
                <p className={style.entrydescription}>
                    {props.entry_description}                
                </p>
            </div>
        </div>
    )
}