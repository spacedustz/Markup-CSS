import styled from "styled-components";

export const Nav = styled.a`
    text-decoration: none; // 텍스트의 Decoration을 없애줌, ex: a 태그의 링크 밑줄 없애기
    color: black;
    margin-right: 15px;
    
    &:hover {
        text-decoration: underline;
        transition: color 0.5s; // Hover 시 부드러운 연출
        color: cornflowerblue;
    }
`;
