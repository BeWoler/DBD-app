import { useState, useEffect } from 'react';

const useMedia = () => {
  const [screenSize, setScreenSize] = useState({
    mobile: false,
    desktop: true,
  });

  const updateMedia = () => {
    const width = window.innerWidth;

    setScreenSize({
      mobile: width <= 1024,
      desktop: width > 1024,
    });
  };

  useEffect(() => {
    updateMedia();
    window.addEventListener('resize', updateMedia);

    return () => {
      window.removeEventListener('resize', updateMedia);
    };
  }, []);

  return screenSize;
};

export default useMedia;
