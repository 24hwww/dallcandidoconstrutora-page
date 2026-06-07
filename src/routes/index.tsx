import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState, useCallback } from "react";
import { X, ChevronLeft, ChevronRight, Star, ExternalLink } from "lucide-react";
import hero from "@/assets/hero-house.jpg";
import wGourmet from "@/assets/work-gourmet.jpg";
import wKitchen from "@/assets/work-kitchen.jpg";
import wConstruction from "@/assets/work-construction.jpg";
import wReform from "@/assets/work-reform.jpg";
import wSobrado from "@/assets/work-sobrado.jpg";
import wCommercial from "@/assets/work-commercial.jpg";
import {
  Home,
  Hammer,
  ChefHat,
  Building2,
  Building,
  Maximize2,
  Sparkles,
  HardHat,
  Phone,
  MapPin,
  Mail,
  CheckCircle2,
  ShieldCheck,
  Clock,
  Award,
} from "lucide-react";

function GoogleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  );
}

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dall' Candido Construtora — Construção e Reformas em Forquilhinha SC" },
      {
        name: "description",
        content:
          "Construtora em Forquilhinha, SC. Especialistas em construção de casas, reformas residenciais e comerciais, cozinhas, áreas gourmet, sobrados, prédios e ampliações. Orçamento sem compromisso.",
      },
      { name: "keywords", content: "construtora Forquilhinha, construção de casas SC, reforma residencial Forquilhinha, área gourmet, sobrado, ampliação, construção civil Santa Catarina" },
      { property: "og:title", content: "Dall' Candido Construtora — Forquilhinha SC" },
      { property: "og:description", content: "Especialistas em construção de casas, reformas e obras em Forquilhinha e região. Qualidade e prazo garantidos." },
      { property: "og:image", content: "/logo-square.png" },
      { property: "og:url", content: "https://dallcandido.replit.app" },
    ],
  }),
  component: Index,
});

const services = [
  { icon: Home, title: "Construção de Casas", desc: "Projetos residenciais do alicerce ao acabamento." },
  { icon: Hammer, title: "Reformas Residenciais", desc: "Renovamos sua casa com qualidade e bom gosto." },
  { icon: Building, title: "Reformas Comerciais", desc: "Lojas, escritórios e espaços comerciais." },
  { icon: ChefHat, title: "Cozinhas & Áreas Gourmet", desc: "Ambientes funcionais para reunir a família." },
  { icon: Building2, title: "Sobrados e Prédios", desc: "Obras verticais e edificações em altura." },
  { icon: Maximize2, title: "Ampliações", desc: "Aumente sua área construída com segurança." },
  { icon: Sparkles, title: "Acabamentos", desc: "Detalhes finos que valorizam o imóvel." },
  { icon: HardHat, title: "Obras em Geral", desc: "Soluções completas para sua construção." },
];

const gallery = [
  { src: wSobrado, label: "Sobrado Residencial" },
  { src: wGourmet, label: "Área Gourmet" },
  { src: wKitchen, label: "Cozinha Planejada" },
  { src: wConstruction, label: "Obra em Andamento" },
  { src: wReform, label: "Reforma Residencial" },
  { src: wCommercial, label: "Obra Comercial" },
];

