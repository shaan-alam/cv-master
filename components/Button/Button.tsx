interface Props
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  className?: string;
  text?: string;
  variant?: "primary" | "secondary";
}

const Button = ({ className, onClick, children, variant }: Props) => {
  const variants = {
    primary: "bg-primary text-white",
    secondary: "bg-gray-200 text-gray-600",
  };

  return (
    <button
      onClick={onClick}
      className={`rounded-md shadow-md font-montserrat font-regular px-4 py-2 text-sm ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
