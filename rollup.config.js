import { terser } from 'rollup-plugin-terser';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
	input: 'endpoint.js',
	output: {
		format: 'cjs',
		file: 'index.js',
	},
	plugins: [nodeResolve(), commonjs(), terser()],
};