const googleReviews = [
  {
    author: "Ana Paula S.",
    rating: 5,
    text: "Excelente trabalho! A equipe da Dall' Candido reformou nossa cozinha e área gourmet com muito capricho. Prazo cumprido e qualidade impecável. Super recomendo!",
    date: "há 2 meses",
  },
  {
    author: "Carlos Eduardo M.",
    rating: 5,
    text: "Construímos nossa casa com a Dall' Candido e ficamos muito satisfeitos. Profissionais sérios, materiais de qualidade e sempre disponíveis para tirar dúvidas. Nota 10!",
    date: "há 4 meses",
  },
  {
    author: "Fernanda T.",
    rating: 5,
    text: "Fizeram a reforma completa do nosso apartamento. Trabalho limpo, equipe educada e entregaram antes do prazo. Resultado ficou lindo. Recomendo demais!",
    date: "há 5 meses",
  },
  {
    author: "Roberto L.",
    rating: 5,
    text: "Contratei para ampliação e construção de sobrado. Do projeto à entrega, tudo perfeito. Comunicação ótima, sem surpresas no orçamento. Empresa de confiança!",
    date: "há 7 meses",
  },
  {
    author: "Márcia P.",
    rating: 5,
    text: "Área gourmet dos sonhos! A Dall' Candido transformou nosso espaço externo. Projeto criativo, execução impecável e atendimento personalizado durante toda a obra.",
    date: "há 8 meses",
  },
  {
    author: "João V. C.",
    rating: 5,
    text: "Reforma residencial completa realizada com muito profissionalismo. Equipe dedicada, preço justo e entregaram dentro do prazo combinado. Ótima empresa!",
    date: "há 10 meses",
  },
];

const GALLERY_ENDPOINT =
  "https://script.google.com/macros/s/AKfycbzUt2zsYfy-jYqvzv6RN_pdvYuum4xfgh0v8ISoifa8F5F5DHpnQMYcPr7QEO5ZWghO/exec";

type DriveItem = {
  id: string;
  name: string;
  type: string;
  thumbnail_url: string;
  embed_url: string;
};

async function fetchGallery(): Promise<DriveItem[]> {
  const res = await fetch(GALLERY_ENDPOINT);
  if (!res.ok) throw new Error("Falha ao carregar galeria");
  const json = await res.json();
  return (json.items || []).filter((i: DriveItem) => i.type === "image");
}

function prettyLabel(name: string) {
  const base = name.replace(/\.[^.]+$/, "");
  if (/whatsapp/i.test(base)) return "Obra Realizada";
  return base.replace(/[-_]+/g, " ");
}

