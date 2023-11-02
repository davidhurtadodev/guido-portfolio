import { useEffect, useState } from 'react';

type WindowWidth = {
  width: number | undefined;
};

const useWindowWidth = (): WindowWidth => {
  const [windowWidth, setWindowWidth] = useState<WindowWidth>({
    width: undefined,
  });
  useEffect(() => {
    function handleResize(): void {
      setWindowWidth({
        width: window.innerWidth,
      });
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return (): void => window.removeEventListener('resize', handleResize);
  }, []); // Empty array ensures that effect is only run on mount

  return windowWidth;
};

export default useWindowWidth;
