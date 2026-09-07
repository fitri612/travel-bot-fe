# 🤖 TravelBot — AI Travel Assistant

An AI-powered travel assistant web application designed to help users plan trips, discover destinations, check real-time weather conditions, and receive personalized travel recommendations interactively.

This application connects a **React (TypeScript) + Tailwind CSS** frontend with a **Node.js / Express** backend powered by **Google Gemini AI**.

---

## 🌟 Key Features

- **AI-Powered Travel Advice:** Leverages **Google Gemini AI** to generate smart, natural, and context-aware responses for itineraries, local attractions, and culinary spots.
- **Real-Time Weather Integration:** Fetches real-time weather data from external APIs to provide accurate travel tips based on current destination conditions.
- **Contextual Chat Memory:** Retains session chat history so the AI remembers prior prompts for seamless conversation flows.
- **Responsive UI & Quick Prompts:** Features interactive suggestion chips, popular destination cards, and a modern dark-themed interface built with **Tailwind CSS**.
- **Developer Tools:** Pre-configured with **React Router, TanStack Query, ESLint, Prettier, Husky, and GitHub Actions** for high code quality and smooth CI/CD workflows.

---

## 🛠️ Tech Stack

### Frontend
- **Framework:** React (TypeScript)
- **Styling:** Tailwind CSS
- **State & Data Fetching:** TanStack Query (React Query)
- **Routing:** React Router
- **UI Components:** Material UI & Custom Tailwind Components

### Backend & AI
- **Runtime:** Node.js + Express
- **AI Model:** Google Gemini API (`@google/genai`)
- **External Integration:** Open-Meteo Weather API

### Code Quality & CI/CD
- **Linter & Formatter:** ESLint + Prettier
- **Git Hooks:** Husky
- **Automation:** GitHub Actions

---

## 🚀 Getting Started

Follow these instructions to get a local copy up and running.

### Prerequisites

Ensure you have the following installed on your machine:
- **Node.js:** v18.x or higher
- **npm:** v9.x or higher
- **Google Gemini API Key:** Obtainable from [Google AI Studio](https://aistudio.google.com/)

---

### Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/fitri612/travel-bot-fe
   cd travel-bot
