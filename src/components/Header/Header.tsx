/* eslint-disable react/button-has-type */
import React from 'react';
import { HeaderContainer, CountText, DeleteButton, GalleryText } from './Header.styles';

interface CheckboxProps {
    imagesSelected: number;
    handleRemoveSelected:  () => void;
}
function Header({ imagesSelected, handleRemoveSelected }: CheckboxProps) {
    return (
        <HeaderContainer>
            {imagesSelected === 0 ? (
                <GalleryText>Gallery</GalleryText>
            ) : (
            <>
                <CountText>{imagesSelected} Files Selected</CountText>
                <DeleteButton onClick={handleRemoveSelected} disabled={imagesSelected === 0}>
                    {imagesSelected === 1 ? 'Delete file' : 'Delete files'}
                </DeleteButton>
            </>
            )}
        </HeaderContainer>
    );
}

export default Header;
