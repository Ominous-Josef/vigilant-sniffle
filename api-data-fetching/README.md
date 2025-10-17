# API Data Fetching

This project is a Next.js application designed to demonstrate various methods of fetching and displaying data from public APIs. It includes examples of data listing with pagination and sorting, as well as data visualization with charts.

## Overview

The application is structured into different pages, each showcasing a unique dataset:

- **Random User**: Displays a randomly generated user data.
- **Quotes**: Shows a collection of quotes with pagination.
- **COVID-19 Stats**: Visualizes historical COVID-19 data for the US using a line chart, with options to select different time ranges.

The project is built with a modern tech stack, emphasizing best practices for code organization, state management, and UI development.

## Getting Started

Follow these instructions to get the project up and running on your local machine.

### Prerequisites

- [Node.js](https://nodejs.org/en/) (v20 or later)
- [npm](https://www.npmjs.com/)

### Installation

1.  **Clone the repository:**

    ```bash
    git clone <repository-url>
    ```

2.  **Navigate to the project directory:**

    ```bash
    cd vigilant-sniffle/api-data-fetching
    ```

3.  **Install dependencies:**

    ```bash
    npm install
    ```

4.  **Run the development server:**
    ```bash
    npm run dev
    ```

The application will be available at [http://localhost:3000](http://localhost:3000).

## Key Dependencies

This project utilizes several key libraries and frameworks:

- **[Next.js](https://nextjs.org/)**: A React framework for building server-side rendered and statically generated web applications.
- **[Tailwind CSS](https://tailwindcss.com/)**: A utility-first CSS framework for rapid UI development.
- **[shadcn/ui](https://ui.shadcn.com/)**: A collection of beautifully designed, accessible UI components.
- **[Redux Toolkit (RTK Query)](https://redux-toolkit.js.org/)**: For efficient data fetching, caching, and state management.
- **[Axios](https://axios-http.com/)**: A promise-based HTTP client for making requests to external APIs.
- **[Recharts](https://recharts.org/)**: A composable charting library built on React components.
- **[TanStack Table](https://tanstack.com/table/)**: A headless UI library for building powerful tables and datagrids.
