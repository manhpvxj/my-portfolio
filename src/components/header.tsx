"use client";
import clsx from "clsx";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useWindowScroll } from "react-use";

const Header = () => {
  const links = ["About", "Skills", "Contact"];
  const { y } = useWindowScroll();
  const [show, setShow] = useState(false);
  useEffect(() => {
    y > 150 ? setShow(true) : setShow(false);
  }, [y]);

  return (
    <nav
      className={clsx(
        "justify-center bg-white fixed py-4 flex border-b md:justify-between select-none font-light md:px-16 translate-y-0 transition-all duration-300 right-1/2 translate-x-1/2",
        {
          "z-10 w-[80%] border rounded-lg translate-y-6": show,
          "py-4 w-full pt-6 lg:py-6": !show,
        }
      )}
    >
      <Link
        href={"/"}
        className="hidden md:block text-2xl font-bold hover:text-gray-600"
      >
        Pham Manh
      </Link>
      <div className="nav-links flex gap-x-8 text-xs md:text-base justify-between items-center">
        {links.map((link) => (
          <p
            key={link}
            className="cursor-pointer text-base font-medium text-sm md:text-base"
            onClick={() => {
              document
                .getElementById(link.toLowerCase())
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            {link}
          </p>
        ))}
      </div>
    </nav>
  );
};

export default Header;
