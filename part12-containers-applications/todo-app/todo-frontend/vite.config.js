import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom', // Required for React Testing Library
    globals: true,         // Optional, allows using "test" and "expect" without import
    setupFiles: './testSetup.js', // Optional, if you need jest-dom matchers
  }
})
