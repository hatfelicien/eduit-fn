// tailwind.config.ts
import type { Config } from "tailwindcss"

const config: Config = {
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#060b2e",
          DEFAULT: "#1e40af", // brand
          light: "#60a5fa", // light shade
          dark: "#1e3a8a", // dark shade
        },
        primary: "#4f46e5",
        secondary: "#ec4899",
      },
    },
  },
  plugins: [],
}
export default config
