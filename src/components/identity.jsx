import { useStore } from "@nanostores/react";
import { bio, name, position } from "../Store";
import green from "../../public/green.png";
import blue from "../../public/blue.png";

const Identity = () => {
  const isName = useStore(name);
  const isPosition = useStore(position);
  const isBio = useStore(bio);
  return (
    <div className="text-white font-fira w-[100%] md:w-[60%] lg:w-[40%] xl:w-[30%] relative">
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
        <p className="capitalize text-[#43D9AD] lg:text-at text-[20px] lg:text-[32px]">
          &gt; {isPosition}
        </p>
        <br />
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
