import React, { createContext, useContext, useState } from 'react';
import {
  ImageLightboxModal,
  LightboxData,
} from '../components/ImageLightboxModal';

interface LightboxContextType {
  openLightbox: (src: string, alt: string) => void;
  closeLightbox: () => void;
}

const LightboxContext = createContext<LightboxContextType>({
  openLightbox: () => {},
  closeLightbox: () => {},
});

export const useLightbox = () => useContext(LightboxContext);

export const LightboxProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [currentImage, setCurrentImage] = useState<LightboxData | null>(null);

  const openLightbox = (src: string, alt: string) => {
    setCurrentImage({ src, alt });
  };

  const closeLightbox = () => {
    setCurrentImage(null);
  };

  return (
    <LightboxContext.Provider value={{ openLightbox, closeLightbox }}>
      {children}
      <ImageLightboxModal image={currentImage} onClose={closeLightbox} />
    </LightboxContext.Provider>
  );
};
