import "./globals.css";
import Navigation from "@/components/navigation";
import SessionWrapper from "@/components/SessionWrapper";
import { Plus_Jakarta_Sans } from "next/font/google";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "PlayZone",
  description: "Book your sport courts and enjoy games with friends.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className="min-h-screen flex flex-col bg-[#F4F7FB]"
        style={jakarta.style}
      >
        <SessionWrapper>
          <nav>
            <Navigation />
          </nav>
          <main className="text-[#1A2540] flex-1">{children}</main>
          <footer className="text-center py-5 text-[#94A3B8] text-sm border-t border-[#D6E2F0] bg-white">
            © 2026 PlayZone. All rights reserved.
          </footer>
        </SessionWrapper>
      </body>
    </html>
  );
}
