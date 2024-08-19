import { useStore } from "@nanostores/react";
import { useState } from "react";
import { bio, name, position } from "../Store";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import green from "../../public/green.png";
import blue from "../../public/blue.png";
import { TypeAnimation } from "react-type-animation";
const Identity = () => {
  useGSAP(() => {
    gsap.from("#identity", { opacity: 0, y: 100, duration: 1, delay: 1.8 });
    gsap.from(`#light`, { scale: 0, duration: 0.8, opacity: 0, delay: 1.8 });
  });
  const [start, setStart] = useState(false);
  setTimeout(() => {
    setStart(true);
  }, 3000);
  const isName = useStore(name);
  const isPosition = useStore(position);
  const isBio = useStore(bio);

  return (
    <div
      id="identity"
      className="text-white font-fira w-[100%] md:w-[60%] lg:w-[40%] xl:w-[30%] relative"
    >
      <img
        src={green.src}
        alt="green"
        id="light"
        className="absolute w-[30rem] scale-150 top-[-2rem] lg:hidden"
      />
      <img
        src={blue.src}
        alt="blue"
        id="light"
        className="absolute w-[30rem] scale-150 top-[-7rem] left-[-7rem] lg:hidden"
      />
      <div className="relative">
        <p className="capitalize text-[18px]">hi all. i am </p>
        <p className="capitalize text-[62px]">{isName}</p>
        <p className=" text-[#43D9AD] lg:text-at capitalize text-[20px] lg:text-[32px] ">
          &gt;
          {start && (
            <TypeAnimation
              sequence={[`${isPosition}`]}
              wrapper="span"
              speed={2}
              cursor="true"
            />
          )}
        </p>
        <br />
        <p className="text-Code">
          /* <br />
          {isBio}
          <br />
          */
        </p>
      </div>
    </div>
  );
};

export default Identity;
