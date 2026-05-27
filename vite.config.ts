import {defineConfig} from 'vite'

import react from '@vitejs/plugin-react'

export default defineConfig({
    base: '/React-Movie-V1/',
    plugins: [react()],
})