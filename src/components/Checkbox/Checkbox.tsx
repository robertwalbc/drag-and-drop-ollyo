import React, { ChangeEventHandler } from 'react';
import CheckboxWrapper from './Checkbox.styles';

interface CheckboxProps {
    hasSelectedImage: boolean;
    // eslint-disable-next-line no-unused-vars
    handleSelectImage:  (index: number) => void;
}
function Checkbox({ hasSelectedImage, handleSelectImage }: CheckboxProps) {

    return (
        <CheckboxWrapper>
            <input 
                type="checkbox" 
                checked={hasSelectedImage} 
                onChange={(handleSelectImage as unknown as ChangeEventHandler<HTMLInputElement>)} 
            />
            <span />
        </CheckboxWrapper>
    );
}

export default Checkbox;