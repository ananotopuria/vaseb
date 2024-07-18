/* eslint-disable prettier/prettier */

import React from 'react';
import styles from './ConnectVaseb.module.css';

interface ImageBoxProps {
  src: string;
  alt: string;
  isHidden?: boolean;
}

const ImageBox: React.FC<ImageBoxProps> = ({ src, alt, isHidden }) => {
  return (
    <img
      className={isHidden ? styles.isHidden : ''}
      style={{ objectFit: 'cover', height: '100%' }}
      src={src}
      alt={alt}
    />
  );
};

export default ImageBox;
