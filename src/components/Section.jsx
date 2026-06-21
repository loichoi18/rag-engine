import Reveal from './Reveal'

export default function Section({ id, index, title, children }) {
  return (
    <section id={id} className="max-w-5xl mx-auto px-6 py-24 scroll-mt-16">
      <Reveal as="h2" className="flex items-center gap-3 text-2xl sm:text-3xl font-bold text-white mb-12">
        <span className="font-mono text-accent text-lg">{index}.</span>
        {title}
        <span className="flex-1 h-px bg-white/10 ml-2" />
      </Reveal>
      {children}
    </section>
  )
}
