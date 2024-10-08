# Gisty Chat Frontend

## Overview

Gisty Chat is a real-time chat application built using **React** with **TypeScript** and styled using **Tailwind CSS**. This is the frontend of the application, which handles user interface and interactions.

## Features

- User authentication (Login & Registration)
- Real-time chat functionality
- Smooth animations (intro/outro effects)
- Responsive design using Tailwind CSS
- Hooks-based architecture for state management

## Technologies

- **React** with TypeScript
- **SWC** for fast compilation
- **Tailwind CSS** for styling
- **Axios** for HTTP requests
- **React Router** for navigation
- **React Toastify** for notifications

## Folder Structure

```bash
src/
│
├── components/    # Reusable components (buttons, forms, etc.)
├── pages/         # Main pages (Home, Chat, Login, Register)
├── services/      # Axios services for API calls (e.g., loginUser, registerUser)
├── assets/        # Images, icons, etc.
├── styles/        # Tailwind config and custom CSS
├── App.tsx        # Root component
├── index.tsx      # Entry point for React
