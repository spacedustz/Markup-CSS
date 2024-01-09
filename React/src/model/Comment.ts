export interface CommentFormProps {
    onAddComment: (comment: string) => void;
}

export interface CommentListProps {
    comments: string[];
}