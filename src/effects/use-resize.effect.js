import { useEffect, useState } from "react";

const useResize = () => {
  const [isMobile, setIsMobile] = useState(null);

  useEffect(() => {
    const resize = () => {
      window.innerWidth <= 991
        ? setIsMobile(true)
        : setIsMobile(false);
    }
    window.addEventListener('resize', resize);
  });

  return isMobile;
};

export default useResize;