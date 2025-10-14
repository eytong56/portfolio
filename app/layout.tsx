import type { Metadata } from "next";
import "./globals.css";
import Header from "@/app/ui/header";
import Footer from "@/app/ui/footer";
import { gothic_a1 } from "./ui/fonts";

export const metadata: Metadata = {
  title: "Emma Tong",
  description: "Emma Tong Portfolio Site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${gothic_a1.className} ${gothic_a1.className} antialiased`}
      >
        <div className="w-full flex flex-col items-center px-8 sm:px-12">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
