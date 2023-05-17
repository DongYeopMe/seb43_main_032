package com.main_032.SideQuest.community.entity;

import com.main_032.SideQuest.article.entity.Article;
import com.main_032.SideQuest.project.entity.Project;
import com.main_032.SideQuest.util.entity.BaseEntity;
import lombok.Builder;
import lombok.Getter;

import javax.persistence.*;
// 댓글

@Entity
@Getter
@Builder
public class Comment extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "COMMENT_ID")
    private Long id;

    @Column
    private Long memberId; //commentWriter

    @Column
    private Category category;

    @Column
    private String content;

    @Column
    private int totalLikes;

    @ManyToOne
    @JoinColumn(name = "ANSWER_ID")
    private Answer answer;

    @ManyToOne
    @JoinColumn(name = "ARTICLE_ID")
    private Article article;

    @ManyToOne
    @JoinColumn(name = "PROJECT_ID")
    private Project project;

    @Column(columnDefinition = "TINYINT")
    private boolean deleted;

    public Comment() {

    }
    public void setContent(String content) {
        this.content = content;
    }
    public void setDeleted(boolean deleted) {
        this.deleted = deleted;
    }
    public Comment(Long id, Long memberId, Category category, String content, int totalLikes,
                   Answer answer, Article article, Project project, boolean deleted) {
        this.id = id;
        this.memberId = memberId;
        this.category = category;
        this.content = content;
        this.totalLikes = totalLikes;
        this.answer = answer;
        this.article = article;
        this.project = project;
        this.deleted = deleted;
    }
    @Builder
    public Comment(Long id,
                   Long memberId,
                   Category category,
                   String content,
                   int totalLikes,
                   Article article,
                   Project project,
                   boolean deleted,
                   Answer answer) {
        this.id = id;
        this.memberId = memberId;
        this.category = category;
        this.content = content;
        this.totalLikes = totalLikes;
        this.article = article;
        this.project = project;
        this.deleted = deleted;
        this.answer = answer;
    }
}