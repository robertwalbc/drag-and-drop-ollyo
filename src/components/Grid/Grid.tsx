import React, { DragEvent } from 'react'
import { GridContainer, GridItem, InputContainer, UploadInput, UploadLabel } from './Grid.styles';
import Card from '../Card/Card';
import Header from '../Header/Header';
import { useGrid } from './useGrid';

function Grid() {
  const {
    onDragStart,
    onDragEnd,
    onDragOver,
    onDrop,
    handleImageUpload,
    handleRemoveSelected,
    handleSelectImage,
    gridImages,
    selectedImages,
  } = useGrid()

  return (
    <>
      <Header handleRemoveSelected={handleRemoveSelected} imagesSelected={selectedImages.size}/>
      <GridContainer>
          {gridImages.map((img, index)=>
            <GridItem 
              onDrop={(e: DragEvent<HTMLImageElement>) => onDrop(e, index)}
              onDragOver={onDragOver}
              big={index === 0}
              isCheckboxSelected={selectedImages.has(index)}
            >
              <Card
                onDragStart={(e: DragEvent<HTMLImageElement>) => onDragStart(e, index)}
                onDragEnd={onDragEnd}
                image={img} 
                hasSelectedImage={selectedImages.has(index)}
                handleSelectImage={() => handleSelectImage(index)}
              />
            </GridItem>)}
            <GridItem>
              <InputContainer>
                <UploadInput
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                id='image-upload'
                disabled={gridImages.length === 11}
                />
                <UploadLabel 
                htmlFor="image-upload"
                >Upload Image</UploadLabel>
              </InputContainer>
          </GridItem>
      </GridContainer>
    </>
  )
}
export default Grid;
