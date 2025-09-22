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
    <div className="mx-auto max-w-7xl w-11/12">
      <section id="home" className="border-b-2 border-indigo-500">
        <Banner />
      </section>

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
    </div>
  );
}
