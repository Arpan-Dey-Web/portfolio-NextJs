import React from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import Mylogo from "../Mylogo/Mylogo";
import { SiGmail } from "react-icons/si";
import Link from "next/link";
const Footer = () => {
  return (
    <div className="background">
      <footer className="max-w-7xl  w-11/12 mx-auto py-8 ">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo & Copyright */}
          <aside className="flex flex-col items-center md:items-start">
            <Link href={"/"} className="hover:opacity-80 transition-opacity">
              <Mylogo />
            </Link>
          </aside>

          <div>
            <p className="text mt-4 text-opacity-80">
              © 2025 Arpan. All rights reserved.
            </p>
          </div>

          {/* Social Links */}
          <nav>
            <div className="flex gap-6">
              <Link
                target="_blank"
                href={
                  "https://www.linkedin.com/in/arpan-dey-web?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                }
                className="text-3xl text hover:text-cyber-primary transition-colors social-link p-2 rounded-lg"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </Link>
              <Link
                target="_blank"
                href={"https://github.com/Arpan-Dey-Web"}
                className="text-3xl text hover:text-cyber-primary transition-colors social-link p-2 rounded-lg"
                aria-label="GitHub"
              >
                <FaGithub />
              </Link>
              <Link
                href="mailto:arpandey.web@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl text hover:text-cyber-primary transition-colors social-link p-2 rounded-lg"
                aria-label="Email"
              >
                <SiGmail />
              </Link>
            </div>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
