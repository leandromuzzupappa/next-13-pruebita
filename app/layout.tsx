import "../styles/globals.css";
import { Navigation } from "../components/Navigation";
import { Space_Grotesk } from "@next/font/google";

const font = Space_Grotesk({
  styles: ["normal"],
  weights: ["400", "700"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body className={font.className}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
