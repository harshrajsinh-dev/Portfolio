import React, { useRef } from 'react'

const MarqueeText = ({ text }) => {
    const trackRef = useRef(null)
    window.addEventListener("wheel", (e) => {
        const { wheelDeltaY } = e
        wheelDeltaY <= 0 ? trackRef.current.classList.add("track-rev") : trackRef.current.classList.remove("track-rev")
    })
    return (
        <div className="marquee">
            <div ref={trackRef} className="track track-normal">
                <div className="content uppercase">
                    {text}
                </div>
            </div>
        </div>
    )
}

export default MarqueeText