# Dall Cândido Construtora - Website

Sitio web oficial para la constructora Dall Cândido Construtora, desarrollado con tecnologías web modernas y de alto rendimiento.

## 🛠️ Stack Tecnológico

El proyecto está construido utilizando las siguientes herramientas:

- **Framework**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Empaquetador y Servidor Dev**: [Vite 7](https://vite.dev/)
- **Enrutamiento**: [TanStack Router](https://tanstack.com/router) (enrutamiento seguro en el cliente y basado en archivos)
- **Estilos**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Componentes de UI**: [shadcn/ui](https://ui.shadcn.com/) (Radix Primitives + Tailwind)
- **Gestión de Estado y Consultas**: [TanStack Query v5](https://tanstack.com/query)
- **Iconos**: [Lucide React](https://lucide.dev/)

---

## 💻 Desarrollo Local

Sigue los siguientes pasos para clonar, instalar dependencias y levantar el proyecto de forma local.

### Prerrequisitos

Debes tener instalado en tu sistema:
- **Node.js** (versión v18 o superior recomendada) o **Bun**.

### 1. Instalar Dependencias

Puedes usar **npm** o **bun** para instalar las dependencias del proyecto:

```bash
# Con npm
npm install

# Con Bun
bun install
```

### 2. Ejecutar el Servidor de Desarrollo

Inicia el entorno de desarrollo local. El proyecto está configurado para ejecutarse en el puerto `5000`.

```bash
# Con npm
npm run dev

# Con Bun
bun run dev
```

Una vez iniciado, abre tu navegador en: [http://localhost:5000/](http://localhost:5000/)

### 3. Compilar para Producción

Para compilar el sitio optimizado para producción en la carpeta `dist`:

```bash
# Con npm
npm run build

# Con Bun
bun run build
```

### 4. Probar la Compilación de Producción Localmente

Para previsualizar localmente la compilación de producción generada:

```bash
# Con npm
npm run preview

# Con Bun
bun run preview
```

---

## 🚀 Despliegue en Cloudflare Pages

Este proyecto incluye compatibilidad nativa con Cloudflare Pages mediante un archivo de configuración `wrangler.toml` y reglas de enrutamiento SPA.

### Configuración del Proyecto en Cloudflare Dashboard:

1. Ve a tu panel de **Cloudflare** -> **Workers & Pages** -> **Create application** -> **Pages** -> **Connect to Git**.
2. Selecciona tu repositorio de GitHub.
3. En los **Build settings** configura:
   - **Framework preset**: `Vite` (o `None` si configuras manualmente)
   - **Build command**: `npm run build` o `bun run build`
   - **Build output directory**: `dist`
4. En **Environment variables** (opcional):
   - Configura la versión de Node.js si es necesario (`NODE_VERSION`).
5. Haz clic en **Save and Deploy**.

> [!NOTE]
> **Enrutamiento SPA en Cloudflare:**  
> Las aplicaciones SPA con rutas dinámicas del cliente necesitan que todas las peticiones sean redirigidas al `index.html`. Esto ya está configurado automáticamente a través del archivo [public/_redirects](file:///home/soporte24hwww/Documentos/GitHub/dallcandidoconstrutora-page/public/_redirects), el cual contiene la regla:
> ```text
> /*    /index.html    200
> ```

---

## 🚀 Despliegue en Vercel

Este proyecto cuenta con soporte para ser desplegado en **Vercel** de manera simple y directa.

### Configuración del Proyecto en Vercel Dashboard:

1. Ve a tu panel de [Vercel](https://vercel.com/) y haz clic en **Add New** -> **Project**.
2. Importa tu repositorio de GitHub.
3. Vercel detectará automáticamente que es un proyecto **Vite**. De no ser así, configúralo con los siguientes parámetros:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build` o `bun run build`
   - **Output Directory**: `dist`
4. Haz clic en **Deploy**.

> [!NOTE]
> **Enrutamiento SPA en Vercel:**  
> Para evitar errores `404 Not Found` al recargar páginas o acceder directamente a subrutas en Vercel, hemos configurado un archivo [vercel.json](file:///home/soporte24hwww/Documentos/GitHub/dallcandidoconstrutora-page/vercel.json) en la raíz del proyecto que redirige de forma segura todas las rutas entrantes al punto de entrada index:
> ```json
> {
>   "rewrites": [
>     { "source": "/(.*)", "destination": "/index.html" }
>   ]
> }
> ```
