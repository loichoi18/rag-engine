import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react'
import { profile } from '../data/content'

export default function Hero() {
  return (
    <section id="top" className="grid-bg relative min-h-screen flex items-center">
      <div className="max-w-5xl mx-auto px-6 w-full pt-24 pb-16">
        <p className="font-mono text-accent text-sm mb-5 animate-[fadeUp_0.5s_ease-out_both]">
          $ whoami
        </p>

        <h1 className="text-4xl sm:text-6xl font-extrabold text-white leading-tight animate-[fadeUp_0.6s_ease-out_0.05s_both]">
          {profile.name}
          <span className="text-accent">.</span>
        </h1>

        <h2 className="mt-3 text-xl sm:text-2xl font-semibold gradient-text animate-[fadeUp_0.6s_ease-out_0.15s_both]">
          {profile.role}
        </h2>

        <p className="mt-6 max-w-xl text-lg text-slate-400 animate-[fadeUp_0.6s_ease-out_0.25s_both]">
          {profile.tagline}
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4 animate-[fadeUp_0.6s_ease-out_0.35s_both]">
          <a
            href="#projects"
            className="px-6 py-3 rounded-lg bg-accent text-bg font-semibold hover:bg-sky-300 transition-colors"
          >
            View My Work
          </a>
          {profile.resumeUrl && (
            <a
              href={profile.resumeUrl}
              className="px-6 py-3 rounded-lg border border-white/15 text-white font-semibold hover:border-accent hover:text-accent transition-colors"
            >
              Resume
            </a>
          )}
          <div className="flex items-center gap-4 ml-1">
            {profile.socials.github && (
              <a href={profile.socials.github} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white" aria-label="GitHub"><Github size={22} /></a>
            )}
            {profile.socials.linkedin && (
              <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white" aria-label="LinkedIn"><Linkedin size={22} /></a>
            )}
            <a href={`mailto:${profile.email}`} className="text-slate-400 hover:text-white" aria-label="Email"><Mail size={22} /></a>
          </div>
        </div>
      </div>

      <a href="#about" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500 hover:text-accent animate-float" aria-label="Scroll down">
        <ArrowDown size={24} />
      </a>
    </section>
  )
}
