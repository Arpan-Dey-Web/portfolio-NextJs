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
import { SiGmail } from "react-icons/si";
import { IoSparkles, IoChatbubbleEllipses } from "react-icons/io5";

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

  const contactInfo = [
    {
      icon: <FiMail className="w-5 h-5" />,
      label: "Email",
      value: "arpandey.web@gmail.com",
      href: "mailto:arpandey.web@gmail.com",
      bgColor: "bg-blue-500/10",
      hoverBg: "group-hover:bg-blue-500/20",
      iconColor: "text-blue-400",
      borderColor: "hover:border-blue-500/30",
    },
    {
      icon: <FiPhone className="w-5 h-5" />,
      label: "Phone",
      value: "+880 1821524847",
      href: "tel:+8801821524847",
      bgColor: "bg-green-500/10",
      hoverBg: "group-hover:bg-green-500/20",
      iconColor: "text-green-400",
      borderColor: "hover:border-green-500/30",
    },
    {
      icon: <FiMapPin className="w-5 h-5" />,
      label: "Location",
      value: "Chittagong, Bangladesh",
      href: null,
      bgColor: "bg-purple-500/10",
      hoverBg: "group-hover:bg-purple-500/20",
      iconColor: "text-purple-400",
      borderColor: "hover:border-purple-500/30",
    },
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <FaLinkedinIn className="w-5 h-5" />,
      href: "https://www.linkedin.com/in/arpan-dey-web",
      color:
        "hover:border-blue-500/70 hover:bg-blue-500/10 hover:shadow-blue-500/20",
      iconColor: "group-hover:text-blue-400",
    },
    {
      name: "GitHub",
      icon: <FaGithub className="w-5 h-5" />,
      href: "https://github.com/Arpan-Dey-Web",
      color:
        "hover:border-purple-500/70 hover:bg-purple-500/10 hover:shadow-purple-500/20",
      iconColor: "group-hover:text-white",
    },
    {
      name: "Gmail",
      icon: <SiGmail className="w-5 h-5" />,
      href: "mailto:arpandey.web@gmail.com",
      color:
        "hover:border-red-500/70 hover:bg-red-500/10 hover:shadow-red-500/20",
      iconColor: "group-hover:text-red-400",
    },
    {
      name: "WhatsApp",
      icon: <FaWhatsapp className="w-5 h-5" />,
      href: "https://wa.me/8801821524847",
      color:
        "hover:border-green-500/70 hover:bg-green-500/10 hover:shadow-green-500/20",
      iconColor: "group-hover:text-green-400",
    },
  ];

  return (
    <section className="mx-auto max-w-7xl w-11/12 relative overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Enhanced Header Section */}
        <header className="text-center mb-12 sm:mb-16 lg:mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-2 mb-6 px-6 sm:px-8 py-2.5 bg-gradient-to-r from-blue-500/20 to-green-500/20 rounded-full border border-blue-500/40 hover:border-blue-400/60 transition-all duration-300 group cursor-default">
            <IoChatbubbleEllipses className="w-4 h-4 text-blue-400 group-hover:scale-110 transition-transform" />
            <p className="text-xs sm:text-sm font-bold text-blue-300 tracking-widest">
              GET IN TOUCH
            </p>
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold merinda-font mb-6 animate-slide-up">
            {` Let's`}{" "}
            <span className="name-gradient inline-block hover:scale-110 transition-transform duration-300 cursor-default">
              Connect
            </span>
          </h1>

          <div className="relative w-32 sm:w-40 h-1.5 mx-auto mb-8 sm:mb-10">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 rounded-full animate-gradient"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 rounded-full blur-sm opacity-50"></div>
          </div>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 merinda-font max-w-3xl mx-auto leading-relaxed px-4 animate-slide-up">
            Ready to bring your ideas to life? {` Let's`} discuss your next
            project and create something amazing together.
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 merinda-font">
          {/* Enhanced Contact Information Card */}
          <article className="group relative rounded-2xl sm:rounded-3xl bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-md border border-gray-700/50 hover:border-blue-500/50 transition-all duration-500 p-8 sm:p-10 lg:p-12 flex flex-col justify-between animate-fade-in">
            {/* Decorative corner accents */}
            <div className="absolute top-0 left-0 w-20 h-20 border-l-2 border-t-2 border-gray-700/50 group-hover:border-blue-500/50 rounded-tl-2xl transition-all duration-500"></div>
            <div className="absolute bottom-0 right-0 w-20 h-20 border-r-2 border-b-2 border-gray-700/50 group-hover:border-green-500/50 rounded-br-2xl transition-all duration-500"></div>

            {/* Profile Section */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border-2 border-blue-500/40 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <FiUser className="w-8 h-8 sm:w-10 sm:h-10 text-blue-400" />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"></div>
                </div>
                <div>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold name-gradient">
                    Arpan Dey
                  </h2>
                  <p className="text-sm sm:text-base text-gray-400 mt-1">
                    MERN Stack Developer
                  </p>
                </div>
              </div>

              {/* Enhanced Contact Details */}
              <div className="space-y-4 mb-8">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className={`group/item flex items-start gap-4 p-4 sm:p-5 rounded-xl bg-gray-800/40 border border-gray-700/30 ${info.borderColor} transition-all duration-300 hover:scale-105`}
                  >
                    <div
                      className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl ${info.bgColor} flex items-center justify-center flex-shrink-0 ${info.hoverBg} transition-colors`}
                    >
                      <div className={info.iconColor}>{info.icon}</div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs sm:text-sm text-gray-500 mb-1 font-medium">
                        {info.label}
                      </p>
                      {info.href ? (
                        <a
                          href={info.href}
                          className={`text-sm sm:text-base text-gray-300 hover:${info.iconColor} transition-colors break-all font-medium`}
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-sm sm:text-base text-gray-300 font-medium">
                          {info.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Enhanced Social Links */}
              <div className="flex gap-3 justify-center mb-6">
                {socialLinks.map((social, index) => (
                  <Link
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group/social w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 ${social.color} flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg`}
                    title={social.name}
                    aria-label={social.name}
                  >
                    <div
                      className={`text-gray-400 ${social.iconColor} transition-colors`}
                    >
                      {social.icon}
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Enhanced WhatsApp Button */}
            <Link
              href="https://wa.me/8801821524847"
              target="_blank"
              rel="noopener noreferrer"
              className="group/wa relative w-full flex items-center justify-center gap-3 px-6 py-4 sm:py-5 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 text-white rounded-xl sm:rounded-2xl transition-all duration-300 shadow-lg shadow-green-500/30 hover:shadow-green-500/50 hover:scale-105 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-400 opacity-0 group-hover/wa:opacity-100 transition-opacity duration-300"></div>
              <FaWhatsapp className="relative z-10 w-6 h-6 group-hover/wa:rotate-12 transition-transform" />
              <span className="relative z-10 font-bold text-base sm:text-lg">
                Chat on WhatsApp
              </span>
            </Link>
          </article>

          {/* Enhanced Contact Form Card */}
          <article className="group relative rounded-2xl sm:rounded-3xl bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-md border border-gray-700/50 hover:border-purple-500/50 transition-all duration-500 p-8 sm:p-10 lg:p-12 animate-fade-in animation-delay-200">
            {/* Decorative corner accents */}
            <div className="absolute top-0 left-0 w-20 h-20 border-l-2 border-t-2 border-gray-700/50 group-hover:border-purple-500/50 rounded-tl-2xl transition-all duration-500"></div>
            <div className="absolute bottom-0 right-0 w-20 h-20 border-r-2 border-b-2 border-gray-700/50 group-hover:border-blue-500/50 rounded-br-2xl transition-all duration-500"></div>

            <div className="relative z-10 flex items-center gap-4 mb-8 sm:mb-10">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-purple-500/40 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <FiMessageSquare className="w-6 h-6 sm:w-7 sm:h-7 text-purple-400" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                Send a Message
              </h3>
            </div>

            <form
              ref={form}
              onSubmit={sendEmail}
              className="relative z-10 space-y-6"
            >
              {/* Name Input */}
              <div className="group/input">
                <label
                  htmlFor="name"
                  className="block text-sm sm:text-base text-gray-300 mb-2 font-medium"
                >
                  Your Name *
                </label>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2">
                    <FiUser className="w-5 h-5 text-gray-500 group-focus-within/input:text-blue-400 transition-colors" />
                  </div>
                  <input
                    type="text"
                    name="user_name"
                    id="name"
                    placeholder="John Doe"
                    required
                    className="w-full pl-12 pr-4 py-3.5 sm:py-4 bg-gray-900/50 border border-gray-700/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 text-white placeholder-gray-500 transition-all duration-300 hover:border-gray-600/50"
                  />
                </div>
              </div>

              {/* Email Input */}
              <div className="group/input">
                <label
                  htmlFor="email"
                  className="block text-sm sm:text-base text-gray-300 mb-2 font-medium"
                >
                  Email Address *
                </label>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2">
                    <FiMail className="w-5 h-5 text-gray-500 group-focus-within/input:text-blue-400 transition-colors" />
                  </div>
                  <input
                    type="email"
                    name="user_email"
                    id="email"
                    placeholder="john@example.com"
                    required
                    className="w-full pl-12 pr-4 py-3.5 sm:py-4 bg-gray-900/50 border border-gray-700/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 text-white placeholder-gray-500 transition-all duration-300 hover:border-gray-600/50"
                  />
                </div>
              </div>

              {/* Message Textarea */}
              <div className="group/input">
                <label
                  htmlFor="message"
                  className="block text-sm sm:text-base text-gray-300 mb-2 font-medium"
                >
                  Message *
                </label>
                <div className="relative">
                  <div className="absolute left-4 top-4">
                    <FiMessageSquare className="w-5 h-5 text-gray-500 group-focus-within/input:text-blue-400 transition-colors" />
                  </div>
                  <textarea
                    name="message"
                    id="message"
                    rows={5}
                    placeholder="Tell me about your project..."
                    required
                    className="w-full pl-12 pr-4 py-3.5 sm:py-4 bg-gray-900/50 border border-gray-700/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 text-white placeholder-gray-500 transition-all duration-300 resize-none hover:border-gray-600/50"
                  ></textarea>
                </div>
              </div>

              {/* Enhanced Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="group/btn relative w-full px-6 py-4 sm:py-5 rounded-xl sm:rounded-2xl text-white text-base sm:text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 transition-all duration-300 overflow-hidden shadow-xl shadow-blue-500/30 hover:shadow-blue-500/50 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 hover:scale-105 active:scale-95"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span className="relative z-10">Sending...</span>
                  </>
                ) : (
                  <>
                    <span className="relative z-10">Send Message</span>
                    <FiSend className="relative z-10 w-5 h-5 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                  </>
                )}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
              </button>
            </form>
          </article>
        </div>

        {/* Enhanced Bottom decorative line */}
        <div className="mt-12 sm:mt-16 lg:mt-20 flex justify-center">
          <div className="relative w-full max-w-xl h-px">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent blur-sm"></div>
            {/* Animated dots */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-2">
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
              <div className="w-1.5 h-1.5 bg-purple-500 rounded-full animate-pulse animation-delay-200"></div>
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse animation-delay-400"></div>
            </div>
          </div>
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
