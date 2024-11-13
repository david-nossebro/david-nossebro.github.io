import theme from "tailwindcss/defaultTheme.js";

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			typography: (theme) => ({
				DEFAULT: {
					css: {
						// Remove pre and post '"' of blockquotes
						'blockquote p:first-of-type::before': false,
						'blockquote p:first-of-type::after': false,
						'blockquote': {
							'font-style': 'normal'
						},

						// Style ´code´ with gray background without single ` around
						'code::before': false,
						'code::after': false,
						'code': {
							'background-color': theme('colors.gray.300'),
							'padding-left': '4px',
							'padding-right': '4px'
						}
					},
				},
			}),
		},
	},
	plugins: [
		require('@tailwindcss/typography')
	],
}
