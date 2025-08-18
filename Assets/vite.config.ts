import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import packageJson from './package.json';

const __dirname = dirname(fileURLToPath(import.meta.url));
const packageVersion = packageJson.version;

export default defineConfig({
	build: {
		emptyOutDir: true,
		outDir: '../Components/wwwroot',
		lib: {
			entry: resolve(__dirname, 'main.js'),
			name: 'MyLib',
			fileName: 'lfx-client',
			formats: ['umd'],
		},
		rollupOptions: {
			output: {
				entryFileNames: (info) => {
					if (info.name.includes('main')) return `[name]-${packageVersion}.min.js`;
					return `[name].js`;
				},
				assetFileNames: (info) => {
					// Check for CSS files and apply versioning
					if (info.name?.endsWith('.css')) return `[name]-${packageVersion}[extname]`;

					// For all other assets (e.g., images), use a standard pattern
					return `[name]-[hash][extname]`;
				},
			},
		},
	},
});
