'use client';

import useScrollStore from '@/store/ScrollStore';
import { useEffect, useState } from 'react';

export default function Header() {
  // const [scrolled, setScrolled] = useState(false);
  const { scrolled, setScrolled } = useScrollStore();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 z-40 flex w-full items-center justify-center transition-all duration-500 ease-in-out ${
        scrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <nav
        className="flex w-full max-w-7xl items-center justify-between gap-x-6 p-6 xl:px-0"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a className="-m-1.5 p-1.5" href="#">
            <span className="sr-only">Your Company</span>
            <img
              className="h-8 w-auto"
              src="https://aico.tv/images/logo/aico_event_logo.svg"
              alt=""
            />
          </a>
        </div>
        <div className="flex flex-1 items-center justify-end gap-x-1 sm:gap-x-3">
          <a
            className="rounded-full px-4 py-2 text-xs font-bold text-[#27274F] hover:opacity-80 sm:text-base lg:block"
            href="https://blog.aico.tv/tag/ko/"
          >
            블로그
          </a>
          <a
            className="whitespace-nowrap rounded-full border border-secondary100 px-4 py-2 text-xs font-bold text-secondary-100 visited:text-secondary-100 hover:opacity-90 sm:px-6 sm:py-2.5 sm:text-base lg:block"
            href="/signin"
          >
            로그인
          </a>
        </div>
      </nav>
    </header>
  );
}
