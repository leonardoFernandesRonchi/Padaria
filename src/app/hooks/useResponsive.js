import { useMediaQuery } from 'theme-ui';

const useResponsive = () => {
  const [isMobile] = useMediaQuery('(max-width: 768px)');
  return { isMobile };
};
