import React from 'react';
import style from './blogPreview.module.css'
import Image from "next/image";
import { Blog } from "../app/blogData"

export default function BlogPreview(props: Blog) {
  return (
    <div className={style.div}>
      <div className = {style.blogabout}>
        <div className = {style.blogimage}>
			<Image src = {props.image} alt = {props.imageAlt} width = {500} height = {400}>
            </Image>
        </div>
        <div className = {style.blogtext}>
            <h3 className = {style.blogtitle}> 
                {props.title} 
            </h3>
            <div className = {style.bloginfo}>
                <p>
                    {props.description}
                </p>
                <p>
                    {props.date}
                </p>
            </div>
        </div>
      </div>
	</div>
  );
}