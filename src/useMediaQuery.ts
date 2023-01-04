import { useState, useEffect } from "react";

/**
 * Hook implements if application layout
 * matches media-query passed
 * @param {string} query - media query as it is on css
 * Example: "(min-width: 767px)";
 * @param {boolean} defaultValue - if needed
 * @returns {boolean} if screen matches the query
 */
const useMediaQuery = (query: string, defaultValue = false) => {
  const [matches, setMatches] = useState(defaultValue);

  useEffect(() => {
    const media = window.matchMedia(query);

    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    const listener = (e: MediaQueryListEvent) => {
      setMatches(e.matches);
    };

    media.addEventListener("change", listener);

    return () => {
      media.removeEventListener("change", listener);
    };
  }, [matches, query]);

  return matches;
};

export default useMediaQuery;
