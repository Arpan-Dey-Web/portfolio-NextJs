import Image from "next/image";
import Banner from "./component/Banner/Banner";
import AboutMe from "./component/AboutMe/AboutMe";
import Skills from "./component/Skills/Skills";
import Projects from "./component/Projects/Projects";
import ContactPage from "./component/Contact/Contact";
import Certificate from "./component/Certification/Certificate";

export default function Home() {
  return (
    <div className="text-gray-100">
      <section
        id="home"
        className="relative min-h-screen w-full overflow-hidden"
      >
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

      <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-[#030108] via-[#0f0533] to-[#160e30]">
        <div className="absolute inset-0 z-0 pointer-events-none" />
        <section className="relative z-10">
          <section id="about" className="pt-40 pb-20">
            <AboutMe />
          </section>

          <section id="skills" className="py-20">
            <Skills />
          </section>

          <section id="projects" className="py-20">
            <Projects />
          </section>

          <section id="certificate" className="py-20">
            <Certificate />
          </section>

          <section id="contact" className="py-20">
            <ContactPage />
          </section>
        </section>
      </div>
    </div>
  );
}
