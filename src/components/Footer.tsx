import SocialMediaLink from "./socialMediaLink";
import { FaFacebookF } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

interface PROPS {
  label: string;
}
const Footer = ({ label }: PROPS) => {
  return (
    <footer className="bg-Code grid grid-cols-12 w-full text-Code font-fira gap-[1px] py-[1px]">
      <p className="bg-background py-2 pl-[22px]">{label}</p>
      <SocialMediaLink
        to="https://www.facebook.com/profile.php?id=100060985816360"
        icon={<FaFacebookF />}
      />
      <SocialMediaLink
        to="https://www.linkedin.com/in/eyad-ahmed-13382a273/"
        icon={<FaLinkedin />}
      />
      <SocialMediaLink
        to="https://www.instagram.com/eyad_ahmed_550/"
        icon={<FaInstagram />}
      />
      <div className="bg-background col-span-7"></div>
      <a
        href="https://github.com/Eyadfezex"
        target="_blank"
        rel="noopener noreferrer"
        className=" col-span-1 bg-background flex justify-center items-center gap-1 hover:text-white duration-200"
      >
        <p>@Eyadfezex</p>
        <FaGithub />
      </a>
    </footer>
  );
};

export default Footer;
