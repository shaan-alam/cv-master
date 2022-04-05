interface Props {
  title: string;
  type: string;
  id: string;
  className?: string;
  placeholder?: string;
}

const FormInput = ({ title, type, id, className, placeholder }: Props) => {
  return (
    <>
      <label htmlFor="fullName" className="text-gray-600 font-montserrat text-sm">{title}</label>
      <input
        type={type}
        id={id}
        className={`mt-3 px-4 py-2 bg-gray-200 rounded-md transition-all focus:ring-1 focus:ring-primary w-full font-montserrat ${className}`}
      />
    </>
  );
};

export default FormInput;
