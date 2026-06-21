import { Github, ExternalLink } from 'lucide-react'
import Section from './Section'
import Reveal from './Reveal'
import { projects } from '../data/content'

function ProjectCard({ p, featured, delay }) {
  return (
    <Reveal
      delay={delay}
      className={`group relative rounded-xl border border-white/8 bg-surface/60 p-6 hover:border-accent/40 hover:-translate-y-1 transition-all ${
        featured ? 'sm:col-span-2' : ''
      }`}
    >
      {featured && (
        <span className="absolute top-6 right-6 font-mono text-[11px] uppercase tracking-wider text-accent2">
          Featured
        </span>
      )}
      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent transition-colors">
        {p.title}
      </h3>
      <p className="text-slate-400 leading-relaxed mb-4 max-w-2xl">{p.description}</p>
      <div className="flex flex-wrap gap-2 mb-5">
        {p.tags.map((t) => (
          <span key={t} className="font-mono text-xs px-2 py-1 rounded bg-white/5 text-slate-400">
            {t}
          </span>
        ))}
      </div>
      <div className="flex items-center gap-4">
        {p.links?.code && (
          <a href={p.links.code} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-sm text-slate-300 hover:text-accent">
            <Github size={16} /> Code
          </a>
        )}
        {p.links?.demo && (
          <a href={p.links.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-sm text-slate-300 hover:text-accent">
            <ExternalLink size={16} /> Live
          </a>
        )}
      </div>
    </Reveal>
  )
}

export default function Projects() {
  return (
    <Section id="projects" index="03" title="Projects">
      <div className="grid sm:grid-cols-2 gap-5">
        {projects.map((p, i) => (
          <ProjectCard key={p.title} p={p} featured={p.featured} delay={i * 60} />
        ))}
      </div>
    </Section>
  )
}
