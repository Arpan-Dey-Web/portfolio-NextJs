import React from "react";

const AboutMe = () => {
  return (
    <section
      id="about"
      className=" px-6 py-16  rounded-lg shadow-lg primary  "
      aria-label="About Me Section"
    >
      <header className="text-center mb-10">
        <h2 className="text-4xl font-extrabold  mb-2">About Me</h2>
        <p className="text-lg  italic accent">
          Code as art, purpose as direction.
        </p>
      </header>

      <article>
        <p className=" leading-relaxed text-lg tracking-wide  text text-justify ">
          {/* I am Arpan, a dedicated developer who embraces every new technology
          with calm confidence. My approach is simple: learn relentlessly, code
          thoughtfully, and deliver excellence. I see every challenge as a
          stepping stone for growth, welcoming change and complexity as
          catalysts for improvement. Fueled by curiosity and persistence, I
          continuously refine my skills to adapt and innovate. I believe every
          project is an opportunity to connect people and innovate through
          technology. My goal is to build seamless digital experiences that are
          as efficient as they are elegant. */}
          I’m Arpan Dey, a dedicated developer who embraces new technologies
          with calm confidence. My programming journey began with HTML and CSS
          experiments, growing into a passion for building responsive,
          user-friendly web applications using JavaScript, ReactJS, and the MERN
          stack. I love transforming complex ideas into clean, intuitive designs
          and enjoy collaborating to deliver efficient, visually engaging
          solutions. From integrating APIs to fine-tuning animations, I focus on
          creating seamless digital experiences that feel effortless to use.
          Beyond coding, I recharge by exploring food spots, playing cricket,
          and capturing life through photography—hobbies that fuel my creativity
          and fresh perspective. Guided by curiosity and persistence, I see
          every project as a chance to innovate and make technology more human.
        </p>
      </article>
    </section>
  );
};

export default AboutMe;
