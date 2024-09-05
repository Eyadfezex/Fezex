import Accordion from "./Accordion";
import { FaMarkdown } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { aboutSectionState } from "../Store";
import { useStore } from "@nanostores/react";
const File = ({ name, id }) => {
  const handleClick = () => {
    aboutSectionState.set(id);
  };

  return (
    <div
      className="flex items-center gap-3 pl-8 pt-1 cursor-pointer"
      onClick={handleClick}
    >
      <FaMarkdown />
      <p>{name}</p>
    </div>
  );
};

const FileStructure = () => {
  return (
    <div className="bg-Code col-span-5 row-span-18 grid grid-rows-20 gap-[1px] font-fira text-Code ">
      <div className="row-span-1 bg-background flex items-center pl-3">
        <p className="text-white">personal-info</p>
      </div>
      <div className="row-span-8 bg-background pt-3">
        <div
          id="accordion-collapse"
          data-accordion="collapse"
          className="pl-3 flex flex-col gap-1"
        >
          <Accordion
            order="1"
            color="text-btn"
            heading="bio"
            Children={
              <>
                <File name={"about me"} id="about" />
                <File name={"skills"} id="skills" />
              </>
            }
          />
          <Accordion
            order="2"
            color="text-[#43D9AD]"
            heading="interests"
            Children={
              <>
                <File name={"hobbies"} id="hobbies" />
              </>
            }
          />
          <Accordion
            order="3"
            color="text-at"
            heading="education"
            Children={
              <>
                <File name={"education"} id="education" />
              </>
            }
          />
        </div>
      </div>
      <div className="row-span-1 bg-background flex items-center pl-3">
        <p className="text-white">contacts</p>
      </div>
      <div className="row-span-10 bg-background  flex flex-col gap-3 pt-3">
        <div className="flex w-full items-center flex-wrap  pl-3 gap-3 ">
          <IoMdMail />
          <p>Eyad932004@outlook.com</p>
        </div>
        <div className="flex w-full items-center  pl-3 gap-3 ">
          <IoCall />
          <p>+201030736987</p>
        </div>
      </div>
    </div>
  );
};

export default FileStructure;
