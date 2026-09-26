"use client";

import { useState } from "react";
import {
  Send,
  MapPin,
  Mail,
  Phone,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("sent");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
        setErrorMessage(
          data.error || "Gagal mengirim pesan. Silakan coba lagi.",
        );
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("error");
      setErrorMessage(
        "Terjadi kesalahan jaringan. Periksa koneksi internet Anda.",
      );
    } finally {
      // Kembalikan status ke idle setelah beberapa detik jika sukses
      setTimeout(() => {
        setStatus((prev) => (prev === "sent" ? "idle" : prev));
      }, 5000);
    }
  };

  return (
    <div className="relative min-h-screen py-20 overflow-hidden">
      {/* --- ULTRA MODERN MESH BACKGROUND GLOW --- */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-[var(--accent)]/15 rounded-full blur-[160px] animate-pulse" />
        <div className="absolute top-1/3 right-1/4 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-purple-600/10 rounded-full blur-[180px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <p className="text-[var(--accent)] font-mono text-sm mb-3">
            Get in touch
          </p>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-4">
            Contact <span className="gradient-text">Me</span>
          </h1>
          <p className="text-sm sm:text-base text-[var(--text-muted)] max-w-lg mx-auto leading-relaxed">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Info & Socials Column */}
          <div className="space-y-6 animate-fade-in-up">
            {/* Contact Info Card */}
            <div className="glass-card p-8 rounded-3xl border border-white/10 hover:border-[var(--accent)]/50 transition-all duration-500 bg-gradient-to-b from-white/[0.03] to-transparent shadow-xl backdrop-blur-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 -mt-6 -mr-6 w-32 h-32 bg-[var(--accent)]/10 rounded-full blur-3xl" />
              <h3 className="text-xl font-bold mb-6 text-white tracking-tight">
                Contact Info
              </h3>
              <div className="space-y-5">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[var(--accent)]/10 border border-[var(--accent)]/20 flex items-center justify-center text-[var(--accent)] shrink-0">
                    <Mail size={22} />
                  </div>
                  <div>
                    <p className="text-xs text-[var(--text-muted)] font-mono">
                      Email
                    </p>
                    <p className="text-sm font-medium text-white">
                      muhammadiqbal06112004@gmail.com
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[var(--accent)]/10 border border-[var(--accent)]/20 flex items-center justify-center text-[var(--accent)] shrink-0">
                    <Phone size={22} />
                  </div>
                  <div>
                    <p className="text-xs text-[var(--text-muted)] font-mono">
                      Phone
                    </p>
                    <p className="text-sm font-medium text-white">
                      +62 878-4218-9241
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[var(--accent)]/10 border border-[var(--accent)]/20 flex items-center justify-center text-[var(--accent)] shrink-0">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <p className="text-xs text-[var(--text-muted)] font-mono">
                      Location
                    </p>
                    <p className="text-sm font-medium text-white">
                      Indonesia 🇮🇩
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media Card */}
            <div className="glass-card p-8 rounded-3xl border border-white/10 hover:border-[var(--accent)]/50 transition-all duration-500 bg-gradient-to-b from-white/[0.03] to-transparent shadow-xl backdrop-blur-xl">
              <h3 className="text-xl font-bold mb-4 text-white tracking-tight">
                Social Media
              </h3>
              <div className="flex gap-3">
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
                    className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--accent)] hover:border-[var(--accent)]/50 hover:bg-[var(--accent)]/10 transition-all duration-300"
                    title={social.label}
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form Column */}
          <div className="animate-fade-in-up">
            <form
              onSubmit={handleSubmit}
              className="glass-card p-8 rounded-3xl border border-white/10 hover:border-[var(--accent)]/50 transition-all duration-500 bg-gradient-to-b from-white/[0.03] to-transparent shadow-xl backdrop-blur-xl space-y-5"
            >
              <h3 className="text-xl font-bold mb-2 text-white tracking-tight">
                Send Message
              </h3>

              {/* Status Alert Messages */}
              {status === "sent" && (
                <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm flex items-center gap-3">
                  <CheckCircle2 size={20} className="shrink-0" />
                  <span>
                    Pesan berhasil dikirim dan tersimpan! Terima kasih.
                  </span>
                </div>
              )}

              {status === "error" && (
                <div className="p-4 rounded-2xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm flex items-center gap-3">
                  <AlertCircle size={20} className="shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <div>
                <label className="block text-xs font-mono text-[var(--text-muted)] mb-2">
                  Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-sm text-white placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] transition-all"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-[var(--text-muted)] mb-2">
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-sm text-white placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] transition-all"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-[var(--text-muted)] mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-sm text-white placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] transition-all"
                  placeholder="Subject"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-[var(--text-muted)] mb-2">
                  Message
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-sm text-white placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] transition-all resize-none"
                  placeholder="Write your message..."
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-[var(--accent)] text-white font-medium hover:opacity-95 transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
              >
                {status === "sending" ? (
                  "Sending..."
                ) : status === "sent" ? (
                  "✅ Message Sent!"
                ) : (
                  <>
                    Send Message <Send size={16} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
