import style from "@/components/blogPage.module.css"
import Image from "next/image";
import { BlogPages } from "../app/blogPageData"

export default function BlogPage(props: BlogPages){
    return (
        <div className={style.container}>
            <h1 className={style.blogtitle}>
                {props.title}   
            </h1>
            <h2 className = {style.blogdate}>
                {props.date}
            </h2>
            <div className = {style.blogentry}>
                <div className = {style.blogimage}>
                    <Image src = {props.image} alt = {props.imageAlt} width = {500} height = {400}>
                    </Image>
                </div>
                <div className={style.blogdescription}>
                    {props.description}
                </div>
            </div> 
        </div>
    )
}