import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import {
  Mail,
  Copy,
  Phone,
  MapPin,
  Clock,
  FileText,
  Globe,
  ArrowUpRight,
} from "lucide-react";
import animeCharacter from "../assets/anime_character.jpg";
import aestheticPfp from "../assets/aesthetic_pfp.jpg";
import SectionWrapper from "./ui/SectionWrapper";
import CrossLine from "./ui/CrossLine";

const ContactIcon = ({ children }) => (
  <div className="flex size-7 items-center justify-center rounded-lg border border-zinc-200 dark:border-zinc-800 shrink-0">
    <div className="flex size-5 items-center justify-center rounded-md border border-zinc-900 dark:border-zinc-100 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-50">
      {children}
    </div>
  </div>
);

const MarsIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="size-3.5"
  >
    <path d="M16 3h5v5" />
    <path d="m21 3-6.75 6.75" />
    <circle cx="10" cy="14" r="6" />
  </svg>
);
const IMAGES = [aestheticPfp, animeCharacter];

const TEXTS = [
  "Gaming is my escapism",
  "I love creating, crafting and learning",
  "And you'll always gravitate towards what you love",
];

function MagneticText({ children }) {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className="relative cursor-pointer hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors w-full flex justify-center"
    >
      {children}
    </motion.div>
  );
}

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(
        (prev) => (prev + 1) % Math.max(IMAGES.length, TEXTS.length),
      );
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    return date
      .toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      })
      .toLowerCase();
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <section className="flex flex-col w-full relative z-10">
      {/* 1. Banner Row */}
      <div className="w-full border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-3xl mx-auto w-[95%] md:w-full border-x border-zinc-200 dark:border-zinc-800 py-10 md:py-14 grid place-items-center bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#27272a_1px,transparent_1px)] [background-size:16px_16px]">
          <MagneticText>
            <h1 className="text-center font-medium text-zinc-500 dark:text-zinc-400 text-xl sm:text-2xl leading-snug tracking-tight">
              <a href="mailto:hisamc2000@gmail.com?subject=Let's connect&body=Hi Hisamuddin,">
                Actively looking for a job switch
                <br />& freelance work
              </a>
            </h1>
          </MagneticText>
        </div>
      </div>

      {/* 2. Profile Info Row */}
      <div className="w-full border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-3xl mx-auto w-[95%] md:w-full border-x border-zinc-200 dark:border-zinc-800 h-[160px] sm:h-[20vh] md:h-[24vh] lg:h-[28vh] flex">
          {/* Avatar Box */}
          <div className="h-full aspect-square border-r border-zinc-200 dark:border-zinc-800 flex items-center justify-center p-2 sm:p-4 md:p-6 shrink-0">
            <div className="relative w-full h-full rounded-full border border-zinc-300 dark:border-zinc-700 p-[1px] sm:p-[2px] transition-all duration-300">
              <div className="relative w-full h-full rounded-full overflow-hidden bg-zinc-200 dark:bg-zinc-800">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentIndex % IMAGES.length}
                    src={IMAGES[currentIndex % IMAGES.length]}
                    alt="Hisamuddin Chandiwala"
                    initial={{
                      opacity: 0,
                      scale: 1.1,
                      filter: "grayscale(80%)",
                    }}
                    animate={{ opacity: 1, scale: 1, filter: "grayscale(0%)" }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Info Box */}
          <div className="h-full flex-1 flex flex-col min-w-0">
            <div className="h-[50%] border-b border-zinc-200 dark:border-zinc-800 flex items-end px-3 sm:px-4 pb-[2px] gap-2 font-mono text-[9px] sm:text-[10px] md:text-xs text-zinc-500 dark:text-zinc-400 overflow-hidden whitespace-nowrap uppercase tracking-widest font-bold">
              <span>Full Stack Developer</span>
            </div>
            <div className="h-[25%] border-b border-zinc-200 dark:border-zinc-800 flex items-center px-3 sm:px-4 gap-1.5 sm:gap-2">
              <h1 className="text-xl sm:text-2xl md:text-3xl font-medium text-zinc-900 dark:text-zinc-50 tracking-tight truncate">
                Hisamuddin Chandiwala
              </h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="size-4 sm:size-5 text-[#009CF6] shrink-0"
                aria-label="Verified"
              >
                <path
                  fill="currentColor"
                  d="M24 12a4.454 4.454 0 0 0-2.564-3.91 4.437 4.437 0 0 0-.948-4.578 4.436 4.436 0 0 0-4.577-.948A4.44 4.44 0 0 0 12 0a4.423 4.423 0 0 0-3.9 2.564 4.434 4.434 0 0 0-2.43-.178 4.425 4.425 0 0 0-2.158 1.126 4.42 4.42 0 0 0-1.12 2.156 4.42 4.42 0 0 0 .183 2.421A4.456 4.456 0 0 0 0 12a4.465 4.465 0 0 0 2.576 3.91 4.433 4.433 0 0 0 .336 4.577 4.459 4.459 0 0 0 4.577.95A4.454 4.454 0 0 0 12 24a4.439 4.439 0 0 0 3.91-2.563 4.26 4.26 0 0 0 5.526-5.526A4.453 4.453 0 0 0 24 12Zm-13.709 4.917-4.38-4.378 1.652-1.663 2.646 2.646L15.83 7.4l1.72 1.591-7.258 7.926Z"
                ></path>
              </svg>
            </div>
            <div className="h-[25%] px-3 sm:px-4 flex items-center font-mono tracking-tighter text-xs sm:text-sm">
              <div className="relative h-6 overflow-hidden font-medium w-full">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex % TEXTS.length}
                    initial={{ y: 15, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -15, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-zinc-500 absolute w-full truncate"
                  >
                    {TEXTS[currentIndex % TEXTS.length]}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Contact Grid Row */}
      <div className="w-full border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-3xl mx-auto w-[95%] md:w-full border-x border-zinc-200 dark:border-zinc-800 px-4 py-5 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-3 font-mono tracking-tighter text-[14px] sm:text-[15px]">
          <div className="flex flex-col gap-2.5">
            <div className="flex items-center gap-3 group text-zinc-900 dark:text-zinc-50">
              <ContactIcon>
                <Mail className="size-3.5" />
              </ContactIcon>
              <a
                href="mailto:hisamc2000@gmail.com"
                className="hover:underline truncate"
              >
                hisamc2000@gmail.com
              </a>
              <button
                onClick={() => copyToClipboard("hisamc2000@gmail.com")}
                className="opacity-0 group-hover:opacity-100 transition-opacity text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100"
              >
                <Copy className="size-4" />
              </button>
            </div>
            <div className="flex items-center gap-3 group text-zinc-900 dark:text-zinc-50">
              <ContactIcon>
                <Phone className="size-3.5" />
              </ContactIcon>
              <a href="tel:+91-9819871432" className="hover:underline">
                +91-9819871432
              </a>
              <button
                onClick={() => copyToClipboard("+91-9819871432")}
                className="opacity-0 group-hover:opacity-100 transition-opacity text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100"
              >
                <Copy className="size-4" />
              </button>
            </div>
            <div className="flex items-center gap-3 text-zinc-900 dark:text-zinc-50">
              <ContactIcon>
                <MapPin className="size-3.5" />
              </ContactIcon>
              <span className="hover:underline">Mumbai, India</span>
            </div>
            <div className="flex items-center gap-3 text-zinc-900 dark:text-zinc-50">
              <ContactIcon>
                <Clock className="size-3.5" />
              </ContactIcon>
              <span className="hover:underline">{formatTime(currentTime)}</span>
            </div>
          </div>

          <div className="flex flex-col gap-2.5">
            <div className="flex items-center gap-3 text-zinc-900 dark:text-zinc-50">
              <ContactIcon>
                <FileText className="size-3.5" />
              </ContactIcon>
              <a href="#" className="hover:underline">
                Resume
              </a>
            </div>
            <div className="flex items-center gap-3 text-zinc-900 dark:text-zinc-50">
              <ContactIcon>
                <MarsIcon />
              </ContactIcon>
              <span className="hover:underline">He/him</span>
            </div>
            <div className="flex items-center gap-3 text-zinc-900 dark:text-zinc-50">
              <ContactIcon>
                <Globe className="size-3.5" />
              </ContactIcon>
              <a
                href="hisamuddin.dev"
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
              >
                Hisamuddin.dev
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Social Links Row */}
      <div className="w-full border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-3xl mx-auto w-[95%] md:w-full border-x border-zinc-200 dark:border-zinc-800 h-32 md:h-16 grid grid-cols-2 md:grid-cols-4 font-mono">
          <a
            href="#"
            className="group hover:bg-zinc-100 dark:hover:bg-zinc-900 transition border-r border-zinc-200 dark:border-zinc-800 flex items-center justify-between px-3 pl-4 border-b md:border-b-0"
          >
            <div className="flex items-center gap-2 text-zinc-900 dark:text-zinc-50">
              <div className="size-6 rounded-md bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center shrink-0">
                <FaLinkedin className="size-4 text-[#0077b5]" />
              </div>
              <h3 className="text-sm">LinkedIn</h3>
            </div>
            <ArrowUpRight className="size-4 text-zinc-400 group-hover:rotate-45 transition" />
          </a>
          <a
            href="#"
            className="group hover:bg-zinc-100 dark:hover:bg-zinc-900 transition md:border-r border-zinc-200 dark:border-zinc-800 flex items-center justify-between px-3 pl-4 border-b md:border-b-0"
          >
            <div className="flex items-center gap-2 text-zinc-900 dark:text-zinc-50">
              <div className="size-6 rounded-md bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center shrink-0">
                <FaGithub className="size-4" />
              </div>
              <h3 className="text-sm">Github</h3>
            </div>
            <ArrowUpRight className="size-4 text-zinc-400 group-hover:rotate-45 transition" />
          </a>
          <a
            href="#"
            className="group hover:bg-zinc-100 dark:hover:bg-zinc-900 transition border-r border-zinc-200 dark:border-zinc-800 flex items-center justify-between px-3 pl-4"
          >
            <div className="flex items-center gap-2 text-zinc-900 dark:text-zinc-50">
              <div className="size-6 rounded-md bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center shrink-0">
                <FaXTwitter className="size-3.5" />
              </div>
              <h3 className="text-sm">X</h3>
            </div>
            <ArrowUpRight className="size-4 text-zinc-400 group-hover:rotate-45 transition" />
          </a>
          <a
            href="#"
            className="group hover:bg-zinc-100 dark:hover:bg-zinc-900 transition flex items-center justify-between px-3 pl-4"
          >
            <div className="flex items-center gap-2 text-zinc-900 dark:text-zinc-50">
              <div className="size-6 rounded-md bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center shrink-0">
                <SiLeetcode className="size-4 text-[#FFA116]" />
              </div>
              <h3 className="text-sm">LeetCode</h3>
            </div>
            <ArrowUpRight className="size-4 text-zinc-400 group-hover:rotate-45 transition" />
          </a>
        </div>
      </div>
    </section>
  );
}
