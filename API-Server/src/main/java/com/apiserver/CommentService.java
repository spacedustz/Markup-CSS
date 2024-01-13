package com.apiserver;

import jakarta.annotation.PostConstruct;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Slf4j
@Service
@RequiredArgsConstructor
@Transactional
public class CommentService {
    private final CommentRepository commentRepository;

    @PostConstruct
    public void init() {
        if (commentRepository.count() == 0) {
            commentRepository.save(Comment.createOf("첫 댓글!"));
        }
    }

    public void saveComment(CommentDto comment) {
        Comment entity = Comment.createOf(comment.getComment());
        commentRepository.save(entity);
    }

    @Transactional(readOnly = true)
    public List<Comment> getAll() {
        List<Comment> comments = commentRepository.findAll().stream().toList();

        return comments;
    }

    public void deleteOne(CommentDto.Delete dto) {
        commentRepository.deleteById((long) dto.getCommentId());
    }
}
