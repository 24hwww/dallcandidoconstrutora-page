import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

const structuredData = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://share.google/fG7WLTkcU2DUK1VuZ",
  "name": "Dall' Candido Construtora",
  "alternateName": "Dall Candido Construções",
  "description": "Construtora especializada em construção de casas, reformas residenciais e comerciais, cozinhas, áreas gourmet, sobrados, prédios, ampliações e acabamentos em Forquilhinha e região.",
  "telephone": "+554797090562",
  "email": "dallcandidoconstrucoes@gmail.com",
  "image": "/logo-square.png",
  "logo": "/logo-square.png",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Forquilhinha",
    "addressRegion": "SC",
    "postalCode": "88850-000",
    "addressCountry": "BR",
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -28.7456,
    "longitude": -49.4697,
  },
  "areaServed": [
    { "@type": "City", "name": "Forquilhinha" },
    { "@type": "City", "name": "Criciúma" },
    { "@type": "City", "name": "Içara" },
    { "@type": "City", "name": "Morro da Fumaça" },
  ],
  "openingHoursSpecification": [
    { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"], "opens": "08:00", "closes": "18:00" },
    { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Saturday"], "opens": "08:00", "closes": "12:00" },
  ],
  "sameAs": [
    "https://share.google/fG7WLTkcU2DUK1VuZ",
    "https://g.page/r/CeLZhFvxJ7XyEAE/review",
  ],
  "priceRange": "$$",
});

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Página não encontrada</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          A página que você está procurando não existe ou foi movida.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Voltar ao início
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          Esta página não carregou
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Algo deu errado. Tente atualizar a página ou volte ao início.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Tentar novamente
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Ir ao início
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Dall' Candido Construtora — Construção e Reformas em Forquilhinha SC" },
      {
        name: "description",
        content:
          "Construtora em Forquilhinha, SC. Especialistas em construção de casas, reformas residenciais e comerciais, cozinhas, áreas gourmet, sobrados, prédios e ampliações. Qualidade e prazo garantidos.",
      },
      { name: "keywords", content: "construtora Forquilhinha, construção de casas Forquilhinha, reforma residencial SC, construtora Santa Catarina, área gourmet, sobrado, obra Criciúma, construção civil Forquilhinha" },
      { name: "author", content: "Dall' Candido Construtora" },
      { name: "robots", content: "index, follow" },
      { name: "language", content: "pt-BR" },
      { name: "geo.region", content: "BR-SC" },
      { name: "geo.placename", content: "Forquilhinha, Santa Catarina, Brasil" },
      { name: "geo.position", content: "-28.7456;-49.4697" },
      { name: "ICBM", content: "-28.7456, -49.4697" },
      { property: "og:title", content: "Dall' Candido Construtora — Forquilhinha SC" },
      { property: "og:description", content: "Especialistas em construção de casas, reformas e obras em Forquilhinha e região. Qualidade, responsabilidade e prazo cumprido." },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "pt_BR" },
      { property: "og:site_name", content: "Dall' Candido Construtora" },
      { property: "og:image", content: "/logo-square.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Dall' Candido Construtora — Forquilhinha SC" },
      { name: "twitter:description", content: "Construção de casas, reformas e obras em Forquilhinha e região. Qualidade e prazo garantidos." },
      { name: "twitter:image", content: "/logo-square.png" },
      { name: "theme-color", content: "#cc0000" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/png", href: "/favicon.png" },
      { rel: "apple-touch-icon", href: "/favicon.png" },
      { rel: "canonical", href: "https://dallcandido.replit.app" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <HeadContent />
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-6R3CVMLLNV" />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-6R3CVMLLNV');`,
          }}
        />
        {/* Structured Data — LocalBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: structuredData }}
        />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
