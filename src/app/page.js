"use client";
import Image from "next/image";
import Banner from "./component/Banner/Banner";
import AboutMe from "./component/AboutMe/AboutMe";
import Skills from "./component/Skills/Skills";
import Projects from "./component/Projects/Projects";
import ContactPage from "./component/Contact/Contact";
import Certificate from "./component/Certification/Certificate";

export default function Home() {
  return (
    <div>
      <section
        id="home"
        className="relative min-h-screen w-full  overflow-hidden"
      >
        {/* Background Gradient */}
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(125% 125% at 50% 100%, #000000 40%, #010133 100%)",
          }}
        />
        <div className="relative z-10">
          <Banner />
        </div>
      </section>
      {/*  */}
      <section className="bg-gradient-to-b from-[#0f0a1f] to-[#1a1033]">
        <section id="about">
          <AboutMe />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="certificate">
          <Certificate />
        </section>

        <section id="contact">
          <ContactPage />
        </section>
      </section>
    </div>
  );
}
