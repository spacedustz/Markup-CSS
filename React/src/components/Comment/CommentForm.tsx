import React, { useState } from 'react';
import styled from "styled-components";

interface CommentFormProps {
    onAddComment: (comment: string) => void;
}

const InputStyle = styled.input`
    border-radius: 5px;
    width: 200px;
    height: 22px;
    border: 1px solid #dfe1e5;
    text-align: center;
`;

const ButtonStyle = styled.button`
    border: 1px solid;
    border-radius: 4px;
    font-family: Apple SD Gothic Neo,arial,sans-serif;
    font-size: 14px;
    margin: 11px 4px;
    padding: 0 16px;
    line-height: 27px;
    height: 32px;
    min-width: 54px;
    text-align: center;
    cursor: pointer;
    user-select: none;

    &:hover {
        box-shadow: 0 1px 1px rgba(0,0,0,.1);
        background-color: #f8f9fa;
        border: 1px solid #dadce0;
        color: #202124;
    }
`;

const CommentContainer = styled.div`
    
`;

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
        <CommentContainer>
            <h3>피드백 추가</h3>
            <InputStyle
                type="text"
                value={newComment}
                onChange={handleInputChange}
                placeholder="피드백을 입력해주세요!!"
            />
            <ButtonStyle onClick={handleAddComment}>추가</ButtonStyle>
        </CommentContainer>
    );
};

export default CommentForm;