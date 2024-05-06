import Link from "next/link";

const Header = () => {
  const links = ["About", "Skills", "Contact"];

  return (
    <nav className="justify-center py-2 flex w-full select-none pt-6 font-light md:px-28 md:pb-2">
      <div className="container flex flex-col items-center justify-between md:flex-row">
        <Link href={"/"} className="text-5xl drop-shadow-2xl">
          Pham Manh
        </Link>
        <div className="nav-links flex gap-x-8 text-xs md:text-base">
          {links.map((link) => (
            <span
              key={link}
              className="cursor-pointer"
              onClick={() => {
                document
                  .getElementById(link)
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              {link}
            </span>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Header;
