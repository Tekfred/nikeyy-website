const Button = ({ label, iconUrl }) => {
  return (
    <button className="flex items-center justify-between gap-4 text-lg leading-none text-white border rounded-full cursor-pointer h-15 padding-x font-montserrat bg-coral-red border-coral-red">
      {label}

      {iconUrl && (
        <img
          src={iconUrl}
          alt="arrow right icon"
          className="w-5 h-5 ml-2 rounded-full"
        />
      )}
    </button>
  );
};

export default Button;
