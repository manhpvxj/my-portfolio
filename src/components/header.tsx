"use client";
import { cn } from "@/lib/utils";
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
        "justify-center bg-white fixed py-4 flex w-full border-b md:justify-between select-none font-light md:px-16 translate-y-0 transition-all duration-300",
        {
          " z-10 mx-auto w-[90%] md:w-[80%] lg:w-[60%] border rounded-lg translate-y-6 lg:translate-x-[calc(100vw_*_0.2)] md:translate-x-[calc(100vw_*_0.1)] translate-x-[calc(100vw_*_0.05)]":
            show,
          "py-4 pt-6 lg:py-6": !show,
        }
      )}
    >
      <Link
        href={"/"}
        className="hidden md:block text-2xl font-bold hover:text-gray-600"
      >
        Pham Manh
      </Link>
      <div className="nav-links flex gap-x-8 text-xs md:text-base justify-center items-center">
        {links.map((link) => (
          <span
            key={link}
            className="cursor-pointer text-base font-medium"
            onClick={() => {
              document
                .getElementById(link.toLowerCase())
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            {link}
          </span>
        ))}
      </div>
    </nav>
  );
};

export default Header;
