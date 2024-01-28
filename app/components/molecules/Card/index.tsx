import Link from "next/link";
import Paragraf from "@/app/components/atoms/Paragraf";
import Heading from "@/app/components/atoms/Heading";
import clsx from "clsx";

const Card = ({
  className,
  url,
  title,
  description,
  variant,
}: {
  className?: string;
  url: string;
  title: string;
  description: string;
  variant: string;
}) => {
  const variants = {
    "border-t border-gray-100 hover:bg-gray-200 duration-300":
      variant === "CardOne",
  };

  const classes = clsx(variants, className);

  return (
    <Link href={url} className={classes}>
      <Heading variant="h3">{title}</Heading>
      <Paragraf className="leading-6 mt-1 sm:mt-2">
        {description ?? "No description"}
      </Paragraf>
    </Link>
  );
};

export default Card;
