// import type { Config } from "tailwindcss";

// export default {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// } satisfies Config;

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
