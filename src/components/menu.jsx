import { Turn as Hamburger } from "hamburger-react";
import Link from "./Link";
import SocialMediaLink from "./socialMediaLink";
import { FaFacebookF } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { useStore } from "@nanostores/react";
import { menuToggle } from "../Store";

export const MenuIcon = () => {
  const toggle = useStore(menuToggle);

  return (
    <Hamburger
      toggled={toggle}
      toggle={() => menuToggle.set(!toggle)}
      onToggle={() => menuToggle.set(!toggle)}
    />
  );
};

export const Menu = () => {
  const className = "py-4 w-full pl-3 border-b  border-b-Code";
  const toggle = useStore(menuToggle);

  return (
    <div
      className={`lg:hidden w-full absolute duration-500 ${toggle ? "top-[3rem]" : "top-[-50rem]"}`}
    >
      <div className="grid grid-rows-14 w-full h-[95vh] ">
        <Link to="." label="_hello" className={`${className}`} />
        <Link to="./about" label="_about-me" className={`${className}`} />
        <Link to="./projects" label="_projects" className={`${className}`} />
        <Link to="./contacts" label="_contacts" className={`${className}`} />
        <div className="bg-background row-span-9"></div>
        <div className="grid grid-cols-8 bg-Code gap-[1px] py-[1px] h-[3rem]">
          <p className="bg-background col-span-5 flex items-center pl-[0.5rem]">
            find me in:
          </p>
          <SocialMediaLink
            to="https://www.facebook.com/profile.php?id=100060985816360"
            className=" col-span-1"
            icon={<FaFacebookF />}
          />
          <SocialMediaLink
            to="https://www.linkedin.com/in/eyad-ahmed-13382a273/"
            className=" col-span-1"
            icon={<FaLinkedin />}
          />
          <SocialMediaLink
            to="https://github.com/Eyadfezex"
            className=" col-span-1"
            icon={<FaGithub />}
          />
        </div>
      </div>
    </div>
  );
};
