"use client";
import React, { useRef, FormEvent, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import Link from "next/link";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiSend,
  FiUser,
  FiMessageSquare,
} from "react-icons/fi";
import { FaWhatsapp, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { SiGmail, SiWhatsapp } from "react-icons/si";

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

const ContactPage: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    setIsSubmitting(true);

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY).then(
      () => {
        toast.success("✅ Message sent successfully!");
        form.current?.reset();
        setIsSubmitting(false);
      },
      () => {
        toast.error("❌ Failed to send message. Please try again later.");
        setIsSubmitting(false);
      }
    );
  };

  return (
    <section className="mx-auto max-w-7xl w-11/12 px-4 sm:px-6 lg:px-8  relative">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-500 rounded-full opacity-5 blur-3xl translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500 rounded-full opacity-5 blur-3xl -translate-x-1/2 translate-y-1/2"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header Section */}
        <header className="text-center mb-12 sm:mb-16">
          <div className="inline-block mb-4 sm:mb-6 px-4 sm:px-6 py-2 bg-gradient-to-r from-blue-500/20 to-green-500/20 rounded-full border border-blue-500/30">
            <p className="text-xs sm:text-sm font-semibold text-blue-300 tracking-wide">
              GET IN TOUCH
            </p>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold merinda-font primary mb-4 sm:mb-6">
            {`Let's`}{" "}
            <span className="name-gradient inline-block hover:scale-105 transition-transform duration-300">
              Connect
            </span>
          </h1>

          <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 mx-auto mb-6 sm:mb-8 rounded-full"></div>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 merinda-font max-w-3xl mx-auto leading-relaxed px-4">
            Ready to bring your ideas to life? {`Let's`} discuss your next
            project and create something amazing together.
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 merinda-font">
          {/* Contact Information Card */}
          <article className="rounded-2xl bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm border border-gray-700/50 hover:border-blue-500/50 transition-all duration-500 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
            {/* Profile Section */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 border-2 border-blue-500/30 flex items-center justify-center">
                  <FiUser className="w-8 h-8 sm:w-10 sm:h-10 text-blue-400" />
                </div>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold primary name-gradient">
                    Arpan Dey
                  </h2>
                  <p className="text-sm sm:text-base text-gray-400 mt-1">
                    MERN Stack Developer
                  </p>
                </div>
              </div>

              {/* Contact Details */}
              <div className="space-y-4 sm:space-y-5 mb-8">
                {/* Email */}
                <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-800/40 border border-gray-700/30 hover:border-blue-500/30 transition-all duration-300 group">
                  <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500/20 transition-colors">
                    <FiMail className="w-5 h-5 text-blue-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-gray-500 mb-1">Email</p>
                    <a
                      href="mailto:arpandey.web@gmail.com"
                      className="text-sm sm:text-base text-gray-300 hover:text-blue-400 transition-colors break-all"
                    >
                      arpandey.web@gmail.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-800/40 border border-gray-700/30 hover:border-green-500/30 transition-all duration-300 group">
                  <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-green-500/20 transition-colors">
                    <FiPhone className="w-5 h-5 text-green-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-gray-500 mb-1">Phone</p>
                    <a
                      href="tel:+8801821524847"
                      className="text-sm sm:text-base text-gray-300 hover:text-green-400 transition-colors"
                    >
                      +880 1821524847
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-800/40 border border-gray-700/30 hover:border-purple-500/30 transition-all duration-300 group">
                  <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-purple-500/20 transition-colors">
                    <FiMapPin className="w-5 h-5 text-purple-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-gray-500 mb-1">Location</p>
                    <p className="text-sm sm:text-base text-gray-300">
                      Chittagong, Bangladesh
                    </p>
                  </div>
                </div>
                {/* Social Links */}
                <div className="flex gap-3 justify-center">
                  <Link
                    href="https://www.linkedin.com/in/arpan-dey-web?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 hover:border-blue-500/70 hover:bg-blue-500/10 hover:shadow-lg hover:shadow-blue-500/20 flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                    title="LinkedIn"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedinIn className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors" />
                  </Link>
                  <Link
                    href="https://github.com/Arpan-Dey-Web"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 hover:border-blue-500/70 hover:bg-blue-500/10 hover:shadow-lg hover:shadow-blue-500/20 flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                    title="GitHub"
                    aria-label="GitHub"
                  >
                    <FaGithub className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                  </Link>
                  <Link
                    href="mailto:arpandey.web@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 hover:border-blue-500/70 hover:bg-blue-500/10 hover:shadow-lg hover:shadow-blue-500/20 flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                    title="Gmail"
                    aria-label="Email"
                  >
                    <SiGmail className="w-5 h-5 text-gray-400 group-hover:text-red-400 transition-colors" />
                  </Link>
                  <Link
                    href="https://wa.me/8801821524847"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 hover:border-blue-500/70 hover:bg-blue-500/10 hover:shadow-lg hover:shadow-blue-500/20 flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                    title="WhatsApp"
                    aria-label="WhatsApp"
                  >
                    <SiWhatsapp className="w-5 h-5 text-gray-400 group-hover:text-green-400 transition-colors" />
                  </Link>
                </div>
              </div>
            </div>

            {/* WhatsApp Button & Social Links */}
            <div className="space-y-4">
              <Link
                href="https://wa.me/8801821524847"
                target="_blank"
                rel="noopener noreferrer"
                className="group/wa w-full flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 text-white rounded-xl transition-all duration-300 shadow-lg shadow-green-500/30 hover:shadow-green-500/50 hover:scale-105"
              >
                <FaWhatsapp className="w-5 h-5 sm:w-6 sm:h-6 group-hover/wa:rotate-12 transition-transform" />
                <span className="font-semibold text-sm sm:text-base">
                  Chat on WhatsApp
                </span>
              </Link>

              {/* Social Links */}
            </div>
          </article>

          {/* Contact Form Card */}
          <article className="rounded-2xl bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm border border-gray-700/50 p-6 sm:p-8 lg:p-10">
            <div className="flex items-center gap-3 mb-6 sm:mb-8">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/30 flex items-center justify-center">
                <FiMessageSquare className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Send a Message
              </h3>
            </div>

            <form
              ref={form}
              onSubmit={sendEmail}
              className="space-y-5 sm:space-y-6"
            >
              {/* Name Input */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm sm:text-base text-gray-300 mb-2 font-medium"
                >
                  Your Name *
                </label>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2">
                    <FiUser className="w-5 h-5 text-gray-500" />
                  </div>
                  <input
                    type="text"
                    name="user_name"
                    id="name"
                    placeholder="John Doe"
                    required
                    className="w-full pl-12 pr-4 py-3 sm:py-3.5 bg-gray-900/50 border border-gray-700/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 text-white placeholder-gray-500 transition-all duration-300"
                  />
                </div>
              </div>

              {/* Email Input */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm sm:text-base text-gray-300 mb-2 font-medium"
                >
                  Email Address *
                </label>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2">
                    <FiMail className="w-5 h-5 text-gray-500" />
                  </div>
                  <input
                    type="email"
                    name="user_email"
                    id="email"
                    placeholder="john@example.com"
                    required
                    className="w-full pl-12 pr-4 py-3 sm:py-3.5 bg-gray-900/50 border border-gray-700/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 text-white placeholder-gray-500 transition-all duration-300"
                  />
                </div>
              </div>

              {/* Message Textarea */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm sm:text-base text-gray-300 mb-2 font-medium"
                >
                  Message *
                </label>
                <div className="relative">
                  <div className="absolute left-4 top-4">
                    <FiMessageSquare className="w-5 h-5 text-gray-500" />
                  </div>
                  <textarea
                    name="message"
                    id="message"
                    rows={5}
                    placeholder="Tell me about your project..."
                    required
                    className="w-full pl-12 pr-4 py-3 sm:py-3.5 bg-gray-900/50 border border-gray-700/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 text-white placeholder-gray-500 transition-all duration-300 resize-none"
                  ></textarea>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="group/btn relative w-full px-6 py-3.5 sm:py-4 rounded-xl text-white text-sm sm:text-base font-semibold bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 transition-all duration-300 overflow-hidden shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span className="relative z-10">Send Message</span>
                    <FiSend className="w-5 h-5 relative z-10 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                  </>
                )}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
              </button>
            </form>
          </article>
        </div>

        {/* Bottom decorative line */}
        <div className="mt-12 sm:mt-16 flex justify-center">
          <div className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
        </div>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </section>
  );
};

export default ContactPage;
