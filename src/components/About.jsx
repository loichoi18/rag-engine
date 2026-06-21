import Section from './Section'
import Reveal from './Reveal'
import { about } from '../data/content'

export default function About() {
  return (
    <Section id="about" index="01" title="About">
      <Reveal className="space-y-4 max-w-2xl text-lg leading-relaxed text-slate-400">
        {about.paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </Reveal>
    </Section>
  )
}
