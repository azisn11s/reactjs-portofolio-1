import React, { useState, useEffect, useRef } from 'react';
import '../styles/LazyImage.scss';

/**
 * LazyImage - Lazy loading image component with dominant color placeholder
 * 
 * Uses Intersection Observer for lazy loading and canvas for color extraction
 */
const LazyImage = ({ 
  src, 
  alt = '', 
  className = '', 
  aspectRatio = '16/10',
  borderRadius = '0.5rem'
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [dominantColor, setDominantColor] = useState('#e5e5e5');
  const containerRef = useRef(null);
  const imgRef = useRef(null);

  // Extract dominant color from image using canvas
  const extractDominantColor = (imgElement) => {
    try {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      
      // Use small canvas for performance
      const sampleSize = 10;
      canvas.width = sampleSize;
      canvas.height = sampleSize;
      
      // Draw scaled image
      ctx.drawImage(imgElement, 0, 0, sampleSize, sampleSize);
      
      // Get image data
      const imageData = ctx.getImageData(0, 0, sampleSize, sampleSize);
      const data = imageData.data;
      
      // Calculate average color
      let r = 0, g = 0, b = 0;
      const pixelCount = data.length / 4;
      
      for (let i = 0; i < data.length; i += 4) {
        r += data[i];
        g += data[i + 1];
        b += data[i + 2];
      }
      
      r = Math.round(r / pixelCount);
      g = Math.round(g / pixelCount);
      b = Math.round(b / pixelCount);
      
      return `rgb(${r}, ${g}, ${b})`;
    } catch (error) {
      // Fallback if canvas extraction fails (e.g., CORS)
      console.warn('Could not extract dominant color:', error);
      return '#e5e5e5';
    }
  };

  // Intersection Observer for lazy loading
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '100px', // Start loading 100px before entering viewport
        threshold: 0
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Pre-load image and extract color when in view
  useEffect(() => {
    if (!isInView || !src) return;

    const img = new Image();
    img.crossOrigin = 'anonymous';
    
    img.onload = () => {
      const color = extractDominantColor(img);
      setDominantColor(color);
      setIsLoaded(true);
    };

    img.onerror = () => {
      // If loading fails, still mark as "loaded" to show broken state
      setIsLoaded(true);
    };

    img.src = src;
  }, [isInView, src]);

  return (
    <div 
      ref={containerRef}
      className={`lazy-image ${className} ${isLoaded ? 'lazy-image--loaded' : ''}`}
      style={{ 
        aspectRatio,
        borderRadius,
        backgroundColor: dominantColor
      }}
    >
      {isInView && (
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          className="lazy-image__img"
          style={{ borderRadius }}
          onLoad={() => setIsLoaded(true)}
        />
      )}
      
      {/* Shimmer effect while loading */}
      {!isLoaded && (
        <div className="lazy-image__shimmer" style={{ borderRadius }} />
      )}
    </div>
  );
};

export default LazyImage;
