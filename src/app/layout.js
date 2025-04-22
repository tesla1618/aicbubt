import { Armata } from "next/font/google";
import "./globals.css";

const armata = Armata({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

export const metadata = {
  title: "AI Community, BUBT",
  description: "AI Community, BUBT",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en" className="white">
      <body
        suppressHydrationWarning={true}
        className={`${armata.className} antialiased white`}
      >
        {children}
      </body>
    </html>
  );
}
