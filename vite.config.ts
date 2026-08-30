import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// Repo name for GitHub Pages project sites: https://<user>.github.io/<repo>/
// Only applied when GH_PAGES=true is set (the deploy workflow does this),
// so `npm run dev` / `npm run preview` keep working normally at the root.
const REPO_NAME = 'delovan-sulaiman'

export default defineConfig({
  base: process.env.GH_PAGES ? `/${REPO_NAME}/` : '/',
  plugins: [react(), tailwindcss()],
})
