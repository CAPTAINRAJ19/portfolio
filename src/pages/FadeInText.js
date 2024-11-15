import React, { useEffect, useRef, useState } from 'react';
import './FadeInText.css';

const FadeInText = ({ text }) => {
  const [isVisible, setIsVisible] = useState(false);
  const textRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Toggle visibility based on whether the element is in the viewport
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 } // Adjust threshold to trigger a bit sooner
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={textRef}
      className={`font-sync fade-in-text ${isVisible ? 'visible' : ''}`}
    >
      {text}
    </div>
  );
};

export default FadeInText;
