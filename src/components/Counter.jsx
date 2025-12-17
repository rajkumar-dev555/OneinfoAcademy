import React, { useState, useEffect, useRef } from 'react';

const Counter = ({ end, duration = 2000, suffix = '' }) => {
    const [count, setCount] = useState(0);
    const countRef = useRef(null);
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated) {
                    setHasAnimated(true);
                }
            },
            { threshold: 0.1 }
        );

        if (countRef.current) {
            observer.observe(countRef.current);
        }

        return () => {
            if (countRef.current) observer.unobserve(countRef.current);
        };
    }, [hasAnimated]);

    useEffect(() => {
        if (!hasAnimated) return;

        let start = 0;
        const totalSteps = 60;
        const increment = end / totalSteps;
        const stepDuration = duration / totalSteps;

        let currentStep = 0;

        const timer = setInterval(() => {
            currentStep++;
            start += increment;
            if (currentStep >= totalSteps) {
                setCount(end);
                clearInterval(timer);
            } else {
                setCount(Math.ceil(start));
            }
        }, stepDuration);

        return () => clearInterval(timer);
    }, [hasAnimated, end, duration]);

    return (
        <span ref={countRef}>
            {count}{suffix}
        </span>
    );
};

export default Counter;
