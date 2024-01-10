package com.apiserver;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

@Getter @Service
@Entity
@NoArgsConstructor
public class Comment {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String comment;
    private String createdAt;

    public Comment(String comment, String createdAt) {
        this.comment = comment;
        this.createdAt = createdAt;
    }

    public static Comment createOf(String comment) {
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH시 mm분 ss초");
        return new Comment(comment, LocalDateTime.now().format(formatter).toString());
    }
}
