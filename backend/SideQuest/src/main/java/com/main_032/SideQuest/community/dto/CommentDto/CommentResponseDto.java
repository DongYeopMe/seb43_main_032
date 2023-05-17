package com.main_032.SideQuest.community.dto.CommentDto;

import com.main_032.SideQuest.member.dto.GetMemberResponseDto;
import lombok.AllArgsConstructor;
import lombok.Getter;

import java.time.LocalDateTime;

@Getter
@AllArgsConstructor
public class CommentResponseDto {
    private GetMemberResponseDto getMemberResponseDto;
    private int totalLikes;
    private String content;
    private LocalDateTime createAt;
}