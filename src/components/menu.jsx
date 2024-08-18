import { Turn as Hamburger } from "hamburger-react";

import { useState } from "react";
const Menu = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <Hamburger toggled={toggle} toggle={setToggle} />
    </>
  );
};

export default Menu;
