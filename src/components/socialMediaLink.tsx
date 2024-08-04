interface SocialMediaLinkProps {
  icon: React.ReactNode;
  to: string;
}
const SocialMediaLink = ({ icon, to }: SocialMediaLinkProps) => {
  return (
    <a
      href={to}
      target="_blank"
      rel="noopener noreferrer"
      className=" col-span-1 bg-background flex justify-center items-center"
    >
      {icon}
    </a>
  );
};

export default SocialMediaLink;
