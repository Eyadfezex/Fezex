const Link = ({ to, label, className = "" }) => {
  const path = window.location.pathname;

  return (
    <a
      href={to}
      class={`col-span-1 hover:text-white text-Code text-center bg-background flex justify-center items-center after:bg-btn after:h-0.5 after:absolute after:bottom-0 after:left-0 relative  after:hover:w-full duration-150 after:duration-300 ${path.match(to) ? "text-white after:w-full" : "after:w-0"} ${className} `}
    >
      {label}
    </a>
  );
};

export default Link;
