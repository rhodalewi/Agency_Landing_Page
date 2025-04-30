# Sunnyside agency landing page


## Table of contents
- [Sunnyside agency landing page](#sunnyside-agency-landing-page)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [Installation](#installation)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
  - [Author](#author)
  - [Acknowledgments](#acknowledgments)
  - [Note](#note)
- [React + Vite](#react--vite)
  - [Expanding the ESLint configuration](#expanding-the-eslint-configuration)

## Overview
This project is a fully responsive landing page built with React and pure CSS. It follows the exact structure and design provided by Frontend Mentor, including mobile-first layout, optimized image loading, and custom component-based architecture.

### Screenshot

![Desktop Screenshot](/design/desktop-design.jpg)
![Mobile Screenshot](/design/mobile-design.jpg)

### Links

- Solution URL: [GitHub Repository](https://github.com/rhodalewi/Agency_Landing_Page)
- Live Site URL: [Live Preview](https://agency-landing-page-nine.vercel.app/)

## Installation

To run this project locally:

1. **Clone the repository**
   git clone https://github.com/your-username/sunnyside-agency-landing-page.git

2. **Navigate into the project folder**
     cd sunnyside-agency-landing-page
3. **Install dependencies**
   npm install
4. **Run the development server**
   npm run dev
5. **Open http://localhost:5173 in your browser to view it.**

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox & Grid
- Mobile-first workflow
- [React](https://https://react.dev/) – JS library
- [Vite](https://vitejs.dev/) – Fast React setup
- CSS Media Queries
- `srcSet` and `useEffect` for image optimization

### What I learned

- How to structure React components with reusable data
- How to conditionally render background images using `window.innerWidth` and `useEffect` for performance
- How to design mobile navigation menus with conditional rendering
- Improved my knowledge of responsive layout with pure CSS and Grid
- How to use `.filter()` to dynamically remove items from arrays used in components (e.g., removing the Contact link from the footer)
  
  ```js
const footerLinks = navLinks.filter(link => link !== 'Contact');

## Author
- Frontend Mentor - [@rhodalewi](https://www.frontendmentor.io/profile/rhodalewi);

## Acknowledgments
- Thanks to Frontend Mentor for the challenge
- Appreciation to mentors and open source contributors who made the React + Vite workflow easy to adopt.

## Note
This is a solution to the [Sunnyside agency landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/sunnyside-agency-landing-page-7yVs3B6ef). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
