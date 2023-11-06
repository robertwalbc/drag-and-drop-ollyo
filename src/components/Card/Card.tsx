import React, { DragEvent, DragEventHandler } from 'react';
import { CheckDiv } from './Card.styles';
import Checkbox from '../Checkbox/Checkbox';

interface CardProps {
    image: string;
    /* eslint-disable no-unused-vars */
    onDragStart: (e: DragEvent<HTMLImageElement>) => void;
    onDragEnd: DragEventHandler<HTMLImageElement>;
    hasSelectedImage: boolean;
    handleSelectImage: (index: number) => void;
}

function Card({ image, onDragStart, onDragEnd, handleSelectImage, hasSelectedImage }: CardProps ) {
    return (
        <>
            <CheckDiv><Checkbox handleSelectImage={handleSelectImage} hasSelectedImage={hasSelectedImage} /></CheckDiv>
            <img 
                onDragStart={onDragStart}
                onDragEnd={onDragEnd}
                draggable 
                src={image} 
                alt="Card" 
            />
        </>
    );
}

export default Card;