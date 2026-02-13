import React from 'react';

interface ImageFrameProps {
  src: string;
  alt: string;
}

const ImageFrame: React.FC<ImageFrameProps> = ({ src, alt }) => {
  return (
    <div className="image-frame">
      <img 
        src={src} 
        alt={alt}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: 'block'
        }}
      />
    </div>
  );
};

export default ImageFrame;