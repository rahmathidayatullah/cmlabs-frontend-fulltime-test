"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { navigation } from "@/app/constants";
import DialogSide from "@/app/components/molecules/Dialog";
import Link from "next/link";

const Header = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="absolute inset-x-0 top-0 z-50 border border-b">
      <nav
        className="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/ingredients" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <h1 className="text-xl font-bold">LOGO</h1>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item: any) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-sm font-semibold leading-6  hover:text-blue-600 duration-200 ${
                pathname === item.href ? "text-blue-600" : "text-gray-900"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </nav>
      <DialogSide
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        setMobileMenuOpen={() => setMobileMenuOpen(false)}
      />
    </header>
  );
};

export default Header;
