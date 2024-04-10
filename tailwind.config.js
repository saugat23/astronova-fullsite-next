/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
import {nextui} from "@nextui-org/react";

module.exports = {
  darkMode: "class",
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      fontFamily: {
        "inter" : ["var(--font-inter)"],
        "opensans" : ["var(--font-opensans)"],
        "montserrat" : ["var(--font-montserrat)"],
        "lato" : ["var(--font-lato)"],
        "ibmplex" : ["var(--font-ibmplex)"],
        "poppins" : ["var(--font-poppins)"],
        "kumbhsans" : ["var(--font-kumbhsans)"],
        "roboto" : ["var(--font-roboto)"],
        "tinos" : ["var(--font-tinos)"],
      },
    },
    screens: {
      xs: "320px",
      ...defaultTheme.screens,
    },
  },
  plugins: [require("tailwindcss-animate"), nextui()],
}