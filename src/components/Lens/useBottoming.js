import { useState, useEffect, useRef } from "react";

const useBottoming = (containerRef, loading) => {
  // const [container, setContainer] = useState(null);
  const [nearingBottom, setNearingBottom] = useState(false);

  const latestHeight = useRef();

  useEffect(() => {
    if (!containerRef.current) return;
    let animId;
    console.log("check scrolling");
    const checkScroll = () => {
      const { current } = containerRef;
      const { scrollHeight } = current;
      const { scrollTop } = current.parentElement;

      if (scrollHeight - scrollTop < scrollHeight / 10) {
        latestHeight.current = scrollHeight;
        setNearingBottom(true);
      } else {
        animId = requestAnimationFrame(checkScroll);
      }
    };

    checkScroll();

    return () => cancelAnimationFrame(animId);
  }, [containerRef.current, loading]);

  return [nearingBottom, setNearingBottom];
};

export default useBottoming;
