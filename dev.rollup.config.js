import { terser } from 'rollup-plugin-terser';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import execute from 'rollup-plugin-execute';

export default {
	input: 'endpoint.js',
	output: {
		format: 'cjs',
		file: 'index.js',
	},
	plugins: [nodeResolve(), commonjs(), terser(), execute(['docker-compose restart directus'])], //use any command here, e.g pm2 restart directus
};
