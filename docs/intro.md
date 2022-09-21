---
sidebar_position: 1
---

# Primeros Pasos



### Requisitos

- [Node.js](https://nodejs.org/en/download/) version 16.14 o Mayor

## Crear un sitio

Estilo clasico

```bash
npm init docusaurus@latest MiProyecto classic
```

## Lanza el proyecto en local

```bash
cd MiProyecto
npm run start
```

## Compila el proyecto

```bash
npm run build
```

## Para hostear el proyecto en GitHub Pages

- Desde el bash de GIT

```bash
GIT_USER=sebarach yarn deploy
```

## En el archivo de configuracion

- Desde el bash de GIT

```js
  url: 'https://sebarach.github.io',
  baseUrl: '/Docusaurus-React/',
  trailingSlash: false,
```

