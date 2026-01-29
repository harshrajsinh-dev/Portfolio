import React from 'react'
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Cursor = () => {
    const cursorRef = useRef(null);
    window.addEventListener('mousemove', (e) => {
        // console.log(e.x, e.y);
        gsap.to(cursorRef.current, {
            // y: e.y,
            x: e.x,
            y: e.y,
            duration: .2,
            ease: 'none',
        });
    });
    return (
        <div ref={cursorRef} className='hidden md:block h-2 w-2 bg-black  rounded-full fixed top-0 left-0 z-50 pointer-events-none'
            style={{
                transform: "translate(-50%, -50%)",
            }}
        ></div>
    )
}

export default Cursor