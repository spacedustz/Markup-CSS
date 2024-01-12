// CommentList.tsx
import React from 'react';
import {CommentListProps} from "../../model/Comment.ts";
import styled from "styled-components";

const CommentStyle = styled.div`
    table {
        border-collapse: collapse;
        margin-top: 20px;
        font-size: 14px;
    }

    th, td {
        border: 1px solid #ddd;
        padding: 12px;
        text-align: left;
    }

    th {
        background-color: #f2f2f2;
    }
    
    td:nth-child(1) {
        width: 5%;
    }

    td:nth-child(2) { /* Comment column */
        width: 25%;
    }

    td:nth-child(3) { /* CreatedAt column */
        width: 10%;
    }
`;

const CommentList: React.FC<CommentListProps> = ({ comments }) => (
    <CommentStyle>
        <table>
            <thead>
            <tr>
                <th>댓글번호</th>
                <th>댓글</th>
                <th>작성일자</th>
            </tr>
            </thead>
            <tbody>
            {comments.map((comment, index) => (
                <tr key={index}>
                    <td>{comment.id}</td>
                    <td>{comment.comment}</td>
                    <td>{comment.createdAt}</td>
                </tr>
            ))}
            </tbody>
        </table>
    </CommentStyle>
);

export default CommentList;