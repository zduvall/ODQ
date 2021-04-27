import { useEffect, useState } from 'react';

export const useWindowWidth = () => {
  let [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const changeWindowSize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', changeWindowSize);
    return () => window.removeEventListener('resize', changeWindowSize);
  }, []);
  return windowWidth;
};
