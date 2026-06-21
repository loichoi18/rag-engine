import { profile } from '../data/content'

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <p className="font-mono text-xs text-slate-500">
          Built by {profile.name} · React + Tailwind · {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  )
}
