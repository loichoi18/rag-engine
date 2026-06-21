import Section from './Section'
import Reveal from './Reveal'
import { timeline } from '../data/content'

export default function Timeline() {
  return (
    <Section id="timeline" index="04" title="Journey">
      <div className="relative border-l border-white/10 ml-2 space-y-10">
        {timeline.map((t, i) => (
          <Reveal key={i} delay={i * 60} className="relative pl-8">
            <span className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-accent ring-4 ring-bg" />
            <p className="font-mono text-xs text-accent2 mb-1">{t.when}</p>
            <h3 className="text-lg font-semibold text-white">{t.title}</h3>
            <p className="text-sm text-slate-400">{t.place}</p>
            <p className="mt-2 text-slate-400">{t.detail}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
