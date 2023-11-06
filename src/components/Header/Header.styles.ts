import styled from "styled-components";

export const HeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 100px;
    border-bottom-color: #D0D4CA;
    margin-bottom: 10px;
    padding-left: 50px;
    padding-right: 50px;
    overflow: hidden;
`;

export const CountText = styled.span`
    font-size: 25px;
`;

export const DeleteButton = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    font-weight: bold;
    color: red;
    font-size: 15px;
`;

export const GalleryText = styled.span`
    font-size: 30px;
    font-weight: bold;
`;
