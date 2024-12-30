# Frontend Intern Task Moonex Dotprolabs

This project was developed as part of my skill-building and preparation for a freelancing web development career, focusing on creating simple, professional websites using Next.js and a headless CMS to deliver modern and efficient solutions.

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

This project is part of a frontend development challenge designed to evaluate and enhance skills in creating responsive, user-friendly websites based on a Figma design. Participants are tasked with building a professional site that adapts seamlessly across all screen sizes using React and Tailwind CSS. Creativity is encouraged for mobile and tablet layouts, as no designs for these are provided.

In addition to responsiveness, the project requires implementing minimal animations, such as hover effects and smooth transitions, to deliver a polished user experience. Interactive components like responsive navigation bars and FAQ sections should be built using ShadCN or similar libraries.

Participants must deploy the completed project using Vercel or Netlify, ensuring the live site and source code are publicly accessible via a GitHub repository. The deadline for submission is 27 November 2024. 

- **Tools and Technologies** 
The challenge leverages the React Vite framework for development, with Tailwind CSS for styling and ShadCN for interactive components. The primary fonts are Raleway and Neue Machina, with Fira Code as an alternative for Neue Machina if unavailable. 

- **Deliverables** 
A responsive website deployed live on Vercel or Netlify.
A public GitHub repository containing the project’s source code.

### Screenshot

![](/public/screenshot-desktop.png)

### Links

- Solution URL: [https://github.com/traez/frontend-intern-task-moonex-dotprolabs](https://github.com/traez/frontend-intern-task-moonex-dotprolabs)
- Live Site URL: [https://frontend-intern-task-moonex-dotprolabs.vercel.app/](https://frontend-intern-task-moonex-dotprolabs.vercel.app/)

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

### What I learned
   
- **Google Fonts Optimization with Tailwind CSS and Next.js**  
Confirmed the protocol for using Next.js's built-in Google Fonts optimization with Tailwind CSS.    
- **Standardized Max-width Setup**  
Standardized the max-width configuration for my applications to ensure consistent layouts across projects.
- **Next.js 15 and React 19 Integration**  
First use of Next.js 15 alongside stable React 19..
- **Local vs Network Development Addresses**  
**Local ([http://localhost:3000](http://localhost:3000))**: is used to access the app directly on the development machine for personal testing.  
**Network ([http://192.168.241.190:3000](http://192.168.241.190:3000))**: enables other devices on the same local network (e.g., Wi-Fi or LAN) to access the application. This is useful for testing on mobile devices while developing.
- **Figma Asset Export and Specification Mirroring**  
Export all assets (files) from a Figma project by clicking Export under the project name in the left sidebar.  
Explore layers and sublayers in Figma to view and replicate the exact settings for individual items.
- **Flexbox for Responsive Layouts**  
Adopted a flexible, responsive layout approach using Flexbox for item alignment along the main axis:  
```
.inner-box {
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 0;
  overflow: auto;
  border: 1px solid #ccc;
}
```
Tailwind CSS equivalent:  
`<div className="flex-grow flex-shrink overflow-auto border border-gray-300">Content 1</div>`  
This approach is preferred over using grid on the main outer container for responsive designs across mobile and desktop views.
- **Smooth Color Transitions with Tailwind CSS**  
The `transition-colors` utility in Tailwind CSS adds smooth transitions for color property changes (e.g., color, background-color) when triggered by hover, focus, or JavaScript.
- **Multiple Background Images with Tailwind CSS**  
Tailwind CSS supports multiple background images using arbitrary value syntax:
```html
<div className="bg-[url('/circles.png'),url('/bg.png')]">
```
This applies two layered background images, with '/circles.png' on top of '/bg.png'.
- **Gap Property in CSS and Tailwind**  
The `gap` CSS property is a shorthand for `column-gap` and `row-gap`. Tailwind CSS provides utilities like:
- `gap-x-1` for `column-gap: 0.25rem; /* 4px */`
- `gap-y-1` for `row-gap: 0.25rem; /* 4px */`
- **Sibling State Styling with Peer Modifier in Tailwind CSS**  
The `peer` class in Tailwind CSS allows styling an element based on the state of its sibling. Apply `peer` to a triggering element and `peer-{modifier}` to its sibling. For example, `peer-hover:block` makes a sibling visible when the peer element is hovered. The peer and its target must be direct siblings for this to work.
- **Future Enhancement: Component Load Animations**  
Adding animations/transitions for each component on page load would be a nice-to-have feature. While not implemented due to time constraints, it's recognized as a potential future enhancement that can be implemented as needed.

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
