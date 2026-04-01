"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#042117]/75 backdrop-blur-md text-white py-8 border-t border-ndsu-gold/20">
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

          {/* Quick Links */}
          <div>
            <h3 className="text-ndsu-gold font-bold text-xl mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="hover:text-ndsu-gold transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/research"
                  className="hover:text-ndsu-gold transition-colors"
                >
                  Research
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="hover:text-ndsu-gold transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/team"
                  className="hover:text-ndsu-gold transition-colors"
                >
                  Team
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-ndsu-gold transition-colors"
                >
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
              Official contact links and social media will be added soon.
            </p>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-6 text-center text-white/90">
          <p>
            &copy; {new Date().getFullYear()} Pires Lab, North Dakota State
            University. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}