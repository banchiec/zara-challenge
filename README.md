# Zara Challenge

Proyecto frontend construido con **React 18**, **Vite**, **TypeScript**, y herramientas modernas para desarrollo, testing y calidad de código.

---

## 🛠️ Stack Técnico

- **React 18**
- **Vite** como bundler ultra rápido
- **TypeScript**
- **React Router DOM v7**
- **React Hook Form + Zod** para formularios con validación
- **Vitest** para testing (con interfaz gráfica incluida)
- **ESLint + Prettier** para linting y formateo
- **Husky + lint-staged** para pre-commits

---

## 📦 Scripts disponibles

| Script         | Descripción                                           |
|----------------|-------------------------------------------------------|
| dev            | Inicia el servidor de desarrollo con Vite            |
| build          | Compila TypeScript y genera el build optimizado      |
| preview        | Previsualiza el build localmente                     |
| lint           | Ejecuta ESLint en todos los archivos .ts y .tsx      |
| lint:fix       | Corrige automáticamente los errores de lint          |
| format         | Formatea todo el proyecto con Prettier               |
| format:check   | Verifica el formateo sin modificar archivos          |
| test           | Corre todos los tests con Vitest                     |
| test:ui        | Abre la interfaz gráfica de Vitest                   |

---

## ✅ Pre-commits automáticos

Este proyecto utiliza **Husky** y **lint-staged** para garantizar calidad en los commits:

```json
"lint-staged": {
  "*.{js,jsx,ts,tsx}": "npm run format"
}
```

> Cualquier archivo `.ts`, `.tsx`, `.js`, o `.jsx` será formateado automáticamente antes de cada commit.

---

## 📁 Estructura recomendada

```
src/
├── components/
├── pages/
├── routes/
├── hooks/
├── context/
├── services/
├── styles/
└── main.tsx
```

---

## 🧪 Testing

- Tests escritos con **Vitest**
- Soporte para pruebas con React Testing Library
- Puedes usar el modo interactivo con:

```bash
npm run test:ui
```

---

## 💻 Requisitos previos

- Node.js >= 18
- npm >= 9

---

## 🚀 Instalación y uso

```bash
# 1. Instalar dependencias
npm install

# 2. Crear archivo .env en la raíz del proyecto
touch .env
```

Agrega las siguientes variables dentro de `.env`:

```env
VITE_API_KEY=87909682e6cd74208f41a6ef39fe4191
API_BASE_URL=https://prueba-tecnica-api-tienda-moviles.onrender.com
```

```bash
# 3. Iniciar servidor de desarrollo
npm run dev

# 4. Ejecutar tests
npm test
```

---

## 📦 Build de producción

```bash
npm run build
npm run preview
```

---

## 🧹 Lint & Format

```bash
# Lint
npm run lint

# Lint con fix
npm run lint:fix

# Formato Prettier
npm run format
```

---

## 🧪 Testing interactivo

```bash
npm run test:ui
```

---

## 📄 Licencia

Este proyecto es privado.