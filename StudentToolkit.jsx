import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";


const TOOLS = [
  {
    id: "rayon",
    name: "Rayon.Design",
    tag: "بديل اوتوكاد",
    desc: "Browser-based CAD — sketch, draft & model without AutoCAD.",
    href: "https://www.rayon.design/app", 
    glyph: (
      <svg viewBox="0 0 48 48" width="24" height="24" fill="none">
        <rect x="8" y="8" width="32" height="32" rx="2" stroke="currentColor" strokeWidth="1.6" />
        <path d="M8 24h32M24 8v32" stroke="currentColor" strokeWidth="1.1" opacity="0.55" />
        <circle cx="24" cy="24" r="9" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    ),
  },
  {
    id: "sketchup",
    name: "SketchUp Online",
    tag: "3D بدون تحميل",
    desc: "Full 3D modeling straight in your tab, zero install.",
    href: "https://id.trimble.com/ui/sign_in.html?state=eyJhbGciOiJSUzI1NiIsImtpZCI6IjIiLCJ0eXAiOiJKV1QifQ.eyJvYXV0aF9wYXJhbWV0ZXJzIjp7ImNsaWVudF9pZCI6ImM5MTNhOTBjLTRkY2YtNGFmYi1iM2RiLTYzN2JlMzc3NDZiZiIsInJlZGlyZWN0X3VyaSI6Imh0dHBzOi8vYXBpLnNrZXRjaHVwLmNvbS9sb2dpbi92Mi9sb2dpbi90cmltYmxlaWQvY2FsbGJhY2siLCJyZXNwb25zZV90eXBlIjoiY29kZSIsInNjb3BlIjoic2tldGNodXAtbG9naW4tcHJvZC1WMiBvcGVuaWQgYWdlbnRzIHNrcG5ldCBpYW0gbW9kZWxzIiwic3RhdGUiOiJhNjlhNDE2ZC0wY2MyLTQ1ODAtOTkzZC0wYWY1OTBkZDYzMTkifSwiZXh0cmFfcGFyYW1ldGVycyI6e30sImludGVybmFsX3BhcmFtZXRlcnMiOnsic2VuZF9hY2NvdW50X2lkX2luX2NsYWltcyI6ZmFsc2UsImlzX2ludGVybmFsIjp0cnVlfSwiZXhwIjoiMjAyNi0wNy0wMiAyMTo0NToxMi42NzAzNjkiLCJuYmYiOjE3ODMwMjgxMTIsImV4cFRzIjoxNzgzMDI4NzEyLCJyZXFfZXhwIjoiMjAyNi0wNy0wMiAyMTozNzoxMi42NzA0MDgiLCJ0Y3BfcmVxdWVzdF9pZCI6IjEzZjEyYmQwNDE3MzRlOTM4ZmQzMGEwNTc3YTMwMzc2IiwiY29ycmVsYXRpb25faWQiOiJkNjVlNjQ1ODQ4NDY0MjRkYmI4NTI4ZDhmYWU1ZmE2Ml8xNzgzMDI3ODcwIiwiYXBwX2RhdGEiOnsiY3VzdG9tX2FwcGxpY2F0aW9uX2xvZ29fdXJsIjoiaHR0cHM6Ly9pZC50cmltYmxlLmNvbS9sb2dvcy9za2V0Y2h1cC1sb2dvXzE5XzAxXzIwMjJfdjEuc3ZnIiwic2hvd19vdHBfbWFuZGF0ZV9iYW5uZXIiOmZhbHNlLCJpc19mZWRlcmF0aW9uX2Rpc2FsbG93ZWQiOmZhbHNlLCJkaXNhbGxvd2VkX2ZlZGVyYXRpb25faWRzIjpbXSwiZW5hYmxlX3VpX3YyIjpmYWxzZX0sInN0YXRlX3Rva2VuX2lkIjoiZTZiZThmOWYtMGU3ZC00MmRjLTk2NDYtMzkwNjcyM2VjY2IzIiwidXNlcl90eXBlIjowLCJ1YW0iOjAsImlwbSI6WzAsMCwwLDAsMCwwXX0.T8QddaB124qwIIehvU5nkrXxOCNo9J5OTcxKKHlGpU7nCcVVolpqOYX9K8I1TrUTqcQc1fsznbSRt3B6UGwx0V8BKMjVbMkT1rm9xgk084JWKC_S9eGjV2X23rFMs9Ub8-rf9Kji9-BTLPf3sU_iw8jeHtG2ts0trTwbUYdevmQyxeiqqUHW4AEJjQM64bYh7gRlQpJLIUBYv0YODj4QV7WvVll4Qqe3w2QXhGEsPWYKh52hTSqQtWiWL-FwvxgWjeW6cJrrTAp0ClV4cPahqu28AEIN240Mj3dpEQigokh92WtI4IBhuyTaM1H5W8NIASVY0op2UT7S4OD2YNiAag", 
    glyph: (
      <svg viewBox="0 0 48 48" width="24" height="24" fill="none">
        <path d="M10 18 24 10l14 8-14 8-14-8Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M10 18v12l14 8 14-8V18" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M24 26v12" stroke="currentColor" strokeWidth="1.1" opacity="0.55" />
      </svg>
    ),
  },
  {
    id: "figma",
    name: "Figma",
    tag: "لتصميم بسيط",
    desc: "Light, fast interface & graphic design for quick mockups.",
    href: "https://www.figma.com/", 
    glyph: (
      <svg viewBox="0 0 48 48" width="24" height="24" fill="none">
        <path
          d="M20 8h8a6 6 0 0 1 0 12h-8V8Z M20 20h8a6 6 0 0 1 0 12h-8V20Z M20 32a6 6 0 1 1 -6 6a6 6 0 0 1 6 -6Z M14 8a6 6 0 0 0 0 12h6V8h-6Z M14 20a6 6 0 1 0 6 6v-6h-6Z"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

function useStars(count, seed = 1) {
  return useMemo(() => {
    let s = seed;
    const rand = () => {
      s = (s * 9301 + 49297) % 233280;
      return s / 233280;
    };
    return Array.from({ length: count }, () => ({
      top: rand() * 100,
      left: rand() * 100,
      size: rand() * 1.6 + 0.4,
      op: rand() * 0.55 + 0.2,
      twinkle: rand() * 4 + 3,
      depth: rand() * 0.6 + 0.2,
    }));
  }, [count, seed]);
}

function TiltCard({ children, className }) {
  const ref = useRef(null);
  const [style, setStyle] = useState({});

  const onMove = useCallback((e) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    setStyle({
      transform: `perspective(700px) rotateX(${(-py * 6).toFixed(2)}deg) rotateY(${(px * 6).toFixed(2)}deg) translateY(-3px)`,
      "--gx": `${(px + 0.5) * 100}%`,
      "--gy": `${(py + 0.5) * 100}%`,
      "--glow": 1,
    });
  }, []);

  const onLeave = useCallback(() => {
    setStyle({ transform: "perspective(700px) rotateX(0deg) rotateY(0deg) translateY(0px)", "--glow": 0 });
  }, []);

  return (
    <div ref={ref} className={className} style={style} onMouseMove={onMove} onMouseLeave={onLeave}>
      {children}
    </div>
  );
}

export default function App() {
  const stars = useStars(150, 7);
  const [copied, setCopied] = useState("");
  const rootRef = useRef(null);
  const raf = useRef(null);

  const handleMove = useCallback((e) => {
    if (raf.current) return;
    raf.current = requestAnimationFrame(() => {
      const root = rootRef.current;
      if (root) {
        const r = root.getBoundingClientRect();
        const mx = ((e.clientX - r.left) / r.width - 0.5) * 2; // -1..1
        const my = ((e.clientY - r.top) / r.height - 0.5) * 2;
        root.style.setProperty("--mx", mx.toFixed(3));
        root.style.setProperty("--my", my.toFixed(3));
        root.style.setProperty("--px", `${e.clientX - r.left}px`);
        root.style.setProperty("--py", `${e.clientY - r.top}px`);
      }
      raf.current = null;
    });
  }, []);

  useEffect(() => () => raf.current && cancelAnimationFrame(raf.current), []);

  const copy = (text, label) => {
    navigator.clipboard?.writeText(text).catch(() => {});
    setCopied(label);
    setTimeout(() => setCopied(""), 1600);
  };

  return (
    <div className="navy-root" ref={rootRef} onMouseMove={handleMove}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&family=Bodoni+Moda:ital,opsz,wght@0,6..96,500;0,6..96,700;1,6..96,600&display=swap');

        /*
          Brand face: if you own a licensed copy of "TAN Nimbus", drop the
          font files in /fonts and uncomment this @font-face block. Until
          then the stack falls back to Bodoni Moda, the closest free match
          in proportion and contrast.
        */
        @font-face {
          font-family: 'TAN Nimbus';
          src: local('TAN Nimbus');
          font-display: swap;
        }

        .navy-root {
          --navy-0: #04070f;
          --navy-1: #081128;
          --navy-2: #0c1a3a;
          --navy-3: #16295a;
          --white: #ffffff;
          --ink: #f4f6fc;
          --muted: #8792b3;
          --line: rgba(255,255,255,0.22);
          --line-soft: rgba(255,255,255,0.09);
          --mx: 0; --my: 0; --px: 50%; --py: 50%;
          font-family: 'Poppins', sans-serif;
          position: relative;
          min-height: 100vh;
          width: 100%;
          background:
            radial-gradient(ellipse 120% 90% at 15% 10%, var(--navy-2) 0%, transparent 55%),
            radial-gradient(ellipse 100% 80% at 90% 85%, var(--navy-2) 0%, transparent 50%),
            linear-gradient(180deg, var(--navy-0) 0%, var(--navy-1) 45%, var(--navy-0) 100%);
          color: var(--ink);
          overflow-x: hidden;
          box-sizing: border-box;
          cursor: default;
        }
        .navy-root *, .navy-root *::before, .navy-root *::after { box-sizing: inherit; }

        .spotlight {
          position: absolute; inset: 0; z-index: 1; pointer-events: none;
          background: radial-gradient(420px circle at var(--px) var(--py), rgba(255,255,255,0.055), transparent 65%);
          transition: opacity 0.3s ease;
        }

        .stars { position: absolute; inset: 0; overflow: hidden; pointer-events: none; z-index: 0; }
        .star {
          position: absolute; border-radius: 50%; background: #fff;
          animation: twinkle linear infinite;
          transform: translate3d(calc(var(--mx) * var(--depth) * -14px), calc(var(--my) * var(--depth) * -14px), 0);
          transition: transform 0.15s ease-out;
        }
        @keyframes twinkle {
          0%, 100% { opacity: var(--op); }
          50% { opacity: calc(var(--op) * 0.2); }
        }
        @media (prefers-reduced-motion: reduce) {
          .star { animation: none; transform: none !important; transition: none; }
          .planet { transition: none !important; }
        }

        .planet {
          position: absolute; border-radius: 50%; z-index: 0; pointer-events: none;
          transition: transform 0.2s ease-out;
        }
        .planet-1 {
          width: 240px; height: 240px; top: -70px; left: -90px;
          background: radial-gradient(circle at 35% 30%, #6b8fc7 0%, #1c3a68 42%, #0a1730 80%, #04070f 100%);
          box-shadow: 0 0 90px rgba(50,90,160,0.25);
          transform: translate3d(calc(var(--mx) * -22px), calc(var(--my) * -22px), 0);
        }
        .planet-2 {
          width: 340px; height: 340px; top: -140px; right: -140px;
          background: radial-gradient(circle at 65% 35%, #7fa4dc 0%, #24488a 35%, #0b1a34 75%, #04070f 100%);
          box-shadow: 0 0 120px rgba(50,90,160,0.2);
          transform: translate3d(calc(var(--mx) * 16px), calc(var(--my) * 16px), 0);
        }
        .planet-3 {
          width: 90px; height: 90px; bottom: 8%; right: 6%;
          background: radial-gradient(circle at 40% 30%, #7ca4dc 0%, #1e4278 55%, #08152a 100%);
          transform: translate3d(calc(var(--mx) * -30px), calc(var(--my) * -30px), 0);
        }
        .planet-4 {
          width: 46px; height: 46px; bottom: 30%; left: 4%;
          background: radial-gradient(circle at 40% 30%, #7ca4dc 0%, #1a3861 55%, #060f1e 100%);
          transform: translate3d(calc(var(--mx) * 26px), calc(var(--my) * 26px), 0);
        }

        .frame {
          position: relative; z-index: 2;
          max-width: 1040px; margin: 28px auto; padding: 3px;
        }
        .frame-inner {
          border: 1px solid var(--line);
          border-radius: 2px;
          padding: clamp(24px, 5vw, 56px) clamp(18px, 6vw, 64px) clamp(32px, 6vw, 56px);
          position: relative;
        }
        .corner { position: absolute; width: 14px; height: 14px; }
        .corner.tl { top: -1px; left: -1px; border-top: 1.5px solid var(--white); border-left: 1.5px solid var(--white); }
        .corner.tr { top: -1px; right: -1px; border-top: 1.5px solid var(--white); border-right: 1.5px solid var(--white); }
        .corner.bl { bottom: -1px; left: -1px; border-bottom: 1.5px solid var(--white); border-left: 1.5px solid var(--white); }
        .corner.br { bottom: -1px; right: -1px; border-bottom: 1.5px solid var(--white); border-right: 1.5px solid var(--white); }

        .eyebrow {
          display: flex; align-items: center; gap: 10px; justify-content: center;
          font-size: 11px; letter-spacing: 0.35em; text-transform: uppercase;
          color: var(--muted); margin-bottom: 22px; font-weight: 500;
        }
        .eyebrow::before, .eyebrow::after {
          content: ''; height: 1px; width: 30px; background: var(--line); opacity: 0.8;
        }

        .hero-title { text-align: center; position: relative; }
        .brand-word {
          font-family: 'TAN Nimbus', 'Bodoni Moda', serif;
          font-style: italic; font-weight: 600;
          font-size: clamp(64px, 13vw, 132px);
          line-height: 0.9;
          background: linear-gradient(180deg, #ffffff 0%, #dbe3f5 55%, #8fa1cf 100%);
          -webkit-background-clip: text; background-clip: text; color: transparent;
          margin: 0;
          text-shadow: 0 0 50px rgba(120,150,220,0.22);
          letter-spacing: 0.01em;
        }
        .flourish { display: block; margin: 4px auto 14px; opacity: 0.85; }
        .hero-sub {
          font-family: 'Poppins', sans-serif; font-weight: 500;
          font-size: clamp(13px, 2.2vw, 17px);
          letter-spacing: 0.14em; text-transform: uppercase;
          color: var(--muted);
        }
        .hero-sub b { color: var(--ink); font-weight: 600; }

        .note-box { margin: 30px auto 0; max-width: 620px; text-align: center; }
        .note-en {
          font-weight: 600; font-size: clamp(13.5px, 2.2vw, 16px);
          color: #fff; letter-spacing: 0.02em;
        }
        .note-ar {
          direction: rtl; font-size: clamp(13.5px, 2.2vw, 15px);
          color: var(--muted); margin-top: 6px; font-weight: 500;
        }

        .tools-grid { margin-top: 46px; display: grid; grid-template-columns: repeat(3, 1fr); gap: 22px; }
        @media (max-width: 760px) { .tools-grid { grid-template-columns: 1fr; gap: 18px; } }

        .tool-card {
          border: 1px solid var(--line-soft);
          background: linear-gradient(180deg, rgba(255,255,255,0.025), rgba(255,255,255,0.0));
          border-radius: 3px;
          padding: 20px 18px 18px;
          display: flex; flex-direction: column; gap: 12px;
          position: relative; overflow: hidden;
          transition: border-color 0.25s ease, background 0.25s ease;
          will-change: transform;
        }
        .tool-card::before {
          content: ''; position: absolute; inset: 0; pointer-events: none;
          background: radial-gradient(180px circle at var(--gx, 50%) var(--gy, 50%), rgba(255,255,255,0.10), transparent 70%);
          opacity: var(--glow, 0); transition: opacity 0.25s ease;
        }
        .tool-card:hover { border-color: rgba(255,255,255,0.4); }
        .tool-head { display: flex; align-items: center; gap: 12px; }
        .tool-icon {
          width: 44px; height: 44px; border-radius: 50%;
          border: 1px solid var(--line); display: flex; align-items: center; justify-content: center;
          color: var(--white); flex-shrink: 0;
        }
        .tool-name { font-family: 'Bodoni Moda', serif; font-weight: 600; font-size: 21px; color: #fff; }
        .tool-name-ar { direction: rtl; font-size: 12.5px; color: var(--muted); font-weight: 500; margin-top: 1px; }
        .tool-desc { font-size: 12.5px; color: var(--muted); line-height: 1.55; min-height: 38px; font-weight: 400; }

        .media-slot {
          margin-top: 2px; height: 108px; border-radius: 3px;
          border: 1px dashed var(--line-soft);
          display: flex; align-items: center; justify-content: center;
          font-size: 10.5px; letter-spacing: 0.1em; text-transform: uppercase;
          color: rgba(135,146,179,0.65);
          background: rgba(255,255,255,0.015);
        }

        .tool-btn {
          margin-top: 4px; position: relative; z-index: 1;
          display: flex; align-items: center; justify-content: center; gap: 8px;
          padding: 11px 16px; text-decoration: none;
          border: 1px solid var(--white);
          color: var(--white);
          font-size: 12.5px; font-weight: 600; letter-spacing: 0.06em; text-transform: uppercase;
          border-radius: 2px; transition: all 0.25s ease;
        }
        .tool-btn:hover { background: var(--white); color: var(--navy-0); box-shadow: 0 0 24px rgba(255,255,255,0.25); }
        .tool-btn svg { transition: transform 0.25s ease; }
        .tool-btn:hover svg { transform: translateX(3px); }

        .skyline { margin-top: 52px; opacity: 0.45; }

        .footer {
          margin-top: 30px; padding-top: 22px;
          border-top: 1px solid var(--line-soft);
          display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between;
          gap: 14px;
        }
        .brand {
          font-family: 'TAN Nimbus', 'Bodoni Moda', serif; font-style: italic; font-weight: 600;
          font-size: 20px; color: #fff; letter-spacing: 0.02em;
        }
        .contact-block { text-align: right; }
        .contact-ar { direction: rtl; font-size: 12px; color: var(--muted); margin-bottom: 5px; font-weight: 500; }
        .contact-chips { display: flex; gap: 8px; flex-wrap: wrap; justify-content: flex-end; }
        .chip {
          font-size: 11.5px; padding: 6px 12px; border-radius: 999px;
          border: 1px solid var(--line-soft); color: var(--ink);
          background: rgba(255,255,255,0.03); cursor: pointer;
          font-family: 'Poppins', sans-serif; font-weight: 500; letter-spacing: 0.01em;
          transition: border-color 0.2s ease, color 0.2s ease, background 0.2s ease;
        }
        .chip:hover { border-color: var(--white); background: rgba(255,255,255,0.06); }
        .toast {
          position: fixed; bottom: 22px; left: 50%; transform: translateX(-50%);
          background: #0a1128; border: 1px solid var(--line); color: var(--white);
          padding: 9px 18px; border-radius: 999px; font-size: 12px; z-index: 50;
          box-shadow: 0 8px 30px rgba(0,0,0,0.5); font-family: 'Poppins', sans-serif; font-weight: 500;
        }

        @media (max-width: 500px) {
          .footer { flex-direction: column; align-items: flex-start; }
          .contact-block { text-align: left; width: 100%; }
          .contact-ar { text-align: right; }
          .contact-chips { justify-content: flex-start; }
        }
      `}</style>

      <div className="spotlight" />

      <div className="stars">
        {stars.map((s, i) => (
          <div
            key={i}
            className="star"
            style={{
              top: `${s.top}%`,
              left: `${s.left}%`,
              width: `${s.size}px`,
              height: `${s.size}px`,
              
              "--op": s.op,
              "--depth": s.depth,
              animationDuration: `${s.twinkle}s`,
            }}
          />
        ))}
      </div>

      <div className="planet planet-1" />
      <div className="planet planet-2" />
      <div className="planet planet-3" />
      <div className="planet planet-4" />

      <div className="frame">
        <div className="frame-inner">
          <span className="corner tl" />
          <span className="corner tr" />
          <span className="corner bl" />
          <span className="corner br" />

          <div className="eyebrow">Student Toolkit</div>

          <div className="hero-title">
            <h1 className="brand-word">NaVy</h1>
            <svg className="flourish" width="140" height="26" viewBox="0 0 140 26" fill="none">
              <path
                d="M2 6c20 20 40 20 50 4s10-16 20-4 20 20 40 4 24-6 26 8"
                stroke="#ffffff"
                strokeWidth="1"
                strokeLinecap="round"
                opacity="0.55"
              />
            </svg>
            <div className="hero-sub">
              <b>Online Tools</b> for Weak PC
            </div>
          </div>

          <div className="note-box">
            <div className="note-en">MAKE SURE UR EMAIL PRO IS WORKING</div>
            <div className="note-ar">استخدم ايميلك الاحترافي لتستفيد من خدمات أفضل</div>
          </div>

          <div className="tools-grid">
            {TOOLS.map((t) => (
              <TiltCard className="tool-card" key={t.id}>
                <div className="tool-head">
                  <div className="tool-icon">{t.glyph}</div>
                  <div>
                    <div className="tool-name">{t.name}</div>
                    <div className="tool-name-ar">{t.tag}</div>
                  </div>
                </div>
                <div className="tool-desc">{t.desc}</div>

                <div className="media-slot">media preview</div>

                <a className="tool-btn" href={t.href} target="_blank" rel="noreferrer">
                  Open tool
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M3 11 11 3M11 3H5M11 3v6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </TiltCard>
            ))}
          </div>

          <svg className="skyline" viewBox="0 0 1000 120" width="100%" height="100" preserveAspectRatio="none">
            <g stroke="#ffffff" strokeWidth="1" fill="none" opacity="0.5">
              <path d="M0 120 V70 H40 V50 H80 V120" />
              <path d="M110 120 V40 H130 V25 H150 V40 H170 V120" />
              <path d="M200 120 V85 H260 V60 H300 V120" />
              <path d="M340 120 V95 H370 V60 H410 V30 H430 V60 H450 V95 H480 V120" />
              <path d="M520 120 V50 H560 V20 L580 5 L600 20 V50 H640 V120" />
              <path d="M680 120 V80 H720 V100 H760 V60 H800 V120" />
              <path d="M840 120 V90 H880 V70 H920 V95 H960 V70 H1000 V120" />
              <path d="M40 50h40M130 25h20M410 30h20M560 20h20" opacity="0.3" />
            </g>
          </svg>

          <div className="footer">
            <div className="brand">by NaVy</div>
            <div className="contact-block">
              <div className="contact-ar">تواصل لأي تساؤل</div>
              <div className="contact-chips">
                <button className="chip" onClick={() => copy("epau.helper", "epau.helper")}>
                  epau.helper
                  
                </button>
                <button className="chip" onClick={() => copy("It.z.navy", "It.z.navy")}>
                  It.z.navy
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {copied && <div className="toast">Copied “{copied}”</div>}
    </div>
  );
}
