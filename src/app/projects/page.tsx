import { ExternalLink, FolderKanban } from "lucide-react";
import { FaGithub } from "react-icons/fa";

// Fungsi untuk mengambil data repository publik dari GitHub secara otomatis
async function getGitHubProjects() {
  try {
    const username = "Ibaleuu"; // Username GitHub kamu
    const res = await fetch(
      `https://api.github.com/users/${username}/repos?sort=updated&per_page=6`,
      { next: { revalidate: 3600 } }, // Cache data selama 1 jam agar tidak terkena limit API GitHub
    );

    if (!res.ok) return [];
    const repos = await res.json();
    return repos;
  } catch (error) {
    console.error("Gagal mengambil data GitHub:", error);
    return [];
  }
}

export default async function ProjectsPage() {
  const repos = await getGitHubProjects();

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
            What I&apos;ve built
          </p>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-4">
            My <span className="gradient-text">Projects</span>
          </h1>

          {/* Perbaikan: max-w-lg mx-auto agar teks terbungkus rapi dan sejajar seimbang */}
          <p className="text-sm sm:text-base text-[var(--text-muted)] max-w-lg mx-auto leading-relaxed">
            Daftar proyek ini disinkronkan secara otomatis langsung dari
            repository GitHub saya.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {repos.length > 0 ? (
            repos.map((repo: any, i: number) => (
              <div
                key={repo.id}
                className="glass-card rounded-3xl border border-white/10 hover:border-[var(--accent)]/60 transition-all duration-500 group relative overflow-hidden bg-gradient-to-b from-white/[0.03] to-transparent shadow-xl backdrop-blur-xl flex flex-col justify-between animate-fade-in-up"
                style={{ animationDelay: `${(i + 1) * 100}ms` }}
              >
                <div>
                  {/* Placeholder image header */}
                  <div className="relative h-48 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border-b border-white/5 flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 bg-[var(--accent)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <FolderKanban
                      className="text-[var(--accent)] group-hover:scale-110 transition-transform duration-500"
                      size={48}
                    />
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs px-3 py-1 rounded-full bg-[var(--accent)]/10 text-[var(--accent)] border border-[var(--accent)]/20 font-medium">
                        {repo.language || "GitHub Project"}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-white tracking-tight">
                      {repo.name}
                    </h3>
                    <p className="text-sm text-[var(--text-muted)] mb-4 line-clamp-3 leading-relaxed">
                      {repo.description ||
                        "Tidak ada deskripsi yang ditambahkan pada repository ini."}
                    </p>

                    {/* Tech tags dari GitHub Topics */}
                    {repo.topics && repo.topics.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {repo.topics.map((t: string) => (
                          <span
                            key={t}
                            className="text-xs px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-[var(--text-muted)] font-medium"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <div className="px-6 pb-6 pt-0">
                  {/* Links */}
                  <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                    {repo.html_url && (
                      <a
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors"
                      >
                        <FaGithub size={16} /> Code
                      </a>
                    )}
                    {repo.homepage && (
                      <a
                        href={repo.homepage}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--accent)] hover:underline"
                      >
                        <ExternalLink size={16} /> Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center text-[var(--text-muted)] py-12 glass-card rounded-3xl border border-white/10 backdrop-blur-xl">
              Belum ada proyek yang dimuat atau gagal terhubung ke GitHub.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
