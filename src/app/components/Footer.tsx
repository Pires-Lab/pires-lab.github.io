"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#042117]/90 backdrop-blur-md text-white py-12 border-t border-ndsu-gold/30">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Lab Information */}
          <div>
            <h3 className="text-ndsu-gold font-bold text-xl mb-4">
              Our Location
            </h3>
            <div className="not-italic space-y-1 text-white/95">
              <p>Pires Lab</p>
              <p>Walster Hall, Lab 135</p>
              <p>North Dakota State University</p>
              <p>Fargo, ND</p>
            </div>
          </div>

          {/* Quick Links (Agora em 2 colunas) */}
          <div>
            <h3 className="text-ndsu-gold font-bold text-xl mb-4">
              Quick Links
            </h3>
            <ul className="grid grid-cols-2 gap-y-2 gap-x-4">
              <li>
                <Link href="/" className="hover:text-ndsu-gold transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/research" className="hover:text-ndsu-gold transition-colors">
                  Research
                </Link>
              </li>
              <li>
                <Link href="/extension" className="hover:text-ndsu-gold transition-colors">
                  Extension
                </Link>
              </li>
              <li>
                <Link href="/soil-health" className="hover:text-ndsu-gold transition-colors">
                  Soil Health
                </Link>
              </li>
              <li>
                <Link href="/cover-crops" className="hover:text-ndsu-gold transition-colors">
                  Cover Crops
                </Link>
              </li>
              <li>
                <Link href="/team" className="hover:text-ndsu-gold transition-colors">
                  Team
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-ndsu-gold transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact / Social */}
          <div>
            <h3 className="text-ndsu-gold font-bold text-xl mb-4">
              Connect With Us
            </h3>
            <p className="text-white/95 mb-4">
              Follow the Pires Lab for updates on our latest research, field days, and extension materials.
            </p>
            <div className="space-y-2 text-white/95">
              <p>
                Email: <a href="mailto:carlos.pires@ndsu.edu" className="hover:text-ndsu-gold transition-colors underline decoration-ndsu-gold/50 underline-offset-4">carlos.pires@ndsu.edu</a>
              </p>
              {/* Espaço para futuras redes sociais */}
              {/* <p>Twitter: <a href="#" className="hover:text-ndsu-gold transition-colors">@PiresLab</a></p> */}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-700/50 pt-8 text-center text-white/80 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Pires Lab, North Dakota State
            University. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}