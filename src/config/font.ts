import {Inter, Merriweather, Libre_Baskerville} from "next/font/google";

export const merriweather = Merriweather({
    subsets: ["latin"],
    variable: "--font-merriweather",
    display: "swap",
});

export const libreBaskerville = Libre_Baskerville({
    subsets: ["latin"],
    variable: "--font-libreBaskerville",
    display: "swap",
});

export const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
})