import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: '.',
  publicDir: false,
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        'pages/asia-rooms': resolve(__dirname, 'pages/asia-rooms.html'),
        'pages/beginners': resolve(__dirname, 'pages/beginners.html'),
        'pages/booking': resolve(__dirname, 'pages/booking.html'),
        'pages/casinos': resolve(__dirname, 'pages/casinos.html'),
        'pages/login': resolve(__dirname, 'pages/login.html'),
        'pages/news': resolve(__dirname, 'pages/news.html'),
        'pages/profile': resolve(__dirname, 'pages/profile.html'),
        'pages/strategy': resolve(__dirname, 'pages/strategy.html'),
        'pages/tournaments': resolve(__dirname, 'pages/tournaments.html'),
        'pages/venue-detail': resolve(__dirname, 'pages/venue-detail.html'),
        'junkets/bellagio': resolve(__dirname, 'junkets/bellagio.html'),
        'junkets/hippodrome': resolve(__dirname, 'junkets/hippodrome.html'),
        'junkets/manila-cod': resolve(__dirname, 'junkets/manila-cod.html'),
        'junkets/paradise-city': resolve(__dirname, 'junkets/paradise-city.html'),
        'junkets/star-sydney': resolve(__dirname, 'junkets/star-sydney.html'),
        'junkets/wynn-macau': resolve(__dirname, 'junkets/wynn-macau.html'),
      },
    },
  },
});
