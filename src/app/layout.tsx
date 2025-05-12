import './globals.css';  // Importing global styles to apply across the entire app
import Header from '../../components/Header'; // `Importing the Header component for the top navigation bar
import Footer from '../../components/Footer';// Importing the Footer component for the bottom navigation bar
import { ReactNode } from 'react'; // Importing ReactNode type for typing the children prop

export default function RootLayout({ children }: { children: ReactNode }) {    //  Defining the RootLayout component
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main> 
        <Footer />
      </body>
    </html>
  );
}
