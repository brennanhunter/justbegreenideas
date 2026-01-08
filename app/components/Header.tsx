'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null);

  const toggleMenu = (menu: string) => {
    setExpandedMenu(expandedMenu === menu ? null : menu);
  };

  return (
    <header className="relative h-20 z-50">
      {/* White background */}
      <div className="absolute inset-0 bg-white overflow-hidden" style={{ clipPath: 'polygon(0 0, 70% 0, 60% 100%, 0 100%)' }}></div>
      
      {/* Gray background */}
      <div className="absolute inset-0 bg-gray-200 overflow-hidden" style={{ clipPath: 'polygon(60% 100%, 70% 0, 100% 0, 100% 100%)' }}></div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-between px-8 z-10">
        <Image
          src="/logos/logo.png"
          alt="Logo"
          width={150}
          height={60}
          className="h-auto"
        />
        
        <nav className="flex gap-8">
          {/* Enterprise Menu */}
          <div className="relative">
            <button
              onClick={() => toggleMenu('enterprise')}
              className="text-gray-800 font-bold text-sm uppercase hover:text-gray-600 transition-colors tracking-wide"
            >
              ENTERPRISE
            </button>
            {expandedMenu === 'enterprise' && (
              <div className="absolute top-full right-0 mt-2 bg-white shadow-lg rounded-lg p-4 min-w-[200px] z-[100]">
                <div className="block w-full px-4 py-2 text-gray-600 hover:bg-gray-100 rounded cursor-default">
                  Coming Soon
                </div>
                <div className="block w-full px-4 py-2 text-gray-600 hover:bg-gray-100 rounded cursor-default">
                  Coming Soon
                </div>
                <div className="block w-full px-4 py-2 text-gray-600 hover:bg-gray-100 rounded cursor-default">
                  Coming Soon
                </div>
              </div>
            )}
          </div>

          {/* Industries Menu */}
          <div className="relative">
            <button
              onClick={() => toggleMenu('industries')}
              className="text-gray-800 font-bold text-sm uppercase hover:text-gray-600 transition-colors tracking-wide"
            >
              INDUSTRIES
            </button>
            {expandedMenu === 'industries' && (
              <div className="absolute top-full right-0 mt-2 bg-white shadow-lg rounded-lg p-4 min-w-[200px] z-[100]">
                <div className="block w-full px-4 py-2 text-gray-600 hover:bg-gray-100 rounded cursor-default">
                  Coming Soon
                </div>
                <div className="block w-full px-4 py-2 text-gray-600 hover:bg-gray-100 rounded cursor-default">
                  Coming Soon
                </div>
                <div className="block w-full px-4 py-2 text-gray-600 hover:bg-gray-100 rounded cursor-default">
                  Coming Soon
                </div>
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}
