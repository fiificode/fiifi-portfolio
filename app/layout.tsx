import type { Metadata } from "next";
import { Inter, Raleway } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import Loader from "@/components/loader/Loader";
import { cn } from "@/lib/utils";

// const inter = Inter({ subsets: ["latin"] });
const railway = Raleway({
  weight: ["100", "200", "300", "400", "500", "700", "800", "900"],
  subsets: ["cyrillic"],
});

export const metadata: Metadata = {
  title: "Franklin Mensah | Portfolio",
  description: "FrontEnd Software Developer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn(railway)}>
        <Loader />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
