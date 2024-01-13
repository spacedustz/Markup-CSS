package com.apiserver;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/comments")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://13.125.251.209:3000")
//@CrossOrigin(origins = "http://localhost:3000")
public class CommentController {
    private final CommentService commentService;

    @GetMapping
    public ResponseEntity<List<Comment>> getComments() {

        return ResponseEntity.ok(commentService.getAll());
    }

    @PostMapping
    public ResponseEntity<String> addComment(@RequestBody CommentDto comment) {
        commentService.saveComment(comment);
        return ResponseEntity.ok("댓글이 성공적으로 추가 되었습니다");
    }

    @DeleteMapping
    public void deleteComment(@RequestBody CommentDto.Delete dto) {
        commentService.deleteOne(dto);
    }
}
