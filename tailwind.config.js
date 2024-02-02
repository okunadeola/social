/** @type {import('tailwindcss').Config} */
import scrollbar from "tailwind-scrollbar"
import animate from "tailwindcss-animate"
import defaultTheme  from 'tailwindcss/defaultTheme'

export default {
  darkMode: ["class"],
  // darkMode: 'class',
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        Lato: "Lato",
        Roboto: "Roboto",
        Oswald: "Oswald",
      },
      colors: {
        mainColor: '#058ac9',
        bgLightColor: '#edf7fa',
        textLight: '#a4cee9',
        "main-text-color": '#66778c',
        "post-react-color": '#fbfdfe',
        inputLight: '#3296cf',
        xinputLight: '#edf7fc',
        bgDarkColor: '#242f43',
        cardDarkColor: '#112032',

        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      screens: {
    
        'xlg': '1662px',
        'xxl': '1350px',
        'xm': '1400px',
        'sz': '1200px',
        // => @media (min-width: 1440px) { ... }

      // 'md': '850px',
      // 'xs': '350px',
      ...defaultTheme.screens
    },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      dropShadow: {
        1: '0px 1px 0px #E2E8F0',
        2: '0px 1px 4px rgba(0, 0, 0, 0.12)',
    },
    boxShadow: {
      default: '0px 8px 13px -3px rgba(0, 0, 0, 0.07)',
    },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [animate, scrollbar],
}



// /** @type {import('tailwindcss').Config} */
// import scrollbar from "tailwind-scrollbar"
// import defaultTheme  from 'tailwindcss/defaultTheme'

// export default {
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   darkMode: 'class',
//   // mode: 'jit',
//   theme: {
//     extend: {
//       fontFamily: {
//         Lato: "Lato",
//         Roboto: "Roboto",
//         Oswald: "Oswald",
//       },
//       colors:{

//         mainColor: '#058ac9',
//         bgLightColor: '#ebf5f8',
//         textLight: '#a4cee9',
//         inputLight: '#3296cf',
//         bgDarkColor: '#242f43',
//         cardDarkColor: '#112032',


//         sidebarBg: "#303840",
//         sidebarSubMenuBg: "#272C33",
//         menuItemColor:'#8A9199',
//         menuItemTitle:'#949799',
//         menuDropdownBg:'#272C33',
//         scrollbarColor:'#7D8084',
//         btnColor:'#00BCC2',
//       },
//       screens: {
    
//           'xlg': '1662px',
//           'xxl': '1350px',
//           'xm': '1400px',
//           'sz': '1200px',
//           // => @media (min-width: 1440px) { ... }

//         // 'md': '850px',
//         // 'xs': '350px',
//         ...defaultTheme.screens
//       },
//       dropShadow: {
//           1: '0px 1px 0px #E2E8F0',
//           2: '0px 1px 4px rgba(0, 0, 0, 0.12)',
//       },
//       boxShadow: {
//         default: '0px 8px 13px -3px rgba(0, 0, 0, 0.07)',
//       }
//     },
//   },
//   plugins: [scrollbar],
// }