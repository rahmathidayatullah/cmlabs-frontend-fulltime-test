"use client";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import Input from "@/app/components/atoms/Input";

const Search = ({ search }: { search?: string }) => {
  const router = useRouter();
  const [text, setText] = useState(search);
  const [query] = useDebounce(text, 500);

  const pathname = usePathname();

  let resultString;

  // Using substring
  if (pathname.startsWith("/")) {
    resultString = pathname.substring(1);
  }

  useEffect(() => {
    if (!query) {
      router.push(pathname);
    } else {
      router.push(`${pathname}?search=${query}`);
    }
  }, [pathname, router, query, text]);

  return (
    <div className="relative mt-2 rounded-md shadow-sm">
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
        <MagnifyingGlassIcon
          className="h-5 w-5 text-gray-400"
          aria-hidden="true"
        />
      </div>
      <Input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholderName={resultString}
      />
    </div>
  );
};

export default Search;
