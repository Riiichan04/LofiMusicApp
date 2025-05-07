import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		proxy: {
			'/music': {
				target: import.meta.env.VITE_SERVER_HOSTy,
				changeOrigin: true,
				// rewrite: (path) => path.replace(/^\/music/, '/admin/music'),
			},
		},
	},
})
