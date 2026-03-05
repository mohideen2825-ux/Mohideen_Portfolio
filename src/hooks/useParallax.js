import { useRef, useState, useEffect, useCallback } from 'react';

/**
 * Custom hook that provides parallax transform values based on scroll position.
 * @param {number} speed - Parallax speed multiplier (-1 to 1). Negative = moves opposite to scroll.
 * @param {string} direction - 'vertical' | 'horizontal'
 * @returns {{ ref, style }}
 */
export function useParallax(speed = 0.3, direction = 'vertical') {
    const ref = useRef(null);
    const [offset, setOffset] = useState(0);

    const handleScroll = useCallback(() => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        // Element center relative to viewport center
        const elementCenter = rect.top + rect.height / 2;
        const viewportCenter = windowHeight / 2;
        const delta = (elementCenter - viewportCenter) * speed;
        setOffset(delta);
    }, [speed]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);

    const transform =
        direction === 'horizontal'
            ? `translateX(${offset}px)`
            : `translateY(${offset}px)`;

    return {
        ref,
        style: {
            transform,
            transition: 'transform 0.1s linear',
            willChange: 'transform',
        },
    };
}

/**
 * Hook that tracks scroll progress of an element through the viewport.
 * Returns a value from 0 (just entering) to 1 (fully passed).
 */
export function useScrollProgress() {
    const ref = useRef(null);
    const [progress, setProgress] = useState(0);

    const handleScroll = useCallback(() => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const start = windowHeight;
        const end = -rect.height;
        const current = rect.top;
        const p = Math.min(Math.max((start - current) / (start - end), 0), 1);
        setProgress(p);
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);

    return { ref, progress };
}
