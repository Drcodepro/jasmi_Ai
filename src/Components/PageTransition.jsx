import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const PageTransition = ({ children }) => {
    const transitionRef = useRef(null);

    useEffect(() => {
        // Create GSAP context scoped to the transitionRef
        const ctx = gsap.context(() => {
            // Initial animation when component mounts
            gsap.fromTo(
                transitionRef.current,
                { autoAlpha: 0, y: 50 },
                { autoAlpha: 1, y: 0, duration: 3.5, ease: 'power2.out' }
            );
        }, transitionRef);

        // Cleanup animations on unmount
        return () => {
            // Ensure cleanup only happens on component unmount
            gsap.to(transitionRef.current, {
                autoAlpha: 0,
                y: -50,
                duration: 3.3,
                ease: 'power2.in',
            });

            // Revert context to clean up GSAP effects
            ctx.revert();
        };
    }, []);

    return <div ref={transitionRef}>{children}</div>;
};

export default PageTransition;
