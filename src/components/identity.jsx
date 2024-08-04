import { TypeAnimation } from "react-type-animation";

const Identity = ({ name, job }) => {
  return (
    <div className=" w-[30%] mb-[5rem]">
      <TypeAnimation
        sequence={[`Hi all. I am`]}
        wrapper="p"
        style={{ whiteSpace: "pre-line", fontFamily: "fira", color: "white" }}
        deletionSpeed={3}
      />
      <TypeAnimation
        sequence={[`${name}`]}
        wrapper="p"
        style={{
          whiteSpace: "pre-line",
          fontSize: 62,
          color: "white",
          fontFamily: "fira",
        }}
        deletionSpeed={3}
      />
      <TypeAnimation
        sequence={[`>  ${job}`]}
        wrapper="p"
        style={{
          whiteSpace: "pre-line",
          fontFamily: "fira",
          color: "#4D5BCE",
          fontSize: "32px",
          fontWeight: "700",
        }}
        deletionSpeed={3}
      />
      <p></p>
    </div>
  );
};

export default Identity;
