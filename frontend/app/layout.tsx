import Navbar from '@/app/Components/Navbar';
import './globals.css';
import type { Metadata } from 'next';
import Footer from '@/app/Components/Footer';
import Galaxy from '@/app/Components/Galaxy';
// Adjust the path if needed

export const metadata: Metadata = {
  title: 'Portfolio | Gaurav Kumar',
  description: 'A portfolio showcasing my work and skills as a web developer.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="relative bg-gradient-to-bl from-gray-900 to-gray-800 text-white overflow-x-hidden">

        {/* Galaxy Background (behind everything) */}
        {/* <div className="absolute inset-0 -z-10">
          <Galaxy
            mouseRepulsion={true}
            mouseInteraction={true}
            density={1.2}
            glowIntensity={0.5}
            saturation={0.8}
            hueShift={240}
            twinkleIntensity={0.4}
            rotationSpeed={0.05}
            repulsionStrength={2}
            autoCenterRepulsion={0}
            transparent={true}
          />
        </div> */}

        {/* Main content */}
        <Navbar />
        <main>{children}</main>
        <Footer />

      </body>
    </html>
  );
}
