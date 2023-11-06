import { useState, DragEvent, ChangeEvent } from 'react';

export const useGrid = () => {
    const [gridImages, setGridImages] = useState<string[]>([]);
    const [selectedImages, setSelectedImages] = useState<Set<number>>(new Set());
  
    const onDragStart = (e: DragEvent<HTMLImageElement>, fromIndex: number) => {
      const imgElement = e.currentTarget;
      const fromIndexToString = fromIndex.toString(); 
      imgElement.classList.add('dragging');
      e.dataTransfer.setData('fromIndex', fromIndexToString);
    };
  
    const onDragEnd = (e: DragEvent<HTMLImageElement>) => {
      e.currentTarget.classList.remove('dragging');
    };
  
  
    const onDrop = (e: DragEvent<HTMLImageElement>, toIndex: number) => {
      const fromIndex: string = e.dataTransfer.getData('fromIndex');
      const fronIndexNumber = Number(fromIndex);
      const newImages = [...gridImages];
      [newImages[fronIndexNumber], newImages[toIndex]] = [newImages[toIndex], newImages[fronIndexNumber]];
      setGridImages(newImages);
    };
  
    const onDragOver = (e: DragEvent<HTMLImageElement>) => {
      e.preventDefault();
    };
  
    const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
      let file = null;
      if('target' in e) {
        if (e.target?.files) {
          file = e.target?.files[0];
        }
      }
      if (file) {
        const newImageURL = URL.createObjectURL(file);
        setGridImages([...gridImages, newImageURL]);
      }
    };
  
    const handleRemoveSelected = () => {
      setGridImages(gridImages.filter((_, index) => !selectedImages.has(index)));
      setSelectedImages(new Set()); // Clear selection after removal
    };
  
    const handleSelectImage = (index: number) => {
      const newSelection = new Set(selectedImages);
      if (newSelection.has(index)) {
        newSelection.delete(index);
      } else {
        newSelection.add(index);
      }
      setSelectedImages(newSelection);
    };
  
  return {
    onDragStart,
    onDragEnd,
    onDrop,
    onDragOver,
    handleImageUpload,
    handleRemoveSelected,
    handleSelectImage,
    gridImages,
    selectedImages,
  };
};
