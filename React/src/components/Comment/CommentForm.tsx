import React, { useState } from 'react';

interface CommentFormProps {
    onAddComment: (comment: string) => void;
}

const CommentForm: React.FC<CommentFormProps> = ({ onAddComment }) => {
    const [newComment, setNewComment] = useState<string>('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target && event.target.value !== null && event.target.value !== undefined) {
            setNewComment(event.target.value);
        }
    };

    const handleAddComment = () => {
        if (newComment.trim() !== '') {
            onAddComment(newComment);
            setNewComment('');
            console.log("댓글을 백엔드 서버로 전송합니다. - 댓글 내용 : " + newComment)
        } else {
            alert('빈 값은 전송이 안됩니다! 하하하');
        }
    };

    return (
        <div>
            <h2>피드백 추가</h2>
            <input
                type="text"
                value={newComment}
                onChange={handleInputChange}
                placeholder="피드백을 입력해주세요!!"
            />
            <button onClick={handleAddComment}>추가</button>
        </div>
    );
};

export default CommentForm;