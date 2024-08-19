import path from 'path'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import basicSsl from '@vitejs/plugin-basic-ssl'

export default defineConfig({
	plugins: [react(), tsconfigPaths(), basicSsl()],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
		},
	},
	publicDir: './public',
	server: {
		// Exposes your dev server and makes it accessible for the devices in the same network.
		host: true,
	},
})
