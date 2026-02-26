# Specialty Module - Frontend Technical Assessment

Este repositorio contiene la implementación del módulo correspondiente a la sección *"What is the Specialty of us"* de la prueba técnica Frontend. 

El proyecto fue desarrollado utilizando **React (Next.js)** y **CSS Puro**, cumpliendo rigurosamente con todos los requerimientos especificados en el diseño original de Adobe XD.

## Características y Cumplimiento de Requerimientos

- **Cero Frameworks CSS:** Todos los estilos fueron escritos usando **CSS Modules (`.module.css`)**, asegurando la modularidad y evitando colisiones de clases o dependencia de librerías externas (sin Tailwind ni Bootstrap).
- **100% Responsive (Media Queries):** Contiene adaptación fluida y responsiva para dispositivos móviles, tablets y desktop. Ningún componente se rompe sin importar el tamaño de la pantalla.
- **Fidelidad Pixel-Perfect:** Todo el espaciado, variables de color (fondo blanco `#FFFFFF`), animaciones circulares, SVGs y filtros (`blur()` aisalados en las imágenes) han sido configurados para igualar *pixel-per-pixel* el archivo de diseño proporcionado en Adobe XD.
- **Carrusel Lineal Matemático:** Animaciones fluidas, controles funcionales e indexación matemática custom con `offset`, todo ejecutándose limpiamente con Hooks de React sin librerías de terceros (no slick-carousel o swiper).
- **Consumo Dinámico (API):** Todas las tarjetas son renderizadas dinámicamente obteniendo la data en tiempo real desde [NewsAPI](https://newsapi.org).
- **Estado Global:** Configurado de manera nativa con Next.js App Router (`error.tsx`, `loading.tsx`) para un robusto manejo de errores. 

---

## Instrucciones de Instalación y Ejecución Local

Sigue estos pasos para arrancar el proyecto en tu máquina local:

### 1. Clonar el repositorio
```bash
git clone https://github.com/aethanfr/specialty-module.git
cd specialty-module
```

### 2. Instalar las dependencias
Asegúrate de tener Node.js instalado. Luego corre en la terminal:
```bash
npm install
```

### 3. Configurar las Variables de Entorno (Importante)
El módulo consume la API de noticias. Para que funcione y no tire error, **debes proveer un API Key válido**.

Crea un archivo llamado `.env.local` en la raíz (junto al `package.json`) y agrega lo siguiente:

```env
NEWS_API_KEY=pon_aqui_tu_api_key_de_newsapi
```
*(Puedes conseguir un API key rápido y gratuito registrándote en [https://newsapi.org/register](https://newsapi.org/register))*

### 4. Ejecutar el Servidor de Desarrollo
```bash
npm run dev
```
Luego, abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver el resultado.

---

*(Realizado como parte de la prueba técnicaFrontend).*
