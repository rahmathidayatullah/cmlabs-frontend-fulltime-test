const Paragraf = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <p
      className={`text-sm text-gray-700 whitespace-pre-wrap line-clamp-5 truncate ${className}`}
    >
      {children}
    </p>
  );
};

export default Paragraf;
