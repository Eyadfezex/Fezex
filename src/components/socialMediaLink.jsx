const SocialMediaLink = ({ icon, to, className = "" }) => {
  return (
    <a
      href={to}
      target="_blank"
      rel="noopener noreferrer"
      className={`${className} bg-background flex justify-center items-center hover:text-white duration-200`}
    >
      {icon}
    </a>
  );
};

export default SocialMediaLink;
