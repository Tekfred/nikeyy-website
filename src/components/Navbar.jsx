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
    <header className="absolute z-20 w-full py-8 padding-x">
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
        <div className="p-6 mt-4 bg-white border rounded-3xl shadow-3xl border-pale-blue">
          <div className="flex items-center justify-between pb-4 mb-2 border-b border-pale-blue">
            <p className="text-sm font-semibold tracking-wide uppercase font-palanquin text-slate-gray">
              Menu
            </p>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center w-8 h-8 text-lg leading-none rounded-full bg-pale-blue text-slate-gray"
            >
              &times;
            </button>
          </div>

          <ul className="flex flex-col gap-1">
            {navLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 text-lg transition-colors rounded-xl font-montserrat text-slate-gray hover:bg-pale-blue hover:text-coral-red"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
