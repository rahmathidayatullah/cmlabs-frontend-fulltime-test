import clsx from "clsx";

const Heading = ({
  children,
  variant,
  classesName,
}: {
  children: React.ReactNode;
  variant: string;
  classesName?: string;
}) => {
  const variants = {
    "text-center text-2xl mb-10": variant === "h1",
    "text-base font-semibold leading-7 text-gray-900": variant === "h2",
    "text-sm font-medium text-gray-900": variant === "h3",
  };

  const classes = clsx(variants, classesName);

  return <h1 className={classes}>{children}</h1>;
};

export default Heading;
