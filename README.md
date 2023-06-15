# KnowHow React Test

Welcome to the KnowHow React Test Project! This README file will provide you with an overview of the project and guide you on how to set it up and use it effectively.

## Project Overview

This project is a 2 page web application built using React, a popular JavaScript library for building user interfaces. It aims to provide a responsive and interactive website to search for different gifs and also create/delete favorites

### Installation

To set up the project on your local machine, please follow these steps:

1. Clone the repository to your local machine using Git or download the ZIP file.
2. Navigate to the project directory.
   cd knowhow_test
3. Install the dependencies by running the following command:
   npm install
4. Create a new file named .env in the root directory of the project.
5. Open the .env.example file and copy the variable names.
6. Paste the variable names and add the actual values from your vault or a secure source.

### Usage

To start the development server and run the project locally, use the following command:
npm start

### Folder Structure

├── public/
│ ├── index.html
│ └── ...
├── src/
│ ├── components/
│ │ ├── GifCard.jsx
│ │ ├── GifsContainer.jsx
│ │ └── ...
│ ├── App.jsx
│ ├── index.js
│ ├── pages/
│ │ ├── Home.jsx
│ │ ├── Favorites.jsx
│ │ └── ...
├── styles/
│ │ ├── gifCard.css
│ │ ├── loader.css
│ │ └── ...
│ └── ...
├── package.json
└── ...

The `public` directory contains the static assets and the index.html file, which serves as the entry point for the application.

The `src` directory is where you will find the React components, including the main App.js file.

The `components` directory contains reusable components that can be used throughout the application.

The `pages` directory contains individual page components. Each page component represents a specific page or route in your application. For example, Home.js and Favorites.js represent the home page and the saved gifs page of the application, respectively.

### Deployment

To deploy the React project, need to build it first. Use the following command to create an optimized production-ready build:
npm run build

This command will create a build directory with all the necessary files. You can then deploy these files to your hosting provider or server.

## Learn More

Learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
