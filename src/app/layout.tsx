import type { Metadata, Viewport } from "next";
import { Inter, Kanit, Roboto } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({ weight: "400", subsets: ["latin"] });
const kanit = Kanit({ weight: "700", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Driver Cat | $DAT",
  description: "Driver Cat $DAT is drifting through solana.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${kanit.className} ${inter.className}`}>
        {children}
      </body>
    </html>
  );
}
