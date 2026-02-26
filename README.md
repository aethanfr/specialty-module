# Specialty Module - Frontend Technical Assessment

This repository contains the implementation of the module corresponding to the *"What is the Specialty of us"* section of the Frontend technical test.

The project was developed using **React (Next.js)** and **Pure CSS**, strictly complying with all requirements specified in the original Adobe XD design.

## Features and Requirements Compliance

- **Zero CSS Frameworks:** All styles were written using **CSS Modules (`.module.css`)**, ensuring modularity and avoiding class collisions or dependency on external libraries (no Tailwind or Bootstrap).
- **100% Responsive (Media Queries):** Contains fluid and responsive adaptation for mobile devices, tablets, and desktop. No component breaks regardless of screen size.
- **Pixel-Perfect Fidelity:** All spacing, color variables (white background `#FFFFFF`), circular animations, SVGs, and filters (isolated `blur()` on images) have been configured to match the Adobe XD design file *pixel-per-pixel*.
- **Mathematical Linear Carousel:** Fluid animations, functional controls, and custom mathematical indexing using `offset`, all running cleanly with React Hooks without third-party libraries (no slick-carousel or swiper).
- **Dynamic Fetching (API):** All cards are rendered dynamically by obtaining data in real-time from [NewsAPI](https://newsapi.org).
- **Global State Handling:** Natively configured with Next.js App Router (`error.tsx`, `loading.tsx`) for robust error management.

---

## Installation and Local Setup Instructions

Follow these steps to run the project on your local machine:

### 1. Clone the repository
```bash
git clone https://github.com/aethanfr/specialty-module.git
cd specialty-module
```

### 2. Install dependencies
Make sure you have Node.js installed. Then run the following command in your terminal:
```bash
npm install
```

### 3. Configure Environment Variables (Important)
The module consumes a news API. For it to work without throwing an error, **you must provide a valid API Key**.

Create a file named `.env.local` in the root directory (next to `package.json`) and add the following:

```env
NEWS_API_KEY=your_newsapi_key_here
```
*(You can get a fast and free API key by registering at [https://newsapi.org/register](https://newsapi.org/register))*

### 4. Run the Development Server
```bash
npm run dev
```
Then, open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

---

*(Developed as part of the Frontend technical assessment).*
