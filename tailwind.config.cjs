/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				body: "rgb(var(--color-bg))",
				"box-bg": "rgb(var(--color-box))",
				"box-shadow": "rgb(var(--box-sd))",
				"box-border": "rgb(var(--box-border))",
				primary: "#1d4ed8",
				"heading-1": "rgb(var(--heading-1))",
				"heading-2": "rgb(var(--heading-2))",
				"heading-3": "rgb(var(--heading-3))",
			},
			screens:{
				midmd:"880px"
			},
			spacing: {
				'1': '0.25rem',
				'2': '0.5rem',
				'3': '0.75rem',
				'4': '1rem',
				'5': '1.25rem',
				'6': '1.5rem',
				'8': '2rem',
				'10': '2.5rem',
				'12': '3rem',
				'16': '4rem',
				'20': '5rem',
				'24': '6rem',
				'32': '8rem',
				'40': '10rem',
				'48': '12rem',
				'56': '14rem',
				'64': '16rem',
			  },
		},
	},
	plugins: [
		require('@tailwindcss/forms'),
	],
}
