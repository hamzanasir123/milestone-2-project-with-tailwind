
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import "./globals.css";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
