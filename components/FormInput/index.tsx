import React from "react";

interface Props {
  title: string;
  type: string;
  id: string;
  className?: string;
  onChange?: (e: React.SyntheticEvent) => void;
}

const FormInput = ({
  title,
  type,
  id,
  className,
  onChange,
}: Props) => {
  return (
    <>
      <label
        htmlFor="fullName"
        className="text-gray-600 font-montserrat text-sm mt-4 block"
      >
        {title}
      </label>
      <input
        onChange={onChange}
        type={type}
        id={id}
        className={`mt-1 px-4 py-2 bg-gray-200 rounded-md transition-all focus:ring-1 focus:ring-primary w-full font-montserrat ${className}`}
      />
    </>
  );
};

export default FormInput;
