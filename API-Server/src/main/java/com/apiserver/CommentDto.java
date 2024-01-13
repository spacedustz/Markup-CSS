package com.apiserver;

import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class CommentDto {
    private String comment;

    @Getter
    public static class Delete {
        private int commentId;
    }
}
