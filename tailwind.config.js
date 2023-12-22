/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  // mode: 'jit',
  theme: {
    extend: {
      fontFamily: {
        Lato: "Lato",
        Roboto: "Roboto",
        Oswald: "Oswald",
      },
      colors:{
        lighten: '#F5F7FA',
        sidebarBg: "#303840",
        sidebarSubMenuBg: "#272C33",
        menuItemColor:'#8A9199',
        menuItemTitle:'#949799',
        menuDropdownBg:'#272C33',
      },
      dropShadow: {
          1: '0px 1px 0px #E2E8F0',
          2: '0px 1px 4px rgba(0, 0, 0, 0.12)',
      },
      boxShadow: {
        default: '0px 8px 13px -3px rgba(0, 0, 0, 0.07)',
      }
    },
  },
  plugins: [import ("tailwind-scrollbar")],
}
