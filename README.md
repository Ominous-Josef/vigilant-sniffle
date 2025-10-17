# Vigilant Sniffle - Tech Assessments

Welcome to the `vigilant-sniffle` repository, a collection of front-end projects developed to showcase various web technologies and best practices. This repository is structured as a monorepo containing three distinct applications.

## Folder Structure

The repository is organized into the following sub-projects:

```
vigilant-sniffle/
├── api-data-fetching/   # Next.js application for API data fetching and visualization
├── shopping-cart-js/    # React shopping cart application (JavaScript)
└── shopping-cart-ts/    # React shopping cart application (TypeScript)
```

---

## 1. [API Data Fetching Showcase](https://github.com/Ominous-Josef/vigilant-sniffle/blob/main/api-data-fetching/README.md)

A Next.js application designed to demonstrate various methods of fetching and displaying data from public APIs. It includes examples of data tables with pagination and sorting, as well as data visualization with charts.

### Key Features

- **Random Users**: Displays a table of randomly generated user data with pagination.
- **Quotes**: Shows a collection of quotes in a simple table.
- **COVID-19 Stats**: Visualizes historical COVID-19 data for the US using a line chart.

### Tech Stack

- **Framework**: Next.js
- **Styling**: Tailwind CSS, shadcn/ui
- **State Management & Data Fetching**: Redux Toolkit (RTK Query), Axios
- **Data Visualization**: Recharts
- **Tables**: TanStack Table

### Getting Started

```bash
cd api-data-fetching
npm install
npm run dev
```

The application will be available at `http://localhost:3000`.

---

## 2. [React Shopping Cart (JavaScript)](https://github.com/Ominous-Josef/vigilant-sniffle/blob/main/shopping-cart-js/README.md)

A modern shopping cart application built with React and JavaScript. It serves as a practical example of how to build a client-side application featuring product listings, a shopping cart, and state management using Redux.

### Tech Stack

- **Library**: React
- **Build Tool**: Vite
- **Routing**: React Router
- **State Management**: Redux Toolkit, React Redux, Redux Persist
- **Styling**: Tailwind CSS

### Getting Started

```bash
cd shopping-cart-js
npm install
npm run dev
```

The application will be available at `http://localhost:5173`.

---

## 3. [React Shopping Cart (TypeScript)](https://github.com/Ominous-Josef/vigilant-sniffle/blob/main/shopping-cart-ts/README.md)

A type-safe version of the shopping cart application, built with React and TypeScript. This project demonstrates the benefits of using TypeScript for building robust and maintainable applications.

### Tech Stack

- **Library**: React
- **Language**: TypeScript
- **Build Tool**: Vite
- **Routing**: React Router
- **State Management**: Redux Toolkit, React Redux, Redux Persist
- **Styling**: Tailwind CSS

### Getting Started

```bash
cd shopping-cart-ts
npm install
npm run dev
```

The application will be available at `http://localhost:5173`.

## Author

This project is maintained by [**Joseph Ohwonohwo**](https://github.com/Ominous-Josef).
