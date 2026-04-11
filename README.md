# 🚀 Vite React FSD Starter

Modern **production-ready React starter** built with **Vite** and **Feature-Sliced Design (FSD)** architecture.

Designed for scalability, clean code, and best development experience.

---

## ✨ Features

* ⚡ **Vite** — fast development & build
* ⚛️ **React 19**
* 🧠 **Feature-Sliced Design (FSD)** architecture
* 🌐 **i18n (react-i18next)** — multi-language support
* 🎨 **TailwindCSS v4** — modern styling
* 🧩 **shadcn/ui + Radix UI** — accessible UI components
* 🔄 **TanStack Query** — server state management
* 📡 **Axios** — API layer with interceptors
* 🌓 **Theme Provider** — dark/light mode support
* 🌍 **Language Switcher**
* 📚 **Sidebar Layout + Header**
* 🧪 ESLint + TypeScript setup

---

## 📦 Installation

```bash
git clone https://github.com/Selimmyrat/vite-react-fsd-starter
cd vite-react-fsd-starter
npm install
npm run dev
```

---

## 📁 Project Structure (FSD)

```
src/
 ├── app/        # app providers, routing
 ├── pages/      # pages
 ├── widgets/    # layout (sidebar, header)
 ├── features/   # user actions (auth, create, etc.)
 ├── entities/   # business entities (user, product)
 └── shared/     # reusable logic (ui, api, config)
```

---

## 🧠 Architecture

This project follows **Feature-Sliced Design (FSD)** methodology:

* **shared** → reusable utilities, UI, configs
* **entities** → business models & data
* **features** → user interactions
* **widgets** → layout blocks (sidebar, header)
* **pages** → screens
* **app** → global setup

---

## 🌐 Internationalization (i18n)

* Built with **react-i18next**
* Language detection support
* Easy to scale

```ts
const { t } = useTranslation();
t("welcome");
```

---

## 🌓 Theme Switching

* Dark / Light mode support
* Controlled via Theme Provider
* Easily extendable

---

## 🔄 Data Fetching

Powered by **TanStack Query + Axios**

* Query caching
* Background updates
* API abstraction layer

---

## 🎨 UI System

* TailwindCSS v4
* shadcn/ui components
* Radix UI primitives
* Utility helpers (`clsx`, `tailwind-merge`, `cva`)

---

## 🧩 Layout

* 📚 Sidebar navigation
* 📌 Header with controls:

  * Language switch
  * Theme toggle

---

## ⚙️ Environment Variables

Create `.env` file:

```env
VITE_API_BASE_URL=https://api.example.com
```

---

## 🧪 Linting

```bash
npm run lint
```

---

## 🚀 Build

```bash
npm run build
npm run preview
```

---

## 📌 Best Practices Included

* ✅ FSD architecture
* ✅ Query key factory
* ✅ Axios instance with interceptors
* ✅ Clean separation of concerns
* ✅ Scalable folder structure

---

## 📄 License

MIT

---

## ⭐ Support

If you like this project, consider giving it a star ⭐
