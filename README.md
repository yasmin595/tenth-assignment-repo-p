# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.





# Freelancer Task Marketplace

A modern, responsive web application where clients can post freelance tasks and freelancers can place bids. Built using React, Tailwind CSS, and Firebase, with a smooth UI and interactive features to enhance user experience.

## 🔗 Live Preview
>https://tenth-assignment-repo.web.app
## 🚀 Features

- 🔐 Firebase authentication & real-time database
- 🔍 Browse and post freelance tasks
- 💼 Freelancers can bid on tasks
- 📋 View task details and bid lists
- 🌙 Light and dark mode (customize via Tailwind)
- 💬 Toast notifications and alerts for actions
- 🎨 Modern UI with icons and animation
- 📱 Fully responsive layout

## 🛠️ Tech Stack

| Frontend         | Libraries & Tools                 |
|------------------|----------------------------------|
| React 19         | Tailwind CSS 4, Swiper JS        |
| React Router 7   | Lucide React, React Icons        |
| Firebase         | Auth & Database                  |
| UX Enhancements  | React Toastify, SweetAlert2      |
| Animations       | React Simple Typewriter          |
| Tooltips         | React Tooltip                    |

 ## Folder structure example
src/
│
├── assets/             # Images & icons
├── components/         # Reusable UI components
├── pages/              # Main page components (Home, TaskDetails, etc.)
├── routes/             # React Router configs
├── firebase/           # Firebase config and API functions
├── App.jsx
├── main.jsx
└── index.css
