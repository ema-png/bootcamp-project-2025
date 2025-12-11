import { IComment } from "@/database/blogSchema"
import style from './comments.module.css'

type CommentProps = {
    comment: IComment;
}

function parseCommentTime(time: Date){

	const parsedDate = new Date(time).toLocaleString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",    
        minute: "2-digit",
    });

    return parsedDate
}

function Comment({ comment }: CommentProps) {
    return (
        <div className= {style.commentboxes}>
            <div className = {style.header}>
                <h4 className = {style.username}> {comment.user} </h4>
                <span className = {style.time}>{parseCommentTime(comment.time)}</span>
            </div>
            
            <p className = {style.commenttext}>
                {comment.comment}
            </p>
            
        </div>
    );
}

export default Comment;