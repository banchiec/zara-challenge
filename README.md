# Zara Challenge

Aplicación web para la visualización, búsqueda y gestión de un catálogo de teléfonos móviles. Desarrollada como parte de una prueba técnica.

## 🚀 Tecnologías utilizadas

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [React Context API](https://react.dev/learn/scaling-up-with-reducer-and-context)
- [SASS](https://sass-lang.com/)
- [Vitest](https://vitest.dev/) para testing
- [ESLint](https://eslint.org/) + [Prettier](https://prettier.io/)
- [GitHub Actions](https://docs.github.com/en/actions)

## 📦 Instalación

```bash
git clone https://github.com/banchiec/zara-challenge.git
cd phone-catalog
npm install
```

## 🛠 Configuración del Proyecto

Este proyecto cuenta con una configuración inicial sólida pensada para mantener la calidad del código y facilitar la colaboración en equipo.

### ✅ ESLint

Se ha configurado ESLint con soporte para:

- **TypeScript** mediante `@typescript-eslint`.
- **React** con las reglas recomendadas de `eslint-plugin-react` y `eslint-plugin-react-hooks`.
- **Fast Refresh** para advertencias sobre exportaciones con `eslint-plugin-react-refresh`.
- Ignora la carpeta `dist`.

El archivo de configuración se encuentra en `eslint.config.ts`.

### ✅ Prettier

Prettier se encarga del formateo automático del código. Está integrado con ESLint para detectar conflictos de estilo automáticamente.

- Configuración personalizada en `.prettierrc`.
- Script `npm run format` para aplicar Prettier al código.

### ✅ Husky + lint-staged

Se ha configurado Husky para ejecutar comprobaciones antes de cada commit:

- Ejecuta `npm run lint` y `npm run format` solo sobre los archivos staged usando `lint-staged`.
- Evita commits que introduzcan errores o formato incorrecto.

> Esto ayuda a mantener una base de código limpia sin esfuerzo adicional.

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
| `dev`          | Inicia el servidor de desarrollo con Vite            |
| `build`        | Compila TypeScript y genera el build optimizado      |
| `preview`      | Previsualiza el build localmente                     |
| `lint`         | Ejecuta ESLint en todos los archivos `.ts` y `.tsx`  |
| `lint:fix`     | Corrige automáticamente los errores de lint          |
| `format`       | Formatea todo el proyecto con Prettier               |
| `format:check` | Verifica el formateo sin modificar archivos          |
| `test`         | Corre todos los tests con Vitest                     |
| `test:ui`      | Abre la interfaz gráfica de Vitest                   |

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

# 2. Iniciar servidor de desarrollo
npm run dev

# 3. Ejecutar tests
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

---

