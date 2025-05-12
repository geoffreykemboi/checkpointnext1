// Importing the Image component from Next.js for optimized image rendering
import Image from "next/image";

// Importing the Link component from Next.js for client-side navigation
import Link from "next/link";

// Default exported functional component for the Home Page
export default function HomePage() {
  return (
    <div>
      {/* Page Title */}
      <h1>Home Page</h1>

      {/* Navigation Links */}
      <nav>
        {/* Link to About Page */}
        <Link href="/about">Go to About</Link>                 
      </nav>

      <nav>
        {/* Link to Contact Page */}
        <Link href="/contact">Go to Contacts</Link>                   
      </nav>

      <nav>
        {/* Link to Projects Page */}
        <Link href="/projects">Go to Projects</Link>           
      </nav>

      {/* Displaying an Image using Next.js <Image> component */}
      <Image 
        src="/images/mount.jpg"   // Path to the image file in the public directory
        alt="Mountain"            // Descriptive alt text for accessibility
        width={400}               // Width of the image in pixels
        height={300}              // Height of the image in pixels
        priority                  // Loads image with high priority (useful for above-the-fold content)
      />
    </div>
  );
}