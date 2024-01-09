import React, {useEffect, useState} from "react";
import CommentList from "./CommentList.tsx";
import CommentForm from "./CommentForm.tsx";

const CommentApp: React.FC = () => {
    const [comments, setComments] = useState<string[]>([]);

    useEffect(() => {
        // 로컬 스토리지에서 댓글 데이터 불러오기
        const storedComments = localStorage.getItem('comments');
        if (storedComments) {
            setComments(JSON.parse(storedComments));
        }
    }, []);

    useEffect(() => {
        // 댓글 데이터가 변경될 때마다 로컬 스토리지에 저장
        localStorage.setItem('comments', JSON.stringify(comments));
    }, [comments]);

    const handleAddComment = (comment: string) => {
        setComments([...comments, comment]);
    };

    return (
        <div>
            <CommentForm onAddComment={handleAddComment} />
            <CommentList comments={comments} />
        </div>
    );
};

export default CommentApp;