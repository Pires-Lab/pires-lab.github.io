"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [soilDropdownOpen, setSoilDropdownOpen] = useState(false);

  return (
    <header className="bg-[#042117]/80 backdrop-blur-md text-white py-3 border-b border-ndsu-gold/60 relative z-50">
      <div className="container-custom">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <div className="relative h-[72px] w-[300px] md:h-[78px] md:w-[320px] lg:h-[84px] lg:w-[340px]">
                <Image src="/lab-logo-horizontal.png" alt="Pires Lab Logo" fill className="object-contain" priority />
              </div>
            </Link>
          </div>

          {/* Navegação Desktop */}
          <nav className="hidden md:flex items-center space-x-6 font-heading">
            <Link href="/" className="hover:text-ndsu-gold transition-colors">Home</Link>
            <Link href="/research" className="hover:text-ndsu-gold transition-colors">Research & Projects</Link>
            <Link href="/extension" className="hover:text-ndsu-gold transition-colors">Extension</Link>
            
            {/* Dropdown Soil Health */}
            <div 
              className="relative"
              onMouseEnter={() => setSoilDropdownOpen(true)}
              onMouseLeave={() => setSoilDropdownOpen(false)}
            >
              <div className="flex items-center">
                <Link href="/soil-health" className="hover:text-ndsu-gold transition-colors">
                  Soil Health
                </Link>
                <button className="ml-1 hover:text-ndsu-gold transition-colors">▾</button>
              </div>

              {soilDropdownOpen && (
                <div className="absolute top-full left-0 bg-[#042117] border border-ndsu-gold/30 rounded-lg py-2 w-64 shadow-xl">
                  <Link 
                    href="/cover-crops" 
                    className="block px-4 py-2 hover:bg-ndsu-gold/20 hover:text-ndsu-gold transition-colors"
                  >
                    Cover Crops
                  </Link>
                  <Link 
                    href="/soil-health/indicators" 
                    className="block px-4 py-2 hover:bg-ndsu-gold/20 hover:text-ndsu-gold transition-colors"
                  >
                    Soil Health Indicators
                  </Link>
                </div>
              )}
            </div>

            <Link href="/team" className="hover:text-ndsu-gold transition-colors">Team</Link>
            <Link href="/about" className="hover:text-ndsu-gold transition-colors">About</Link>
          </nav>

          {/* Botão do Menu Mobile */}
          <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
             <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>
             </svg>
          </button>
        </div>

        {/* Navegação Mobile */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 space-y-3 pb-3 font-heading border-t border-ndsu-gold/20 pt-4">
            <Link href="/" className="block hover:text-ndsu-gold" onClick={() => setMobileMenuOpen(false)}>Home</Link>
            <Link href="/research" className="block hover:text-ndsu-gold" onClick={() => setMobileMenuOpen(false)}>Research & Projects</Link>
            <Link href="/extension" className="block hover:text-ndsu-gold" onClick={() => setMobileMenuOpen(false)}>Extension</Link>
            <Link href="/soil-health" className="block hover:text-ndsu-gold" onClick={() => setMobileMenuOpen(false)}>Soil Health (Principles)</Link>
            <Link href="/cover-crops" className="block hover:text-ndsu-gold" onClick={() => setMobileMenuOpen(false)}>Cover Crops DB</Link>
            <Link href="/soil-health/indicators" className="block text-ndsu-gold font-bold" onClick={() => setMobileMenuOpen(false)}>Soil Health Indicators</Link>
            <Link href="/team" className="block hover:text-ndsu-gold" onClick={() => setMobileMenuOpen(false)}>Team</Link>
            <Link href="/about" className="block hover:text-ndsu-gold" onClick={() => setMobileMenuOpen(false)}>About</Link>
          </nav>
        )}
      </div>
    </header>
  );
}