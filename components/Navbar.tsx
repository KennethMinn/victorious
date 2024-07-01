"use client";

import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();

  const links = [
    {
      id: 1,
      title: "Home",
      href: "/",
    },
    {
      id: 2,
      title: "About Us",
      href: "/about",
    },
    {
      id: 3,
      title: "Services",
      href: "/services",
    },
    {
      id: 4,
      title: "Videos",
      href: "/videos",
    },
    {
      id: 5,
      title: "Contact",
      href: "/contact",
    },
  ];
  return (
    <nav className=" px-[104px] h-[80px] flex items-center">
      <Image
        onClick={() => router.push("/")}
        src={logo}
        alt="logo"
        className=" mr-[664px] cursor-pointer w-[108px] h-[68px]"
      />
      <div className=" flex items-center gap-x-10">
        {links.map((link) => (
          <Link
            href={link.href}
            key={link.id}
            className={classNames({
              "text-[#3F1F38] text-[20px]": true,
              "border border-[#3F1F38] p-2 rounded-md border-dashed":
                pathname === link.href,
            })}
          >
            {link.title}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
