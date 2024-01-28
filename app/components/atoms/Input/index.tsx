import { ChangeEvent } from "react";

const Input = ({
  value,
  onChange,
  placeholderName,
}: {
  value?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholderName: string | undefined;
}) => {
  return (
    <input
      value={value}
      onChange={onChange}
      type="text"
      name="search"
      id="search"
      className="block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      placeholder={`Find your ${placeholderName}`}
    />
  );
};

export default Input;
