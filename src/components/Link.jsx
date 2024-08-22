const Link = ({ to, label, className = "" }) => {
  return (
    <a
      href={to}
      className={`col-span-1 before:w-0 hover:before:w-full hover:text-white text-Code text-center bg-background flex items-center before:bg-btn before:h-0.5 before:absolute before:bottom-0 before:left-0 relative  duration-150 before:duration-300  ${className}`}
    >
      {label}
    </a>
  );
};

export default Link;
