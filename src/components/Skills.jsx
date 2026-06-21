import Section from './Section'
import Reveal from './Reveal'
import { skills } from '../data/content'

export default function Skills() {
  return (
    <Section id="skills" index="02" title="Skills">
      <div className="grid sm:grid-cols-2 gap-5">
        {skills.map((s, i) => (
          <Reveal
            key={s.group}
            delay={i * 60}
            className="rounded-xl border border-white/8 bg-surface/60 p-6 hover:border-accent/40 transition-colors"
          >
            <h3 className="font-mono text-sm text-accent mb-4">{s.group}</h3>
            <div className="flex flex-wrap gap-2">
              {s.items.map((item) => (
                <span key={item} className="px-3 py-1 rounded-md bg-white/5 text-sm text-slate-300 border border-white/5">
                  {item}
                </span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
