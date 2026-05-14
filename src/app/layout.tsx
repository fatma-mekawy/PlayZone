import Logo from "@/components/Logo";
import "./globals.css";
import Navigation from "@/components/navigation";
import {Roboto_Slab} from "next/font/google";

const robotoSlab = Roboto_Slab({
  subsets : ["latin"],
  weight : "400"
})
console.log(robotoSlab)

//META DATA
export const metadata = {
  title: "PlayZone",
  description: "A Place to book your sport courts and enjoy your games with your friends",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-full flex flex-col bg-[#182430]" style={robotoSlab.style}>
        <nav> 
            {/* <Logo/> */}
            <Navigation/>
        </nav>
        <main className="text-white">{children}</main>
        </body>
    </html>
  );
}
