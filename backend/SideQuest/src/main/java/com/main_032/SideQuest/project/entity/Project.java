package com.main_032.SideQuest.project.entity;

import com.main_032.SideQuest.member.entity.Member;
import com.main_032.SideQuest.util.entity.BaseEntity;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;

import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@NoArgsConstructor
public class Project extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private Long memberId;

    @Column
    private String title;

    @Column
    private String content;

    @Column
    private String writerPosition;

    @Column
    private LocalDateTime startDate;

    @Column
    private LocalDateTime endDate;

    @Column
    private String thumbnailImgUrl;

    @Column
    private int views;

    @Column
    private ProjectStatus status;

    @Column
    private int totalLikes;


    @Column(columnDefinition = "TINYINT")
    private boolean deleted;


    public Project(String title,
                   String content,
                   String writerPosition,
                   LocalDateTime startDate,
                   LocalDateTime endDate,
                   String thumbnailImgUrl) {
        this.title = title;
        this.content = content;
        this.writerPosition = writerPosition;
        this.startDate = startDate;
        this.endDate = endDate;
        this.thumbnailImgUrl = thumbnailImgUrl;
    }

    public void updateMemberId(Long memberId) {
        this.memberId = memberId;
    }
}
