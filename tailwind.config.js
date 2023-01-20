const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./public/index.html",
		"./src/**/*.{html,js,ts,jsx,tsx}"
	],
	theme: {
		extend: {
			screens: {
				mobile: '0px',
				'mobile-md': '320px',
				'mobile-lg': '375px',
				tablet: '425px',
				'tablet-md': '600px',
				'tablet-lg': '768px',
				laptop: '1024px',
				'laptop-lg': '1366px',
				desktop: '1440px',
				hd: '1290px'
			},
			fontFamily: {
				title: ["Pentatonic", "sans-serif"],
				text: ["Aeroport", "sans-serif"]
			},
			colors: {
				'main-white': '#EEE',
				'main-black': '#0A0A0A'
			},
			animation: {
				patternMove: 'patternMove 4s linear infinite',
				rotateMenu: 'rotateMenu 400ms ease-in-out forwards'
			},
			keyframes: {
				patternMove: {
					'0%': {
						"background-position": "0px"
					},
					'100%': {
						"background-position": "128px"
					}
				},
				rotateMenu: {
					'0%': {
						transform: 'rotateX(-90deg)'
					},
					'70%': {
						transform: 'rotateX(20deg)'
					},
					'100%': {
						transform: 'rotateX(0deg)'
					}
				}
			}
		},
	},
	plugins: [
		plugin(function ({ addUtilities }) {
			addUtilities({
				'.font-condensed': {
					'font-stretch': 'condensed'
				}
			})
		})
	],
}