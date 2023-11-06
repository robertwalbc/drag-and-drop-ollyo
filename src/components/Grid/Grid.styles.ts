import styled from "styled-components";

interface GridItemProps {
    big?: boolean;
    isCheckboxSelected?: boolean;
}

export const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr); 
    grid-template-rows: auto auto auto; 
    grid-gap: 10px; 
    margin: 50px;
    margin-top: -40px;
`;

export const GridItem = styled.div<GridItemProps>`
    width: 100%;
    height: 100%;
    border: 1px solid #333;
    border-radius: 5px;
    overflow: hidden;
    position: relative;
    border-color: #d3d3d3;

    
    &:hover {
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
        border: 1px dashed #666;    
        filter: brightness(70%);
    }

    img {
        width: 100%;
        height: 100%;
        display: block;
        object-fit: cover;
        transition: opacity 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
    }

    ${({ big }) => big && `
        grid-column: span 2;
        grid-row: span 2;
    `}

    .dragging{
        opacity: 0.5;
    }

    ${({ isCheckboxSelected }) => isCheckboxSelected ? `
        input[type='checkbox'] {
        display: block;
        }`
        : `
        input[type='checkbox'] {
        display: none;
        }`
    }
    
    &:hover input[type='checkbox'] {
        display: block;
    }
    `;

export const UploadInput = styled.input`
    width: 100%; 
    height: 100%; 
    &[type='file'] {
        opacity: 0;
        position: absolute;
        z-index: -1;
    }
    `;

export const UploadLabel = styled.label`
    padding-right: 100%;
    padding-left: 100%;
    padding-top: 50%;
    background-color: #007bff;
    color: white;
    border-radius: 5px;
    width: 100%;
    height: 100%;
    cursor: pointer;
`;

export const InputContainer = styled.div`
    width: 100%;
    height: 100%; 
    display: flex;
    justify-content: center;
    align-items: center;
`;