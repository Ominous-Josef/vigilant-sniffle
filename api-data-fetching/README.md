# API Data Fetching Showcase

This project is a Next.js application designed to demonstrate various methods of fetching and displaying data from public APIs. It includes examples of data tables with pagination and sorting, as well as data visualization with charts.

## Overview

The application is structured into different pages, each showcasing a unique dataset:

-   **Random Users**: Displays a table of randomly generated user data with pagination.
-   **Quotes**: Shows a collection of quotes in a simple table.
-   **COVID-19 Stats**: Visualizes historical COVID-19 data for the US using a line chart, with options to select different time ranges.

The project is built with a modern tech stack, emphasizing best practices for code organization, state management, and UI development.

## Getting Started

Follow these instructions to get the project up and running on your local machine.

### Prerequisites

-   [Node.js](https://nodejs.org/en/) (v20 or later)
-   [npm](https://www.npmjs.com/)

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

-   **[Next.js](https://nextjs.org/)**: A React framework for building server-side rendered and statically generated web applications.
-   **[Tailwind CSS](https://tailwindcss.com/)**: A utility-first CSS framework for rapid UI development.
-   **[shadcn/ui](https://ui.shadcn.com/)**: A collection of beautifully designed, accessible UI components.
-   **[Redux Toolkit (RTK Query)](https://redux-toolkit.js.org/)**: For efficient data fetching, caching, and state management.
-   **[Axios](https://axios-http.com/)**: A promise-based HTTP client for making requests to external APIs.
-   **[Recharts](https://recharts.org/)**: A composable charting library built on React components.
-   **[TanStack Table](https://tanstack.com/table/)**: A headless UI library for building powerful tables and datagrids.

## Recommendations

Here are a few recommendations for future improvements and best practices:

-   **Error Handling**: Implement more robust error boundaries and display user-friendly error messages when API requests fail.
-   **Loading Skeletons**: Enhance the loading states with more detailed skeleton screens that mimic the final layout for a smoother user experience.
-   **Testing**: Introduce unit and integration tests using a framework like Jest and React Testing Library to ensure component and application stability.
-   **Environment Variables**: For any sensitive information like API keys, use `.env.local` to manage environment variables securely, rather than hardcoding them.
-   **Code Modularity**: Continue to break down large components into smaller, reusable ones to improve maintainability and readability.
