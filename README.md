 # Pawsome - Community Driven Pet Platform

A social platform and resource hub for pet owners — built with Next.js.

## Purpose

Pawsome is a web application designed to connect pet owners with a community-driven space where they can share tips, stories, and experiences about their pets. The platform provides access to both free and premium content including expert guides, personalized advice, and a supportive community tailored to all types of pet owners.

## Live URL

## Features

- **Authentication & Authorization** — Secure user auth powered by `better-auth` with MongoDB adapter, supporting role-based access control
- **Dark / Light Theme** — Seamless theme switching via `next-themes` for a comfortable viewing experience in any environment
- **Toast Notifications** — Real-time user feedback and alerts delivered through `react-toastify`
- **Private Route** — Only users can add a pet, update, make request for adoption and manage his listings
- **Modern, Responsive UI** — Polished component library using `@heroui/react` and `DaisyUI` on top of Tailwind CSS, optimized for all screen sizes
- **Smooth Animations** — Delightful micro-interactions and entrance effects powered by `animate.css` and `@gravity-ui/icons`

## NPM Packages Used

| Package | Purpose |
|---|---|
| `next` (v16.2.6) | React framework for server-side rendering and routing |
| `react` / `react-dom` (v19) | Core UI library |
| `better-auth` | Authentication framework |
| `@better-auth/mongo-adapter` | MongoDB adapter for better-auth |
| `mongodb` | MongoDB client for database operations |
| `@heroui/react` | Primary component library |
| `@heroui/styles` | Styling companion for HeroUI components |
| `tailwindcss` | Utility-first CSS framework |
| `daisyui` | Tailwind CSS component plugin |
| `next-themes` | Theme management (dark/light mode) |
| `swiper` | Touch-friendly carousel/slider component |
| `react-toastify` | Toast notification system |
| `react-icons` | Icon library with popular icon sets |
| `animate.css` | CSS animation library |
| `@gravity-ui/icons` | Icon set from Gravity UI |
| `dotenv` | Environment variable management |


## Tech Stack

- **Framework:** Next.js 16
- **Language:** JavaScript
- **Styling:** Tailwind CSS v4, DaisyUI, HeroUI
- **Database:** MongoDB
- **Auth:** Better Auth