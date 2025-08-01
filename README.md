# My Portfolio Website

![Portfolio Screenshot](./public/screenshot.png)

A modern, responsive portfolio website built with React showcasing my projects, skills, and contact information.

## Features

- Responsive design for all devices
- Project showcase with GitHub links
- Skills visualization
- Contact form with validation
- Smooth animations and transitions

## Technologies Used

- React.js
- CSS3
- React Testing Library
- Jest
- GitHub Pages (for deployment)

## Development Process

### Setup
1. Created React app using `create-react-app`
2. Structured components:
   - Navigation
   - Hero section
   - About
   - Skills
   - Projects
   - Contact
   - Footer

### Challenges & Solutions

1. **Image Loading Issues**
   - Problem: Images weren't displaying in project cards
   - Solution: 
     - Verified correct file paths
     - Implemented lazy loading with `react-lazy-load-image-component`
     - Added proper image dimensions in CSS

2. **Form Validation Testing**
   - Problem: Tests failing for validation messages
   - Solution:
     - Implemented proper error state management
     - Added visual feedback for validation errors
     - Mocked browser APIs for testing

3. **Responsive Design**
   - Problem: Layout issues on mobile devices
   - Solution:
     - Implemented mobile-first CSS
     - Used responsive units (rem, %)
     - Added media queries for breakpoints

## Deployment

Deployed using GitHub Pages:

1. Installed gh-pages:
```bash
npm install gh-pages --save-dev
