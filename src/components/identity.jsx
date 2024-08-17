import { useStore } from "@nanostores/react";
import { bio, name, position } from "../Store";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import green from "../../public/green.png";
import blue from "../../public/blue.png";
import { TypeAnimation } from "react-type-animation";
const Identity = () => {
  useGSAP(() => {
    gsap.from("#identity", { y: 100, duration: 1 });
  });
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
        className="absolute w-[30rem] top-[-2rem] lg:hidden"
      />
      <img
        src={blue.src}
        alt="blue"
        className="absolute w-[30rem] top-[-7rem] left-[-7rem] lg:hidden"
      />
      <div className="relative">
        <p className="capitalize text-[18px]">hi all. i am </p>
        <p className="capitalize text-[62px]">{isName}</p>
        <p className="lg:text-at capitalize text-[20px] lg:text-[32px] ">
          &gt;
          <TypeAnimation
            sequence={[`${isPosition}`, 100]}
            wrapper="span"
            speed={2}
            cursor="true"
          />
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
