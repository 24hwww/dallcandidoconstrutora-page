import { createFileRoute } from "@tanstack/react-router";
import logo from "@/assets/logo-dc.png.asset.json";
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

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dall' Candido Construtora — Construção e Reformas em Forquilhinha" },
      {
        name: "description",
        content:
          "Construtora em Forquilhinha e região. Casas, reformas, cozinhas, áreas gourmet, sobrados, prédios, ampliações e acabamentos com qualidade e prazo.",
      },
      { property: "og:title", content: "Dall' Candido Construtora" },
      { property: "og:description", content: "Construção e reformas em Forquilhinha e região." },
      { property: "og:image", content: hero },
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

const whatsappNumber = "5548999999999";
const whatsappMsg = encodeURIComponent("Olá! Gostaria de solicitar um orçamento.");
const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMsg}`;

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/70 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-3">
            <img src={logo.url} alt="Dall' Candido Construtora" className="h-10 w-auto" />
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#servicos" className="text-muted-foreground hover:text-primary transition">Serviços</a>
            <a href="#obras" className="text-muted-foreground hover:text-primary transition">Obras</a>
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
          alt="Casa moderna construída pela Dall' Candido"
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
            {gallery.map((g) => (
              <div key={g.label} className="group relative overflow-hidden rounded-xl border border-border aspect-[4/3]">
                <img
                  src={g.src}
                  alt={g.label}
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img
              src={wConstruction}
              alt="Equipe Dall' Candido em obra"
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
              ].map((i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span>{i}</span>
                </li>
              ))}
            </ul>
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
                <ContactRow icon={Phone} label="Telefone / WhatsApp" value="(48) 99999-9999" href={whatsappUrl} />
                <ContactRow icon={Mail} label="E-mail" value="contato@dallcandido.com.br" href="mailto:contato@dallcandido.com.br" />
                <ContactRow icon={MapPin} label="Localização" value="Forquilhinha — SC e região" />
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
                href="mailto:contato@dallcandido.com.br"
                className="block p-6 rounded-2xl text-center font-semibold text-lg border border-border bg-card hover:bg-secondary transition"
              >
                Enviar e-mail
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
            <img src={logo.url} alt="Dall' Candido" className="h-9 w-auto" />
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Dall' Candido Construtora. Todos os direitos reservados.
          </p>
        </div>
      </footer>
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
