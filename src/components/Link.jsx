const Link = ({ ...props }) => {
  const path = window.location.pathname;
  return (
    <a
      href={props.to}
      className={`col-span-1 hover:text-white text-Code text-center bg-background flex justify-center items-center after:bg-btn after:h-0.5 after:absolute after:bottom-0 after:left-0 relative  after:hover:w-full duration-150 after:duration-300 ${path.match(props.to) ? "text-white after:w-full" : "after:w-0"} `}
    >
      {props.label}
    </a>
  );
};

export default Link;
