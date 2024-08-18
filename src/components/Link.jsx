const Link = ({ to, label, className = "" }) => {
  const path = window.location.pathname;
  return (
    <a
      href={to}
      className={`col-span-1 w-full hover:before:w-full hover:text-white text-Code text-center bg-background flex justify-center items-center before:bg-btn before:h-0.5 before:absolute before:bottom-0 before:left-0 relative  duration-150 before:duration-300 ${path.match(to) ? "text-white before:w-full" : "before:w-0"} ${className}`}
    >
      {label}
    </a>
  );
};

export default Link;
