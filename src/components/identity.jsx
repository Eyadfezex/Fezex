import { useStore } from "@nanostores/react";
import { bio, name, position } from "../Store";

const Identity = () => {
  const isName = useStore(name);
  const isPosition = useStore(position);
  const isBio = useStore(bio);
  return (
    <div className="text-white font-fira w-[60%] lg:w-[40%] xl:w-[30%]">
      <p className="capitalize text-[18px]">hi all. i am </p>
      <p className="capitalize text-[62px]">{isName}</p>
      <p className="capitalize text-at text-[32px]">&gt; {isPosition}</p>
      <br />
      <br />
      <p className="text-Code">
        /* <br />
        {isBio}
        <br />
        */
      </p>
    </div>
  );
};

export default Identity;
