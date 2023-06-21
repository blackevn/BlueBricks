/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // backgroundImage: {
      //   'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      //   'gradient-conic':
      //     'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      // },
    },
  },
  rippleui: {

		themes: [
			{
				themeName: "light",
				colorScheme: "light",
				colors: {
          primary: "#573242",
					backgroundPrimary: "#1a1a1a",
					
				},
			},
			{
				themeName: "dark",
				colorScheme: "dark",
				colors: {
          primary: "#235264",
					backgroundPrimary: "#964643",
				},
			},
		],
	},

  plugins: [require("rippleui")],
}
