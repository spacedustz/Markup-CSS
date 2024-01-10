export interface Comment {
    id: number
    comment: string
    createdAt: string
}

export interface CommentListProps {
    comments: Comment[];
}