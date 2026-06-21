import { Github, Linkedin, Mail } from 'lucide-react'
import Reveal from './Reveal'
import { profile } from '../data/content'

export default function Contact() {
  return (
    <section id="contact" className="max-w-5xl mx-auto px-6 py-28 text-center scroll-mt-16">
      <Reveal>
        <p className="font-mono text-accent text-sm mb-4">05. What's next?</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5">Let's build something.</h2>
        <p className="max-w-md mx-auto text-slate-400 mb-8">
          I'm open to internships, research, and collaboration. My inbox is always open — feel free to reach out.
        </p>
        <a
          href={`mailto:${profile.email}`}
          className="inline-block px-8 py-3.5 rounded-lg bg-accent text-bg font-semibold hover:bg-sky-300 transition-colors"
        >
          Say Hello
        </a>
        <div className="flex items-center justify-center gap-6 mt-10">
          {profile.socials.github && (
            <a href={profile.socials.github} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white"><Github size={22} /></a>
          )}
          {profile.socials.linkedin && (
            <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white"><Linkedin size={22} /></a>
          )}
          <a href={`mailto:${profile.email}`} className="text-slate-400 hover:text-white"><Mail size={22} /></a>
        </div>
      </Reveal>
    </section>
  )
}
