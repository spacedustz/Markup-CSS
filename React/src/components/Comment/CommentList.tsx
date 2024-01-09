import React from "react";
import {CommentListProps} from "../../model/Comment.ts";

const CommentList: React.FC<CommentListProps> = ({ comments }) => (
    <div>
        <h2>피드백 목록</h2>
        <ul>
            {comments.map((comment, index) => (
                <li key={index}>{comment}</li>
            ))}
        </ul>
    </div>
);

export default CommentList;