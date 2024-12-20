"use client";
import clsx from "clsx";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useWindowScroll } from "react-use";
import { Button } from "./ui/button";
import { ScrollProgress } from "./ui/scroll-progress";

const Header = () => {
  const links = ["About", "Skills", "Contact"];
  // const { y } = useWindowScroll();
  // const [show, setShow] = useState(false);
  // useEffect(() => {
  //   y > 150 ? setShow(true) : setShow(false);
  // }, [y]);

  return (
    <nav
      className={clsx(
        "w-full z-10 justify-center bg-white fixed py-2 pt-4 border-b lg:py-5 flex md:justify-between select-none font-light md:px-16 translate-y-0 transition-all duration-300 right-1/2 translate-x-1/2"
        // {
        //   "z-10 w-[80%] border rounded-lg translate-y-6": show,
        //   "w-full": !show,
        // }
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
          <Button
            key={link}
            className="cursor-pointer font-medium text-sm md:text-base hover:bg-transparent p-0"
            variant={"ghost"}
            onClick={() => {
              document
                .getElementById(link.toLowerCase())
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            {link}
          </Button>
        ))}
      </div>
      <ScrollProgress className="top-[60px] lg:top-[77px]" />
    </nav>
  );
};

export default Header;
