# My Portfolio Website

<img width="1315" height="540" alt="image" src="https://github.com/user-attachments/assets/9c26919d-8aac-4bd2-89d3-397e5db6b7e5" />
<img width="1319" height="572" alt="image" src="https://github.com/user-attachments/assets/cb275bad-4958-4e23-a39f-053b3da68776" />
<img width="1304" height="585" alt="image" src="https://github.com/user-attachments/assets/717246b1-f4b7-4192-bc93-63a17a43217a" />
<img width="1304" height="594" alt="image" src="https://github.com/user-attachments/assets/659c8d88-49d6-4fbf-9381-eab65394fe95" />
<img width="1299" height="581" alt="image" src="https://github.com/user-attachments/assets/e7431880-fff6-4803-953d-27d7692d554d" />
<img width="1310" height="595" alt="image" src="https://github.com/user-attachments/assets/13625d9d-bd68-4cdf-8d6d-aa69c7e21d3c" />


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
<img width="715" height="339" alt="image" src="https://github.com/user-attachments/assets/e75fd969-6516-4281-ba45-e66e4514251c" />

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
npm run deploy
