# 📱 Phone Catalog App

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
git clone https://github.com/tu-usuario/phone-catalog.git
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

Puedes ejecutar manualmente los scripts con:

```bash
npm run lint     # Ejecuta ESLint sobre el proyecto
npm run format   # Ejecuta Prettier para formatear el código
```
