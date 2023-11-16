import { useEffect, useState } from 'react';

type YScroll = {
  YScroll: number | undefined;
};

const useYScroll = (): YScroll => {
  const [YScroll, setYScroll] = useState<YScroll>({
    YScroll: undefined,
  });
  useEffect(() => {
    const onScroll = () => setYScroll({ YScroll: window.scrollY });
    // clean up code
    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return YScroll;
};

export default useYScroll;
