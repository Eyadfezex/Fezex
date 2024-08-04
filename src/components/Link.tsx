interface PROPS {
  to: string;
  label: string;
}

const Link = ({ to, label }: PROPS) => {
  const path = window.location.pathname;
  return (
    <a
      href={to}
      className={`col-span-1 hover:text-white text-Code text-center bg-background py-2 after:bg-btn after:h-0.5 after:absolute after:bottom-0 after:left-0 relative  after:hover:w-full duration-150 after:duration-300 ${path.match(to) ? "text-white after:w-full" : "after:w-0"} `}
    >
      {label}
    </a>
  );
};

export default Link;
