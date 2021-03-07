import gsap from "gsap"
import React, { FC } from "react"
import { useSpring, animated } from "react-spring"
import resume from "./../../Assets/Resume.pdf"

const calc = (x: number, y: number) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1.1,
];

const trans = (x: number, y: number, s: number) => {
    return `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
}

export const ResumeSection:FC = () => {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }));

    const handleOnMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
        const { clientX, clientY } = event
        set({ xys: calc(clientX, clientY) });
        gsap.to(".download-btn", { opacity: 1, duration: 0.5 });
        gsap.to(".resume", { opacity: 0.8, duration: 0.5 });
    };
  const handleOnMouseLeave = () => {
    set({ xys: [0, 0, 1] });
    gsap.to(".download-btn", { opacity: 0, duration: 0.5 });
    gsap.to(".resume", { opacity: 1, duration: 0.5 });
  };
  const style = useSpring({
    config: { duration: 400 },
    from: { opacity: 0, height: 20 },
    to: {
      opacity: 1,
      height: "auto",
    },
  })


  return (
    <animated.a href={resume} target="_blank" style={style}>
      <animated.div
        className="resume"
        onMouseMove={handleOnMouseMove}
        onMouseLeave={handleOnMouseLeave}
        style={{ transform: props.xys.interpolate(trans as any) }}
      >
        <p className="download-btn">View PDF</p>
      </animated.div>
    </animated.a>
  );
}
