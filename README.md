## Qantas Hotels Test

Overview

This project is a React application built with TypeScript and Vite. It includes ESLint and Prettier for code quality and formatting, along with Testing Library and Vitest for testing which is very similair to jest.

Prerequisites

Ensure you have the following installed:

Node.js (Latest LTS recommended)

npm (for package management)

# Installation

Clone the repository and install dependencies:

## Clone the repository

git clone https://github.com/vivoavriro/qantas-hotels.git
cd qantas-hotels-test

## Install dependencies

npm install

# Running the Project

Start the development server:

```bash
npm run dev
```

This will start Vite's development server with hot module replacement (HMR).

## Building for Production

To build the application for production, run:

```bash
npm run build
```

The output will be available in the dist/ directory.

## Previewing the Build

To preview the built project locally:

```bash
npm run preview
```

## Linting and Formatting

Run ESLint to check for code issues:

```bash
npm run lint
```

## Automatically fix linting issues:

```bash
npm run lint:fix
```

## Format code using Prettier:

```bash
npm run format
```

# Running Tests

Run the test suite:

```bash
npm run test
```

## Run tests in watch mode:

```bash
npm run test:watch
```

## Run tests with coverage:

```bash
npm run test:coverage
```

## Run specific test files or patterns:

```bash
npm run test:file -- testFileName
```

# Technologies Used

- React 18.3.1

- TypeScript ~5.6.2

- Vite 6.0.5

- Vitest 3.0.4
