import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useLayoutEffect(() => {
    if (!dropdownRef.current) return;

    if (isOpen) {
      gsap.to(dropdownRef.current, {
        height: "auto",
        opacity: 1,
        duration: 0.9,
        ease: "power3.out",
      });
    } else {
      gsap.to(dropdownRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.6,
        ease: "power3.in",
      });
    }
  }, [isOpen]);

  return (
    <header className="absolute z-10 w-full py-8 padding-x">
      <nav className="flex items-center justify-between max-container">
        <a href="/">
          <img src={headerLogo} alt="logo" width={120} height={29} />
        </a>

        <ul className="flex items-center justify-center flex-1 gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="text-lg leading-normal font-montserrat text-slate-gray"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          className="hidden cursor-pointer max-lg:block"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <img src={hamburger} width={25} height={25} alt="" />
        </button>
      </nav>

      <div
        ref={dropdownRef}
        className="hidden h-0 overflow-hidden opacity-0 max-lg:block max-container"
      >
        <ul className="flex flex-col items-start gap-6 px-8 py-8 mt-4 bg-white/55 backdrop-blur-2xl border border-white/70 rounded-2xl shadow-[0_8px_32px_rgba(31,38,135,0.12)]">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-lg leading-normal transition-colors font-montserrat text-slate-gray hover:text-coral-red"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
