"use client";
import { Noto_Serif_JP, Noto_Sans_JP, Shippori_Mincho } from "next/font/google";
import content from "../data/content.json";

const display = Noto_Serif_JP({ subsets: ["latin"], weight: ["400", "500", "700", "900"], variable: "--font-display" });
const body = Noto_Sans_JP({ subsets: ["latin"], weight: ["400", "500", "700"], variable: "--font-body" });
const accent = Shippori_Mincho({ subsets: ["latin"], weight: ["400", "500", "700"], variable: "--font-accent" });

const INK = "#18181B";
const HINOMARU = "#DC2626";
const MATCHA = "#6B7C32";
const PAPER = "#FAFAF9";
const BONE = "#F5F5F4";
const MUTED = "#71717A";

const HERO_PHOTO = "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=1800&q=80&auto=format&fit=crop";
const SHOP_PHOTO = "https://images.unsplash.com/photo-1580822184713-fc5400e7fe10?w=1200&q=80&auto=format&fit=crop";

export default function Page() {
  const c = content as any;
  return (
    <main className={`${display.variable} ${body.variable} ${accent.variable} min-h-screen`} style={{ backgroundColor: PAPER, color: INK, fontFamily: "var(--font-body)" }}>
      <style jsx global>{`
        @keyframes fadeUp { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }
        .fade-up { animation: fadeUp 0.9s ease-out both; }
        .display-text { font-family: var(--font-display); }
        .accent-text { font-family: var(--font-accent); }
        .hinomaru { width: 22px; height: 22px; border-radius: 50%; background-color: ${HINOMARU}; display: inline-block; }
        .vertical-rule { writing-mode: vertical-rl; }
      `}</style>

      <header className="border-b" style={{ borderColor: INK, backgroundColor: PAPER }}>
        <div className="text-center py-2.5 text-xs uppercase tracking-[0.5em] font-bold" style={{ backgroundColor: INK, color: PAPER }}>
          GLENDALE · FOOTHILL BLVD · TERIYAKI · OPEN DAILY
        </div>
        <nav className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="hinomaru" />
            <div>
              <div className="display-text text-3xl font-black" style={{ color: INK }}>YAKI'S</div>
              <div className="accent-text text-xs uppercase tracking-[0.4em] mt-0" style={{ color: HINOMARU }}>· Original Teriyaki Bowl ·</div>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-8 text-xs uppercase tracking-[0.3em] font-bold">
            <a href="#about" style={{ color: INK }}>About</a>
            <a href="#menu" style={{ color: INK }}>メニュー</a>
            <a href="#reviews" style={{ color: INK }}>Reviews</a>
            <a href="#visit" style={{ color: INK }}>Visit</a>
          </div>
          <a href={c.hero.ctaLink} className="display-text px-6 py-3 text-sm font-bold tracking-wider" style={{ backgroundColor: HINOMARU, color: PAPER }}>CALL →</a>
        </nav>
      </header>

      <section className="py-24 border-b" style={{ borderColor: INK }}>
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7 fade-up">
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.5em] mb-6 font-bold" style={{ color: HINOMARU }}>
              <span className="hinomaru" style={{ width: 12, height: 12 }} />
              {c.hero.eyebrow}
            </div>
            <h1 className="display-text text-6xl md:text-9xl leading-[0.92] mb-8 font-black tracking-tight" style={{ color: INK }}>
              {c.hero.heading}
            </h1>
            <p className="text-lg leading-relaxed max-w-xl mb-10" style={{ color: INK }}>{c.hero.subheading}</p>
            <div className="flex flex-wrap items-center gap-6">
              <a href={c.hero.ctaLink} className="display-text px-8 py-4 text-base font-bold tracking-wider inline-flex items-center gap-3" style={{ backgroundColor: INK, color: PAPER }}>{c.hero.ctaText} →</a>
              <div className="accent-text">
                <div className="text-2xl font-bold" style={{ color: HINOMARU }}>★ 4.3 · 267</div>
                <div className="text-xs uppercase tracking-widest font-bold" style={{ color: MATCHA }}>reviews · foothill blvd</div>
              </div>
            </div>
          </div>
          <div className="md:col-span-5 fade-up">
            <div className="overflow-hidden border-4" style={{ borderColor: INK, aspectRatio: "4/5" }}>
              <div className="w-full h-full" style={{ backgroundImage: `url("${HERO_PHOTO}")`, backgroundSize: "cover", backgroundPosition: "center" }} />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-24 border-b" style={{ borderColor: INK, backgroundColor: BONE }}>
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <div className="text-xs uppercase tracking-[0.5em] mb-3 font-bold flex items-center gap-2" style={{ color: HINOMARU }}><span className="hinomaru" style={{ width: 8, height: 8 }} /> {c.about.label}</div>
            <h2 className="display-text text-4xl md:text-6xl leading-[1.0] font-black tracking-tight" style={{ color: INK }}>{c.about.heading}</h2>
            <div className="accent-text text-2xl mt-6" style={{ color: MATCHA }}>charcoal · marinade · time.</div>
          </div>
          <div className="md:col-span-7">
            <div className="space-y-5 text-lg leading-relaxed" style={{ color: INK }}>
              {c.about.paragraphs.map((p: string, i: number) => <p key={i}>{p}</p>)}
            </div>
          </div>
        </div>
      </section>

      <section id="menu" className="py-24 border-b" style={{ borderColor: INK, backgroundColor: PAPER }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="text-xs uppercase tracking-[0.5em] mb-3 font-bold" style={{ color: HINOMARU }}>· メニュー · MENU ·</div>
            <h2 className="display-text text-5xl md:text-7xl leading-tight font-black tracking-tight" style={{ color: INK }}>What's in the bowl.</h2>
          </div>
          <div className="divide-y" style={{ borderColor: INK }}>
            {c.services.map((s: any, i: number) => (
              <article key={i} className="py-8 grid md:grid-cols-12 gap-6 items-baseline" style={{ borderTop: `1px solid ${INK}30`, borderTopWidth: i === 0 ? "1px" : "0" }}>
                <div className="md:col-span-1 accent-text text-xs uppercase tracking-[0.3em] font-bold" style={{ color: HINOMARU }}>№ {String(i + 1).padStart(2, "0")}</div>
                <div className="md:col-span-4 display-text text-2xl font-black leading-tight" style={{ color: INK }}>{s.title}</div>
                <div className="md:col-span-5 text-base leading-relaxed" style={{ color: MUTED }}>{s.description}</div>
                <div className="md:col-span-2 display-text text-2xl text-right font-bold" style={{ color: HINOMARU }}>{s.price}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-24 border-b" style={{ borderColor: INK, backgroundColor: INK }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="text-xs uppercase tracking-[0.5em] mb-3 font-bold" style={{ color: HINOMARU }}>267 reviews</div>
            <h2 className="display-text text-5xl md:text-7xl leading-tight font-black tracking-tight" style={{ color: PAPER }}>What guests say.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {c.reviews.map((r: any, i: number) => (
              <figure key={i} className="p-7" style={{ border: `2px solid ${HINOMARU}`, backgroundColor: INK }}>
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: r.rating }).map((_, j) => <span key={j} style={{ color: HINOMARU, fontSize: 22 }}>★</span>)}
                </div>
                <blockquote className="text-base leading-relaxed mb-6" style={{ color: PAPER }}>"{r.text}"</blockquote>
                <figcaption>
                  <div className="display-text text-2xl font-black" style={{ color: HINOMARU }}>{r.name}</div>
                  <div className="text-[10px] uppercase tracking-widest font-bold mt-1" style={{ color: PAPER, opacity: 0.7 }}>{r.context}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="visit" className="py-24" style={{ backgroundColor: HINOMARU }}>
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">
          <div>
            <div className="text-xs uppercase tracking-[0.5em] mb-4 font-bold" style={{ color: PAPER, opacity: 0.85 }}>· Find the bowl ·</div>
            <h2 className="display-text text-5xl md:text-8xl leading-[0.9] mb-3 font-black tracking-tight" style={{ color: PAPER }}>Come on by.</h2>
            <div className="accent-text text-3xl mb-8" style={{ color: BONE }}>foothill boulevard · north glendale.</div>
            <dl className="space-y-5 mb-10">
              <div><dt className="text-xs uppercase tracking-[0.35em] mb-1 font-bold" style={{ color: PAPER, opacity: 0.85 }}>Address</dt><dd className="text-xl font-bold" style={{ color: PAPER }}>{c.contact.address}</dd></div>
              <div><dt className="text-xs uppercase tracking-[0.35em] mb-1 font-bold" style={{ color: PAPER, opacity: 0.85 }}>Call</dt><dd className="display-text text-4xl font-black"><a href={`tel:${c.contact.phone.replace(/\D/g, "")}`} style={{ color: PAPER }}>{c.contact.phone}</a></dd></div>
              <div><dt className="text-xs uppercase tracking-[0.35em] mb-2 font-bold" style={{ color: PAPER, opacity: 0.85 }}>Hours</dt><dd><table className="text-sm" style={{ color: PAPER }}><tbody>{Object.entries(c.contact.hours).map(([day, hours]) => (<tr key={day}><td className="pr-8 py-1 font-bold">{day}</td><td>{String(hours)}</td></tr>))}</tbody></table></dd></div>
            </dl>
          </div>
          <div className="overflow-hidden border-4" style={{ borderColor: INK, minHeight: 420 }}>
            <iframe src={`https://maps.google.com/maps?output=embed&q=${encodeURIComponent(c.contact.mapEmbedQuery || c.contact.address)}`} width="100%" height="500" style={{ border: 0 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
        </div>
      </section>

      <footer className="py-12 text-center" style={{ backgroundColor: INK, color: PAPER }}>
        <div className="display-text text-3xl font-black mb-2">YAKI'S ORIGINAL TERIYAKI</div>
        <div className="accent-text text-xl" style={{ color: HINOMARU }}>· charcoal · marinade · time · glendale ·</div>
        <div className="text-xs uppercase tracking-[0.4em] mt-4 opacity-60 font-bold">© {new Date().getFullYear()} YAKI'S TERIYAKI · GLENDALE, CA</div>
      </footer>
    </main>
  );
}
