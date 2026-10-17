import { profiles, type ProfileId } from '../data/profile'

export default function ProfilePicker({ onPick }: { onPick: (id: ProfileId) => void }) {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
      <h1 className="rise text-3xl sm:text-5xl font-bold tracking-tight">Who&apos;s watching?</h1>
      <p className="rise mt-3 text-mute max-w-md">
        Pick a profile. It only changes which episodes come first.
      </p>
      <ul className="rise mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-2xl">
        {profiles.map((p) => (
          <li key={p.id}>
            <button
              onClick={() => onPick(p.id)}
              className="w-full rounded-xl border border-line bg-panel px-6 py-8 hover:border-accent hover:-translate-y-1 transition"
            >
              <span className="block text-xl font-semibold">{p.label}</span>
              <span className="block mt-1 text-sm text-mute">{p.hint}</span>
            </button>
          </li>
        ))}
      </ul>
      <p className="mt-12 text-xs text-mute">
        <a className="underline" href="/privacy.html">Privacy</a> ·{' '}
        <a className="underline" href="/data-deletion.html">Data deletion</a>
      </p>
    </main>
  )
}
