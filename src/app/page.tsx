import Link from "next/link";
import {
  ArrowRight,
  Code2,
  GraduationCap,
  Terminal,
  ShieldCheck,
} from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      {/* --- ULTRA MODERN MESH BACKGROUND GLOW --- */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-[var(--accent)]/15 rounded-full blur-[160px] animate-pulse" />
        <div className="absolute top-1/3 right-1/4 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-purple-600/10 rounded-full blur-[180px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <div className="animate-fade-in-up">
            {/* Main Greeting & Name */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6">
              Hi, I&apos;m <span className="gradient-text">Muhammad Iqbal</span>
            </h1>

            {/* Bio Description */}
            <p className="text-base sm:text-xl text-[var(--text-muted)] max-w-2xl mx-auto mb-10 leading-relaxed">
              Mahasiswa Teknik Informatika semester 7 yang berfokus pada{" "}
              <span className="text-[var(--foreground)] font-semibold">
                Full-Stack Web Development
              </span>{" "}
              dan eksplorasi keamanan siber modern.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
              <Link
                href="/projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-[var(--accent)] text-white font-medium hover:opacity-90 shadow-xl shadow-[var(--accent)]/25 transition-all duration-300 hover:scale-105"
              >
                Explore Projects <ArrowRight size={18} />
              </Link>
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 hover:border-[var(--accent)]/40 transition-all duration-300 backdrop-blur-xl"
              >
                <Terminal size={18} /> Contact
              </Link>
            </div>

            {/* Social Links (Gmail di tengah-tengah) */}
            <div className="flex items-center justify-center gap-4">
              {[
                {
                  icon: FaGithub,
                  href: "https://github.com/Ibaleuu",
                  label: "GitHub",
                },
                {
                  icon: FaLinkedin,
                  href: "https://linkedin.com",
                  label: "LinkedIn",
                },
                {
                  icon: FaEnvelope,
                  href: "mailto:muhammadiqbal@gmail.com",
                  label: "Gmail",
                },
                {
                  icon: FaInstagram,
                  href: "https://instagram.com",
                  label: "Instagram",
                },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-2xl bg-white/5 border border-white/10 text-[var(--text-muted)] hover:text-[var(--accent)] hover:border-[var(--accent)]/50 hover:bg-white/10 transition-all duration-300 shadow-md group"
                  title={social.label}
                >
                  <social.icon
                    size={20}
                    className="group-hover:scale-110 transition-transform"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bento Grid Stats */}
      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Code2,
                title: "Tech Stack",
                desc: "Next.js, TypeScript, React, Tailwind CSS, Node.js, PostgreSQL",
              },
              {
                icon: ShieldCheck,
                title: "Web Security",
                desc: "Mempelajari praktik keamanan OWASP Top 10 dan sistem enkripsi data",
              },
              {
                icon: GraduationCap,
                title: "Academic Background",
                desc: "Mahasiswa Informatika semester 6 dengan dedikasi tinggi pada rekayasa perangkat lunak",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="glass-card p-8 rounded-3xl border border-white/10 hover:border-[var(--accent)]/60 transition-all duration-500 group relative overflow-hidden bg-gradient-to-b from-white/[0.03] to-transparent shadow-xl backdrop-blur-xl"
              >
                <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-[var(--accent)]/10 rounded-full blur-2xl group-hover:bg-[var(--accent)]/20 transition-all duration-500" />
                <div className="w-14 h-14 rounded-2xl bg-[var(--accent)]/10 border border-[var(--accent)]/20 flex items-center justify-center text-[var(--accent)] mb-6 group-hover:scale-110 transition-transform duration-300">
                  <item.icon size={26} />
                </div>
                <h3 className="text-xl font-bold mb-3 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
