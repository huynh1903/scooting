/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'footer-pattern': "url('/src/assets/images/semi-circles.svg')",
        'home-hero-desktop': "url('/src/assets/images/home-hero-desktop.jpg')",
        'home-hero-tablet': "url('/src/assets/images/home-hero-tablet.jpg')",
        'home-hero-mobile': "url('/src/assets/images/home-hero-mobile.jpg')",
        'about-hero-desktop': "url('/src/assets/images/about-hero-desktop.jpg')",
        'about-hero-tablet': "url('/src/assets/images/about-hero-tablet.jpg')",
        'about-hero-mobile': "url('/src/assets/images/about-hero-mobile.jpg')",
        'careers-location-hero-desktop': "url('/src/assets/images/careers-locations-hero-desktop.jpg')",
        'careers-location-hero-tablet': "url('/src/assets/images/careers-locations-hero-tablet.jpg')",
        'careers-location-hero-mobile': "url('/src/assets/images/careers-locations-hero-mobile.jpg')",
        'world-map-mobile': "url('/src/assets/images/world-map-mobile.png')",
        'world-map-tablet': "url('/src/assets/images/world-map-tablet.png')",
        'world-map-desktop': "url('/src/assets/images/world-map-desktop.png')",
      }
    },
  },
  plugins: [],
}