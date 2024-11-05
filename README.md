# Build a simple Website with 3d models using ThreeJs & ReactJs

<p align="center">
  <img src="https://github.com/dopelyner/3d-portfolio/blob/master/src/assets/showcase.png?raw=true" alt="Alt text" width="300"/>
  <img src="https://github.com/dopelyner/3d-portfolio/blob/master/src/assets/showcase01.png?raw=true" alt="Alt text" width="300"/>
  <img src="https://github.com/dopelyner/3d-portfolio/blob/master/src/assets/showcase02.png?raw=true" alt="Alt text" width="300"/>
  <img src="https://github.com/dopelyner/3d-portfolio/blob/master/src/assets/showcase03.png?raw=true" alt="Alt text" width="300"/>
  <img src="https://github.com/dopelyner/3d-portfolio/blob/master/src/assets/showcase04.png?raw=true" alt="Alt text" width="300"/>
  <img src="https://github.com/dopelyner/3d-portfolio/blob/master/src/assets/showcase05.png?raw=true" alt="Alt text" width="300"/>
</p>

##  Technologies 
- ThreeJS - a powerful 3D graphics library for rendering and animating the 3D model;
- React Three Fiber - a popular library for creating 3D graphics with ThreeJS in React;
- TailwindCSS - a popular utility-first CSS styling framework;
- Framer Motion - the most popular library used to bring your React website to life with animations

Objectives:

- Load, create and customize stunning 3D models and geometries with various lights, as well as understand the 3D world with a camera and positioning of an object in space.
- Make your code reusable and scalable using Higher Order Components (HOCs) and other industry-standard best practices
- Implement sending emails through a form on the website
- Ensure responsiveness across all devices and improve your site's performance using Suspense and Preload.

_______
## The actual building...

*1. Create a folder & change directory to it*
``` mkdir 3d-portfolio
cd 3d-portfolio
```

*2. Scaffold a Vite + React project*
```
npm create vite@latest ./ --template react
```

*3. Install Tailwind CSS*
```
npm install -D tailwindcss
npx tailwindcss init
```

*4. Install the following dependencies*
```
npm install -legacy-peer-deps @react-three/fiber @react-three/drei maath react-tilt react-vertical-timeline-component @emailjs/browser framer-motion react-router-dom
```
```
npm install --legacy-peer-deps three
```
*5. Run locally*
```
npm run dev
```

*7. Build for production*
```
npm run build
```
