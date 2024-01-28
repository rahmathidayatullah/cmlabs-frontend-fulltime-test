import Link from "next/link";
import Heading from "@/app/components/atoms/Heading";
import clsx from "clsx";
import Image from "next/image";

const CardLinkWithImage = ({
  className,
  url,
  title,
  variant,
  img,
  alt,
}: {
  className?: string;
  url: string;
  title: string;
  variant: string;
  img: string;
  alt: string;
}) => {
  const variants = {
    "group relative border-b border-r border-gray-200": variant === "cardOne",
    "group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white":
      variant === "cardTwo",
  };

  const classes = clsx(variants, className);

  if (variant === "cardOne") {
    return (
      <Link href={url} className={classes}>
        <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-200 group-hover:opacity-75">
          <Image
            src={img}
            alt={alt}
            width={100}
            height={200}
            className="h-full w-full object-cover object-center"
          />
        </div>
        <div className="pb-4 pt-10 text-center">
          <Heading variant="h3">
            <span aria-hidden="true" className="absolute inset-0" />
            {title}
          </Heading>
        </div>
      </Link>
    );
  }
  return (
    <Link href={url} className={classes}>
      <div className="relative aspect-h-4 aspect-w-3 bg-gray-200 sm:aspect-none group-hover:opacity-75 sm:h-96">
        <Image
          src={img}
          alt={alt}
          width={100}
          height={200}
          className="h-full w-full object-cover object-center sm:h-full sm:w-full"
        />
        <div className="absolute left-0 bottom-0 right-0 p-3 text-white bg-black bg-opacity-20">
          {title}
        </div>
      </div>
    </Link>
  );
};

export default CardLinkWithImage;
