import {
  CONTACT_EMAIL,
  GYM_START,
  LINKEDIN_URL,
  YOUTUBE_URL,
  links,
  person,
  profiles,
  seasons,
  type ProfileId,
} from '../data/profile'

function gymDay(): number {
  const start = new Date(GYM_START + 'T00:00:00').getTime()
  return Math.max(1, Math.floor((Date.now() - start) / 86400000) + 1)
}

const btn =
  'inline-block rounded-md px-5 py-3 text-sm font-semibold border border-line bg-panel hover:border-accent transition'

export default function Site({ profile, onSwitch }: { profile: ProfileId; onSwitch: () => void }) {
  const order = profiles.find((p) => p.id === profile)!.order
  const sorted = [...seasons].sort((a, b) => order.indexOf(a.id) - order.indexOf(b.id))
  const day = gymDay()
  const mail = CONTACT_EMAIL.includes('@') ? `mailto:${CONTACT_EMAIL}` : null

  return (
    <>
      <header className="sticky top-0 z-10 flex items-center justify-between px-4 sm:px-8 py-3 bg-ink/90 backdrop-blur border-b border-line">
        <span className="font-black tracking-widest text-accent text-sm">ANUBHAV</span>
        <button onClick={onSwitch} className="text-sm text-mute hover:text-white">
          Watching as {profiles.find((p) => p.id === profile)!.label} · switch
        </button>
      </header>

      <main>
        <section className="relative">
          <picture>
            <source srcSet="/assets/hero.webp" type="image/webp" />
            <img
              src="/assets/hero.jpg"
              alt={person.heroAlt}
              width={900}
              height={900}
              className="w-full h-[70vh] sm:h-[80vh] object-cover object-top"
            />
          </picture>
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 px-4 sm:px-8 pb-8 max-w-4xl">
            <p className="text-accent text-xs font-bold tracking-widest">A PERSONAL SERIES</p>
            <h1 className="rise text-4xl sm:text-6xl font-black tracking-tight mt-1">
              ANUBHAV: THE SERIES
            </h1>
            <p className="mt-3 text-lg sm:text-xl">
              {person.name}. {person.role}, {person.city}. {person.age}.
            </p>
            <p className="text-mute">{person.tagline}</p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a className={btn + ' !bg-accent !border-accent'} href={links.instagramBuild}>Watch Season 2</a>
              {mail && <a className={btn} href={mail}>Contact</a>}
              {LINKEDIN_URL && <a className={btn} href={LINKEDIN_URL}>LinkedIn</a>}
            </div>
          </div>
        </section>

        {sorted.map((s) => (
          <section key={s.id} id={s.id} className="px-4 sm:px-8 py-10 max-w-6xl mx-auto">
            <p className="text-xs tracking-widest text-mute">SEASON {s.number}</p>
            <h2 className="text-2xl sm:text-3xl font-bold">{s.title}</h2>
            <p className="text-mute mt-1">{s.subtitle}</p>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {s.originals.map((o, i) => (
                <li key={o.title} className="rounded-xl border border-line bg-panel p-5">
                  <p className="text-xs text-accent font-bold tracking-widest">
                    EPISODE {i + 1} · ORIGINAL
                  </p>
                  <h3 className="mt-1 text-lg font-semibold">{o.title}</h3>
                  <p className="mt-2 text-sm text-mute leading-relaxed">{o.blurb}</p>
                  <p className="mt-3 flex flex-wrap gap-2">
                    {o.tags.map((t) => (
                      <span key={t} className="text-xs rounded-full border border-line px-2 py-0.5">{t}</span>
                    ))}
                  </p>
                  {s.id === 'offscreen' && o.title === 'Gym' && (
                    <p className="mt-3 text-2xl font-black text-accent">Day {day}</p>
                  )}
                  {s.id === 'offscreen' && o.title === 'Singing' && YOUTUBE_URL && (
                    <a className="mt-3 inline-block text-sm underline" href={YOUTUBE_URL}>Listen on YouTube</a>
                  )}
                </li>
              ))}
            </ul>
            {s.link && (
              <a className={btn + ' mt-5'} href={s.link.href}>{s.link.label}</a>
            )}
          </section>
        ))}

        <section id="contact" className="px-4 sm:px-8 py-10 max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold">Find the cast</h2>
          <p className="mt-4 flex flex-wrap gap-3">
            <a className={btn} href={links.instagram}>Instagram @feeling_anubhav</a>
            <a className={btn} href={links.instagramBuild}>Instagram @anubhavbuildsai</a>
            <a className={btn} href={links.github}>GitHub</a>
            {LINKEDIN_URL && <a className={btn} href={LINKEDIN_URL}>LinkedIn</a>}
            {mail && <a className={btn} href={mail}>{CONTACT_EMAIL}</a>}
          </p>
        </section>
      </main>

      <footer className="px-4 sm:px-8 py-8 border-t border-line text-xs text-mute">
        <p>
          <a className="underline" href="/privacy.html">Privacy policy</a> ·{' '}
          <a className="underline" href="/data-deletion.html">Data deletion</a>
        </p>
        <p className="mt-2">
          A fictional streaming-style design made for this site. Not affiliated with, or imitating,
          any real streaming service.
        </p>
      </footer>
    </>
  )
}
