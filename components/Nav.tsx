"use client";

import Image from 'next/image';

export default function Nav() {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const element = document.getElementById(e.currentTarget.hash.replace('#',''));
    if (element) {
      const top = element.offsetTop;
      window.scrollTo({
        top,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="bg-gray-200 dark:bg-gray-700 flex justify-center fixed top-0 z-10 w-full shadow">
      <div className="container mx-auto p-4 flex justify-between">
        <Image src="/logo.png" alt="logo" width="30" height="30" className="h-10 w-auto" />

        <ul className="flex justify-between">
          <li className="mr-4">
              <a href="#about" onClick={handleLinkClick}>About</a>
          </li>
          <li className="mr-4">
              <a href="#advantages" onClick={handleLinkClick}>Advantages</a>
          </li>
          <li className="mr-4">
              <a href="#prices" onClick={handleLinkClick}>Prices</a>
          </li>
          <li className="mr-4">
              <a href="#contact-us" onClick={handleLinkClick}>Contact Us</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

