import type { Metadata } from "next";
import { Inter, Raleway } from "next/font/google";
import "./globals.css";

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
      <body className={railway.className}>
        <div className="open1">
          <div className="layer"></div>
          <div className="layer"></div>
        </div>
        {children}
      </body>
    </html>
  );
}
