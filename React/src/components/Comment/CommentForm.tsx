import React, {useState} from "react";
import {CommentFormProps} from "../../model/Comment.ts";

const CommentForm: React.FC<CommentFormProps> = ({ onAddComment }) => {
    const [newComment, setNewComment] = useState<string>('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNewComment(event.target.value);
    };

    const handleAddComment = () => {
        if (newComment.trim() !== '') {
            onAddComment(newComment);
            setNewComment('');
        }
    };

    return (
        <div>
            <h2>피드백 추가</h2>
            <input
                type="text"
                value={newComment}
                onChange={handleInputChange}
                placeholder="피드백을 입력 해주세요!!"
            />
            <button onClick={handleAddComment}>추가</button>
        </div>
    );
};

export default CommentForm;