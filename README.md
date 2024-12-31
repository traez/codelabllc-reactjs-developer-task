# CodelabLLC Reactjs Developer Task

This is my task submission for a React.js Developer take home job assessment.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
  - [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
  - [Author](#author)
  - [Acknowledgments](#acknowledgments)

## Overview

### The Challenge/User Stories

- **Intro** 
Build a dynamic and responsive shopping cart application featuring three main pages: Product List, Product Details, and Cart. The app must deliver a smooth shopping experience using Next.js for routing, TypeScript for type safety, Zustand for state management, and Tailwind CSS for styling. Clean and consistent code practices can be maintained with optional use of ESLint and Prettier.    

- **Product List Page** 
The Product List page displays all available products fetched dynamically from an API or mock data. Each product will show a thumbnail, name, price, and an "Add to Cart" button. Pagination, implemented either server-side or client-side, ensures smooth navigation through the catalog without overwhelming the user.    

- **Product Details Page** 
The Product Details page provides an in-depth view of a product, including a large image, name, price, and description. Users can select a quantity and add the product to their cart. Dynamic routing ensures every product has its own unique page for easy navigation.    

- **Cart Page** 
The Cart page manages selected items, showing product name, quantity, and price, with options to edit or remove items. The total price updates dynamically based on changes. For empty carts, a clear message is displayed. A "Proceed to Checkout" button directs users to the next step.    

- **Design and Functionality** 
The app will feature a modern, mobile-first design, styled with Tailwind CSS for responsiveness and flexibility. Efficient state management with Zustand, type safety with TypeScript, and dynamic routing with Next.js ensure a seamless and scalable solution.   

### Screenshot

![](/public/screenshot-desktop.png)

### Links

- Solution URL: [https://github.com/traez/codelabllc-reactjs-developer-task](https://github.com/traez/codelabllc-reactjs-developer-task)
- Live Site URL: [https://codelabllc-reactjs-developer-task.vercel.app/](https://codelabllc-reactjs-developer-task.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox and CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- Typescript
- Nodejs            
- Tailwind CSS     
- Sonner 
- Zustand  

### What I learned
   
**Zustand for State Management**  
Zustand is a lightweight state management library, similar to Redux Toolkit but more performant than the Context API. It provides a simpler API for managing global state in React applications.   
**Array Filtering with Boolean**  
The `.filter(Boolean)` method is a concise way to remove falsy values from an array. It uses the `Boolean` constructor function to convert array elements to true or false, effectively filtering out falsy values (false, null, undefined, 0, NaN, and empty strings).

Example:
```javascript
const array = [0, 1, null, 2, '', 3];
const filteredArray = array.filter(Boolean);
console.log(filteredArray); // Output: [1, 2, 3]
```

### Continued development

- More projects; increased competence!

### Useful resources

Stackoverflow  
YouTube  
Google  
ChatGPT

## Author

- Website - [Zeeofor Technologies](https://zeeofortech.vercel.app/)
- Twitter - [@trae_z](https://twitter.com/trae_z)

## Acknowledgments

-Jehovah that keeps breath in my lungs
