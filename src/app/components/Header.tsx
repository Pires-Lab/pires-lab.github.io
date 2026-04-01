"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-[#042117]/80 backdrop-blur-md text-white py-3 border-b border-purdue-gold/60">
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <div className="relative h-[72px] w-[300px] md:h-[78px] md:w-[320px] lg:h-[84px] lg:w-[340px]">
                <Image
                  src="/lab-logo-horizontal.png"
                  alt="Pires Lab Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 font-heading">
            <Link href="/" className="hover:text-purdue-gold transition-colors">
              Home
            </Link>
            <Link
              href="/research"
              className="hover:text-purdue-gold transition-colors"
            >
              Research
            </Link>
            <Link
              href="/projects"
              className="hover:text-purdue-gold transition-colors"
            >
              Projects
            </Link>
            <Link
              href="/team"
              className="hover:text-purdue-gold transition-colors"
            >
              Team
            </Link>
            <Link
              href="/about"
              className="hover:text-purdue-gold transition-colors"
            >
              About
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 space-y-3 pb-3 font-heading">
            <Link
              href="/"
              className="block hover:text-purdue-gold transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/research"
              className="block hover:text-purdue-gold transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Research
            </Link>
            <Link
              href="/projects"
              className="block hover:text-purdue-gold transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Projects
            </Link>
            <Link
              href="/team"
              className="block hover:text-purdue-gold transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Team
            </Link>
            <Link
              href="/about"
              className="block hover:text-purdue-gold transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}