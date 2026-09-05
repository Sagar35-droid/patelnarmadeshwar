import React, { useState } from 'react';
import { useRouter } from '../../context/RouterContext';
import { BUSINESS_CONFIG } from '../../config/businessConfig';
import { Menu, X, Sparkles, Phone, MapPin, MessageCircle } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { currentPath, navigate } = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Guides', path: '/blog' },
    { name: 'Enquiry', path: '/enquiry' },
    { name: 'Contact', path: '/contact' },
  ];

  const handleNavClick = (path: string) => {
    navigate(path);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#C5A059]/20 shadow-xs">
      {/* Top Announcement Bar */}
      <div className="bg-blue-600 text-white text-[11px] py-1.5 px-4 font-medium border-b border-blue-700/30">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-white animate-pulse" />
            <span className="tracking-wide text-white">{BUSINESS_CONFIG.announcementText}</span>
          </div>
          <div className="hidden md:flex items-center gap-4 text-white">
            <span className="flex items-center gap-1 text-white">
              <MapPin className="w-3 h-3 text-white" /> Bakawan, MP
            </span>
            <span className="flex items-center gap-1 text-white">
              <Phone className="w-3 h-3 text-white" /> {BUSINESS_CONFIG.phoneDisplay}
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Brand Name */}
          <div 
            onClick={() => handleNavClick('/')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-10 h-10 bg-[#C5A059] rounded-full flex items-center justify-center text-white font-serif italic text-xl shadow-md group-hover:scale-105 transition-transform shrink-0">
              S
            </div>
            <div>
              <span className="text-xl font-serif font-bold tracking-tight text-[#1A1A1A] block group-hover:text-[#C5A059] transition-colors leading-none">
                {BUSINESS_CONFIG.name}
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium uppercase tracking-widest md:ml-6">
            {navLinks.map((link) => {
              const isActive =
                link.path === '/'
                  ? currentPath === '/'
                  : currentPath.startsWith(link.path);

              return (
                <a
                  key={link.path}
                  href={link.path}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.path);
                  }}
                  className={`py-1 text-xs font-semibold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'text-[#C5A059] border-b-2 border-[#C5A059]'
                      : 'text-[#2D2D2D] hover:text-[#C5A059]'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action Button (WhatsApp Order) */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={`https://wa.me/${BUSINESS_CONFIG.whatsappNumber}?text=${encodeURIComponent('Namaste, mujhe Sagar Narmadeshwar Shivling order karna hai.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#25D366] hover:bg-[#128C7E] text-white transition-all text-xs font-bold shadow-xs"
              title="Chat & Order on WhatsApp"
            >
              <MessageCircle className="w-4 h-4 fill-white shrink-0" />
              <span>WhatsApp Order</span>
            </a>
          </div>

          {/* Mobile Actions */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={`https://wa.me/${BUSINESS_CONFIG.whatsappNumber}?text=${encodeURIComponent('Namaste, mujhe Sagar Narmadeshwar Shivling order karna hai.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-white bg-[#25D366] hover:bg-[#128C7E] rounded-full shadow-xs flex items-center justify-center"
              title="Order on WhatsApp"
              aria-label="Order on WhatsApp"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#1A1A1A] hover:bg-[#F3EFE9] rounded-lg transition-colors cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FCFAF7] border-b border-[#C5A059]/20 px-4 pt-2 pb-6 space-y-2 shadow-xl animate-fadeIn">
          {navLinks.map((link) => {
            const isActive =
              link.path === '/'
                ? currentPath === '/'
                : currentPath.startsWith(link.path);

            return (
              <a
                key={link.path}
                href={link.path}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.path);
                }}
                className={`w-full text-left px-4 py-3 rounded-xl text-xs uppercase tracking-widest font-bold flex items-center justify-between block ${
                  isActive
                    ? 'bg-[#F3EFE9] text-[#C5A059] border-l-4 border-[#C5A059]'
                    : 'text-[#2D2D2D] hover:bg-[#F3EFE9]'
                }`}
              >
                <span>{link.name}</span>
                {isActive && <span className="text-[#C5A059] text-[10px]">Active</span>}
              </a>
            );
          })}
        </div>
      )}
    </header>
  );
};

