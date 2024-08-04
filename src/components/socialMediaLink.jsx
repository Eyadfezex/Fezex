const SocialMediaLink = ({ icon, to }) => {
  return (
    <a
      href={to}
      target="_blank"
      rel="noopener noreferrer"
      className="col-span-1 bg-background flex justify-center items-center hover:text-white duration-200"
    >
      {icon}
    </a>
  );
};

export default SocialMediaLink;