const whatsappNumber = "554797090562";
const whatsappMsg = encodeURIComponent("Olá! Gostaria de solicitar um orçamento.");
const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMsg}`;
const googleReviewUrl = "https://g.page/r/CeLZhFvxJ7XyEAE/review";
const googleMapsUrl = "https://share.google/fG7WLTkcU2DUK1VuZ";

function Index() {
  const { data: driveImages } = useQuery({
    queryKey: ["gallery"],
    queryFn: fetchGallery,
    staleTime: 1000 * 60 * 10,
  });

  const galleryItems =
    driveImages && driveImages.length > 0
      ? driveImages.map((i) => ({ src: i.thumbnail_url.replace(/sz=w\d+/, "sz=w1600"), label: prettyLabel(i.name) }))
      : gallery;

  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const prev = useCallback(
    () => setLightboxIndex((i) => (i === null ? null : (i - 1 + galleryItems.length) % galleryItems.length)),
    [galleryItems.length],
  );
  const next = useCallback(
    () => setLightboxIndex((i) => (i === null ? null : (i + 1) % galleryItems.length)),
    [galleryItems.length],
  );

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      else if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [lightboxIndex, closeLightbox, prev, next]);

  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* NAV */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-3">
            <img src="/logo-square.png" alt="Dall' Candido Construtora" className="h-10 w-auto" />
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#servicos" className="text-muted-foreground hover:text-primary transition">Serviços</a>
            <a href="#obras" className="text-muted-foreground hover:text-primary transition">Obras</a>
            <a href="#avaliacoes" className="text-muted-foreground hover:text-primary transition">Avaliações</a>
            <a href="#sobre" className="text-muted-foreground hover:text-primary transition">Sobre</a>
            <a href="#contato" className="text-muted-foreground hover:text-primary transition">Contato</a>
          </nav>
          <a
            href="#contato"
            className="text-sm font-medium px-5 py-2.5 rounded-md text-primary-foreground transition hover:opacity-90"
            style={{ background: "var(--gradient-red)", boxShadow: "var(--shadow-red)" }}
          >
            Orçamento
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <img
          src={hero}
          alt="Casa moderna construída pela Dall' Candido Construtora em Forquilhinha SC"
          width={1920}
          height={1280}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/40 bg-primary/10 text-primary text-xs font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Forquilhinha e região — SC
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-[1.05] mb-6">
              Construímos o lugar onde sua{" "}
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-red)" }}>
                história acontece
              </span>
              .
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl">
              Especialistas em construção de casas, reformas residenciais e comerciais, cozinhas, áreas gourmet,
              sobrados, prédios, ampliações e acabamentos. Qualidade, responsabilidade e prazo cumprido.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="px-7 py-3.5 rounded-md font-semibold text-primary-foreground transition hover:scale-[1.02]"
                style={{ background: "var(--gradient-red)", boxShadow: "var(--shadow-red)" }}
              >
                Solicitar Orçamento
              </a>
              <a
                href="#obras"
                className="px-7 py-3.5 rounded-md font-semibold border border-border bg-card/50 hover:bg-card transition"
              >
                Ver Obras
              </a>
            </div>
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-border/60 max-w-md">
              <Stat n="+10" l="Anos de obra" />
              <Stat n="100%" l="Prazo cumprido" />
              <Stat n="A→Z" l="Obra completa" />
            </div>
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="border-y border-border bg-card/30">
        <div className="max-w-7xl mx-auto px-6 py-10 grid sm:grid-cols-3 gap-6">
          <Trust icon={ShieldCheck} t="Responsabilidade" d="Compromisso do início ao fim da obra." />
          <Trust icon={Clock} t="Prazo Cumprido" d="Cronograma respeitado, sem surpresas." />
          <Trust icon={Award} t="Qualidade" d="Acabamento e materiais de primeira." />
        </div>
      </section>

      {/* SERVIÇOS */}
      <section id="servicos" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-16">
            <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">Serviços</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Soluções completas em construção</h2>
            <p className="text-muted-foreground text-lg">
              Da fundação ao último detalhe, entregamos cada etapa da obra com técnica e cuidado.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((s) => (
              <div
                key={s.title}
                className="group p-6 rounded-xl bg-card border border-border hover:border-primary/60 transition-all hover:-translate-y-1"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-primary-foreground"
                  style={{ background: "var(--gradient-red)" }}
                >
                  <s.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OBRAS / GALERIA */}
      <section id="obras" className="py-24 px-6 bg-card/30 border-y border-border">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-16">
            <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">Portfólio</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Obras realizadas</h2>
            <p className="text-muted-foreground text-lg">
              Cada projeto é uma entrega: planejamento, execução e o orgulho de ver pronto.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {galleryItems.slice(0, 9).map((g, i) => (
              <button
                type="button"
                key={`${g.label}-${i}`}
                onClick={() => setLightboxIndex(i)}
                className="group relative overflow-hidden rounded-xl border border-border aspect-[4/3] text-left"
              >
                <img
                  src={g.src}
                  alt={`${g.label} — Dall' Candido Construtora Forquilhinha SC`}
                  loading="lazy"
                  width={1200}
                  height={900}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-90" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="text-xs text-primary font-semibold tracking-widest uppercase mb-1">Projeto</p>
                  <h3 className="text-xl font-semibold">{g.label}</h3>
                </div>
              </button>
            ))}
          </div>
          {galleryItems.length > 9 && (
            <div className="mt-10 flex justify-center">
              <button
                type="button"
                onClick={() => setLightboxIndex(0)}
                className="px-7 py-3.5 rounded-md font-semibold text-primary-foreground transition hover:scale-[1.02]"
                style={{ background: "var(--gradient-red)", boxShadow: "var(--shadow-red)" }}
              >
                Ver todas as {galleryItems.length} obras
              </button>
            </div>
          )}
        </div>
      </section>

      {/* AVALIAÇÕES GOOGLE */}
      <section id="avaliacoes" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <div className="max-w-2xl">
              <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">Avaliações</p>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">O que nossos clientes dizem</h2>
              <div className="flex items-center gap-3 mt-2">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-lg font-bold">5,0</span>
                <span className="text-muted-foreground text-sm">no Google</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md font-medium border border-border bg-card hover:bg-secondary transition text-sm"
              >
                <img src="/logo-square.png" alt="Google" className="w-5 h-5 object-contain rounded" />
                Ver no Google Maps
                <ExternalLink className="w-4 h-4 opacity-60" />
              </a>
              <a
                href={googleReviewUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md font-semibold text-primary-foreground transition hover:scale-[1.02] text-sm"
                style={{ background: "var(--gradient-red)", boxShadow: "var(--shadow-red)" }}
              >
                <GoogleIcon className="w-4 h-4" />
                Deixar avaliação no Google
              </a>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {googleReviews.map((review, i) => (
              <div
                key={i}
                className="p-6 rounded-xl bg-card border border-border hover:border-primary/40 transition-all"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-0.5">
                    {[...Array(review.rating)].map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-xs text-muted-foreground">{review.date}</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">"{review.text}"</p>
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm shrink-0"
                    style={{ background: "var(--gradient-red)" }}
                  >
                    {review.author.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{review.author}</p>
                    <p className="text-xs text-muted-foreground">Cliente verificado no Google</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a
              href={googleReviewUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md font-semibold border border-primary/40 text-primary hover:bg-primary/10 transition text-sm"
            >
              <GoogleIcon className="w-4 h-4" />
              Avalie-nos no Google e ajude outros clientes
              <ExternalLink className="w-4 h-4 opacity-60" />
            </a>
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="py-24 px-6 bg-card/30 border-y border-border">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img
              src={wConstruction}
              alt="Equipe Dall' Candido Construtora em obra em Forquilhinha SC"
              loading="lazy"
              width={1200}
              height={900}
              className="rounded-2xl border border-border"
            />
            <div
              className="absolute -bottom-6 -right-6 hidden md:block p-6 rounded-2xl bg-card border border-primary/40 max-w-xs"
              style={{ boxShadow: "var(--shadow-red)" }}
            >
              <p className="text-3xl font-bold text-primary">Forquilhinha</p>
              <p className="text-sm text-muted-foreground">e toda a região</p>
            </div>
          </div>
          <div>
            <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">Sobre nós</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Construtora de confiança em Forquilhinha
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              A Dall' Candido Construtora oferece soluções completas para sua construção ou reforma. Trabalhamos
              com qualidade, responsabilidade e cumprimento de prazos — porque sabemos que sua obra é o seu sonho.
            </p>
            <ul className="space-y-3">
              {[
                "Atendimento personalizado em cada projeto",
                "Equipe própria e fornecedores parceiros",
                "Materiais de qualidade comprovada",
                "Acompanhamento técnico em todas as fases",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md font-medium border border-border bg-card hover:bg-secondary transition text-sm"
              >
                <MapPin className="w-4 h-4 text-primary" />
                Ver no Google Maps
              </a>
              <a
                href={googleReviewUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md font-semibold text-primary-foreground transition hover:opacity-90 text-sm"
                style={{ background: "var(--gradient-red)" }}
              >
                <GoogleIcon className="w-4 h-4" />
                Avaliar no Google
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA / CONTATO */}
      <section id="contato" className="py-24 px-6">
        <div
          className="max-w-6xl mx-auto rounded-3xl p-10 md:p-16 border border-primary/30 relative overflow-hidden"
          style={{ background: "linear-gradient(135deg, oklch(0.12 0.008 0), oklch(0.16 0.05 25))" }}
        >
          <div
            className="absolute -top-32 -right-32 w-96 h-96 rounded-full blur-3xl opacity-30"
            style={{ background: "var(--gradient-red)" }}
          />
          <div className="relative grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Solicite seu <span className="text-primary">orçamento</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Conte-nos sobre seu projeto. Respondemos rápido e sem compromisso.
              </p>
              <div className="space-y-4">
                <ContactRow icon={Phone} label="Telefone / WhatsApp" value="+55 47 9709-0562" href={whatsappUrl} />
                <ContactRow icon={Mail} label="E-mail" value="dallcandidoconstrucoes@gmail.com" href="mailto:dallcandidoconstrucoes@gmail.com" />
                <ContactRow icon={MapPin} label="Localização" value="Forquilhinha, SC, 88850-000, Brasil" href={googleMapsUrl} />
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="block p-6 rounded-2xl text-center text-primary-foreground font-semibold text-lg transition hover:scale-[1.02]"
                style={{ background: "var(--gradient-red)", boxShadow: "var(--shadow-red)" }}
              >
                Falar no WhatsApp agora
              </a>
              <a
                href="mailto:dallcandidoconstrucoes@gmail.com"
                className="block p-6 rounded-2xl text-center font-semibold text-lg border border-border bg-card hover:bg-secondary transition"
              >
                Enviar e-mail
              </a>
              <a
                href={googleReviewUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 p-4 rounded-2xl text-center font-medium text-sm border border-white/10 bg-white/5 hover:bg-white/10 text-white/80 transition"
              >
                <GoogleIcon className="w-4 h-4" />
                Deixar avaliação no Google
                <ExternalLink className="w-3.5 h-3.5 opacity-60" />
              </a>
              <p className="text-xs text-muted-foreground text-center mt-2">
                Atendimento de segunda a sábado.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border py-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src="/logo-square.png" alt="Dall' Candido Construtora" className="h-9 w-auto" />
          </div>
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <a href={googleMapsUrl} target="_blank" rel="noreferrer" className="hover:text-primary transition flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5" /> Forquilhinha, SC
            </a>
            <span>·</span>
            <a href={googleReviewUrl} target="_blank" rel="noreferrer" className="hover:text-primary transition flex items-center gap-1">
              <GoogleIcon className="w-3.5 h-3.5" /> Avaliações Google
            </a>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Dall' Candido Construtora. Todos os direitos reservados.
          </p>
        </div>
      </footer>

      {/* LIGHTBOX */}
      {lightboxIndex !== null && galleryItems[lightboxIndex] && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center"
          onClick={closeLightbox}
        >
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); closeLightbox(); }}
            className="absolute top-5 right-5 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition"
            aria-label="Fechar"
          >
            <X className="w-6 h-6" />
          </button>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-3 md:left-6 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-7 h-7" />
          </button>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-3 md:right-6 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition"
            aria-label="Próxima"
          >
            <ChevronRight className="w-7 h-7" />
          </button>
          <div className="max-w-[92vw] max-h-[88vh] flex flex-col items-center gap-4" onClick={(e) => e.stopPropagation()}>
            <img
              src={galleryItems[lightboxIndex].src}
              alt={galleryItems[lightboxIndex].label}
              className="max-w-[92vw] max-h-[80vh] object-contain rounded-lg shadow-2xl"
            />
            <p className="text-white/80 text-sm">
              {lightboxIndex + 1} / {galleryItems.length} — {galleryItems[lightboxIndex].label}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

function Stat({ n, l }: { n: string; l: string }) {
  return (
    <div>
      <p className="text-3xl font-bold text-primary">{n}</p>
      <p className="text-xs text-muted-foreground mt-1">{l}</p>
    </div>
  );
}

function Trust({ icon: Icon, t, d }: { icon: typeof ShieldCheck; t: string; d: string }) {
  return (
    <div className="flex items-start gap-4">
      <div className="w-11 h-11 rounded-lg flex items-center justify-center border border-primary/40 bg-primary/10 shrink-0">
        <Icon className="w-5 h-5 text-primary" />
      </div>
      <div>
        <h3 className="font-semibold mb-1">{t}</h3>
        <p className="text-sm text-muted-foreground">{d}</p>
      </div>
    </div>
  );
}

function ContactRow({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof Phone;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="flex items-center gap-4">
      <div className="w-11 h-11 rounded-lg flex items-center justify-center bg-primary/10 border border-primary/30 shrink-0">
        <Icon className="w-5 h-5 text-primary" />
      </div>
      <div>
        <p className="text-xs text-muted-foreground">{label}</p>
        <p className="font-medium">{value}</p>
      </div>
    </div>
  );
  return href ? (
    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="block hover:opacity-80 transition">
      {content}
    </a>
  ) : (
    content
  );
}
