import {
  Code2,
  Database,
  Globe,
  Palette,
  Server,
  Smartphone,
} from "lucide-react";

const skills = [
  {
    name: "Frontend",
    icon: Globe,
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS"],
  },
  {
    name: "Backend",
    icon: Server,
    items: ["Node.js", "Express", "REST API", "GraphQL"],
  },
  {
    name: "Database",
    icon: Database,
    items: ["PostgreSQL", "MongoDB", "Prisma", "Redis"],
  },
  { name: "Tools", icon: Code2, items: ["Git", "Docker", "VS Code", "Figma"] },
  { name: "Mobile", icon: Smartphone, items: ["React Native", "Flutter"] },
  { name: "Design", icon: Palette, items: ["UI/UX", "Figma", "Adobe XD"] },
];

export default function AboutPage() {
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
            Get to know me
          </p>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-4">
            About <span className="gradient-text">Me</span>
          </h1>
          <p className="text-sm sm:text-base text-[var(--text-muted)] max-w-lg mx-auto leading-relaxed">
            Cerita singkat tentang latar belakang, pendidikan, dan fokus
            keahlian saya di bidang teknologi.
          </p>
        </div>

        {/* Bio Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {/* Profile Card */}
          <div className="animate-fade-in-up">
            <div className="glass-card p-8 rounded-3xl border border-white/10 hover:border-[var(--accent)]/50 transition-all duration-500 bg-gradient-to-b from-white/[0.03] to-transparent shadow-xl backdrop-blur-xl text-center relative overflow-hidden h-full flex flex-col justify-center">
              <div className="absolute top-0 right-0 -mt-6 -mr-6 w-32 h-32 bg-[var(--accent)]/10 rounded-full blur-3xl" />
              <div className="flex justify-center mb-6">
                <img
                  src="/profile.jpg"
                  width={192}
                  height={192}
                  alt="Muhammad Iqbal"
                  className="w-48 h-48 rounded-full object-cover border-4 border-[var(--accent)]/40 shadow-xl"
                />
              </div>
              <h2 className="text-2xl font-bold mb-1 tracking-tight text-white">
                Muhammad Iqbal
              </h2>
              <p className="text-sm text-[var(--accent)] font-mono">
                Full-Stack Developer
              </p>
            </div>
          </div>

          {/* Info & Bio Details */}
          <div className="animate-fade-in-up space-y-6">
            {/* Personal Info Card */}
            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-white/10 hover:border-[var(--accent)]/50 transition-all duration-500 bg-gradient-to-b from-white/[0.03] to-transparent shadow-xl backdrop-blur-xl">
              <h3 className="text-lg font-bold mb-4 text-[var(--accent)] flex items-center gap-2">
                📋 Personal Info
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-[var(--text-muted)]">Full Name</span>
                  <span className="font-medium text-white">Muhammad Iqbal</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-[var(--text-muted)]">Location</span>
                  <span className="font-medium text-white">Indonesia 🇮🇩</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-[var(--text-muted)]">Email</span>
                  <a
                    href="mailto:muhammadiqbal06112004@gmail.com"
                    className="font-medium text-[var(--accent)] hover:underline truncate max-w-[200px] sm:max-w-xs"
                  >
                    muhammadiqbal06112004@gmail.com
                  </a>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-[var(--text-muted)]">Status</span>
                  <span className="text-green-400 font-medium flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    Available for work
                  </span>
                </div>
              </div>
            </div>

            {/* About Description Card */}
            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-white/10 hover:border-[var(--accent)]/50 transition-all duration-500 bg-gradient-to-b from-white/[0.03] to-transparent shadow-xl backdrop-blur-xl">
              <h3 className="text-lg font-bold mb-3 text-[var(--accent)] flex items-center gap-2">
                🎯 About Me
              </h3>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                I&apos;m a passionate developer from Indonesia who loves
                creating digital experiences. I specialize in full-stack web
                development with modern technologies. When I&apos;m not coding,
                you can find me exploring new technologies, contributing to open
                source, or enjoying a cup of coffee while reading tech articles.
              </p>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-2">
              My <span className="gradient-text">Skills</span>
            </h2>
            <p className="text-sm text-[var(--text-muted)]">
              Teknologi dan perangkat yang biasa digunakan dalam pengembangan.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, i) => (
              <div
                key={skill.name}
                className="glass-card p-6 rounded-3xl border border-white/10 hover:border-[var(--accent)]/60 transition-all duration-500 group relative overflow-hidden bg-gradient-to-b from-white/[0.03] to-transparent shadow-xl backdrop-blur-xl animate-fade-in-up"
                style={{ animationDelay: `${(i + 1) * 100}ms` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[var(--accent)]/10 border border-[var(--accent)]/20 flex items-center justify-center text-[var(--accent)] group-hover:scale-110 transition-transform duration-300">
                    <skill.icon size={20} />
                  </div>
                  <h3 className="font-bold text-lg tracking-tight text-white">
                    {skill.name}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 text-xs font-medium rounded-lg bg-white/5 border border-white/10 text-[var(--text-muted)] group-hover:border-[var(--accent)]/30 transition-all"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
