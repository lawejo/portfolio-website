/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			zIndex: {
				'100': '100',
			},
			colors: {
				'primary1': '#062240',
				'primary2': '#f1f1f1ed',
				'secondary1': '#6b7246',
				'secondary2': '#0f0f0f',
				'accent1': '#ff5e4f',
				'offwhite': '#fffaff',
				'project_gradient': '#255990'
			},
			width: {
				'2px': '2px',
				'335px': '335px'

			},


			fontFamily: {
				'displayfont': ['"Hepta Slab"', 'serif'],
				'bodyfont': ['"Lato"', 'sans-serif'],
				'bodyfont2': ['"Jost"', 'sans-serif'],
				'system-ui': ['"system-ui"', 'sans-serif'],
				'Roboto': ['"Roboto"', 'sans-serif;'],
				'Jost': ['"Jost"', 'sans-serif'],
			}
		},
	},

	plugins: [],

}
