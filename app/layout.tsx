import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Nav from "./components/nav";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "900"],
});

export const metadata: Metadata = {
  title: "The Absolute best pomodoro timer",
  description: "The best pomodoro timer you can find on the internet",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased bg-primary-500`}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
