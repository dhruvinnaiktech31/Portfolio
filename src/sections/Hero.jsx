import Card from "../components/Card";
import GradientBlob from "../components/GradientBlob";
import Me from "../Images/id.png";
import { FaInstagram } from "react-icons/fa";
import { LuLinkedin, LuGithub } from "react-icons/lu";
import { BsTwitterX } from "react-icons/bs";
export default function Hero() {
  const socialLinks = [
    { icon: <LuLinkedin />, url: "https://www.linkedin.com/in/dhruvinnaik2108/" },
    { icon: <LuGithub />, url: "https://github.com/dhruvinnaiktech31" },
    { icon: <FaInstagram />, url: "https://www.instagram.com/naik_tech/" },
    { icon: <BsTwitterX />, url: "https://x.com/DhruvinNaik031" },
  ];

  return (
    <section id="home" className="relative pt-[120px] md:pt-[140px] pb-16 md:pb-24">
      <GradientBlob />
      <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs mb-4 text-neutral-600 dark:text-neutral-300">
            <span className="h-2 w-2 rounded-full bg-emerald-500"/> Available for opportunities
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Hi, I'm <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">Dhruvin Naik</span>
          </h1>
          <p className="mt-4 text-lg text-neutral-700 dark:text-neutral-300">
            Frontend developer crafting clean, responsive interfaces with React, JavaScript, and modern CSS.
          </p>
          <div className="mt-6 flex gap-3">
            <a 
              href="/my-cv.pdf" 
              target="_blank" 
              className="px-5 py-2.5 rounded-xl bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 hover:shadow-[0_0_25px_5px_rgba(234,179,8,0.6)] transition duration-300"
            >
              Download CV
            </a>
            <a 
              href="https://mail.google.com/mail/?view=cm&fs=1&to=dhruvin.naik.tech31@gmail.com&su=Hire%20Request" 
              target="_blank" 
              className="px-5 py-2.5 rounded-xl border border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-neutral-100 transition duration-300 hover:shadow-[0_0_15px_black] dark:hover:shadow-[0_0_15px_white]"
            >
              Drop me Mail
            </a>
          </div>

          {/* Social Media Icons */}
          <div className="mt-8 flex gap-10 text-2xl text-neutral-700 dark:text-neutral-300">
            {socialLinks.map((s, idx) => (
              <a 
                key={idx} 
                href={s.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-yellow-500 transition-colors duration-300"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        <Card className="p-6 md:p-8">
          <div className="aspect-square w-full max-h-80 rounded-2xl flex items-center justify-center">
            <img
              src={Me}
              alt="Your Name"
              className="max-h-full max-w-full object-contain rounded-2xl"
            />
          </div>

          <p className="mt-4 text-sm text-neutral-600 dark:text-neutral-400 text-center">
            Passionate Computer Engineer | React & Java Developer
          </p>
        </Card>
      </div>
    </section>
  );
}
