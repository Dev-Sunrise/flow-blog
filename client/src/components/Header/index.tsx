"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import avatar from "/public/avatar.jpg";
import logo from "/public/logo.png";

const links = [
  {
    id: 1,
    title: "Home",
    href: "/",
  },
  {
    id: 2,
    title: "Blog",
    href: "/blog",
  },
];

const Header = () => {
  const pathName = usePathname();

  return (
    <header className="shadow-primaryShadow">
      <div className="page-container w-full h-[50px] flex items-center justify-between">
        <Link href={"/"}>
          <Image src={logo} width={85} alt="Logo"></Image>
        </Link>

        <ul className="flex items-center gap-x-5">
          {links.map((link) => (
            <li key={link.id}>
              <Link
                href={link.href}
                className={`font-bold text-lg ${
                  pathName === link.href ? "text-primaryColor" : ""
                }`}
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>

        <div className="rounded-full border w-[32px] p-1 overflow-hidden border-primaryColor cursor-pointer">
          <Image src={avatar} alt="Logo"></Image>
        </div>
      </div>
    </header>
  );
};

export default Header;
