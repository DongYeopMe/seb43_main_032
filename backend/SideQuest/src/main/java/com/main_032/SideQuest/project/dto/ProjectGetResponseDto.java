package com.main_032.SideQuest.project.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

import java.time.LocalDateTime;
import java.util.List;

@Getter
public class ProjectGetResponseDto {
    private Long projectId;
    private Long memberId;

    private String title;
    private String content;
    private String writerPosition;

    private String startDate;
    private String endDate;

    private String thumbnailImageUrl;

    private int views;
    private String status;
    private int totalLikes;

    private LocalDateTime createdAt;

    public ProjectGetResponseDto(Long projectId, Long memberId, String title, String content, String writerPosition, String startDate, String endDate, String thumbnailImageUrl, int views, String status, int totalLikes, LocalDateTime createdAt) {
        this.projectId = projectId;
        this.memberId = memberId;
        this.title = title;
        this.content = content;
        this.writerPosition = writerPosition;
        this.startDate = startDate;
        this.endDate = endDate;
        this.thumbnailImageUrl = thumbnailImageUrl;
        this.views = views;
        this.status = status;
        this.totalLikes = totalLikes;
        this.createdAt = createdAt;
    }

    private List<ProTechStackResponseDto> proTechStackResponseDtoList;
    private List<ProFieldResponseDto> proFieldResponseDtoList;
    private List<ProPositionCrewResponseDto> proPositionCrewResponseDtoList;
    private List<ProAcceptedCrewResponseDto> proAcceptedCrewResponseDtoList;

    public void updateProTechStackResponseDtoList(List<ProTechStackResponseDto> proTechStackResponseDtoList) {
        this.proTechStackResponseDtoList = proTechStackResponseDtoList;
    }

    public void updateProFieldResponseDtoList(List<ProFieldResponseDto> proFieldResponseDtoList) {
        this.proFieldResponseDtoList = proFieldResponseDtoList;
    }

    public void updateProPositionCrewResponseDtoList(List<ProPositionCrewResponseDto> proPositionCrewResponseDtoList) {
        this.proPositionCrewResponseDtoList = proPositionCrewResponseDtoList;
    }

    public void updateProAcceptedCrewResponseDtoList(List<ProAcceptedCrewResponseDto> proAcceptedCrewResponseDtoList) {
        this.proAcceptedCrewResponseDtoList = proAcceptedCrewResponseDtoList;
    }
}
