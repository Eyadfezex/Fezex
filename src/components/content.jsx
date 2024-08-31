import green from "../../public/green.png";
import blue from "../../public/blue.png";
import { useGSAP } from "@gsap/react";
import { useStore } from "@nanostores/react";
import { bio, name, position } from "../Store";
import gsap from "gsap";
import codeStyle from "../codeStyle";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

const ContentJson = () => {
  useGSAP(() => {
    gsap.from(`#light1`, { scale: 0, duration: 0.8, opacity: 0, delay: 1.8 });
    gsap.from(`#code`, { y: -100, duration: 1, opacity: 0, delay: 1.8 });
  });
  const isName = useStore(name);
  const isPosition = useStore(position);
  const isBio = useStore(bio);

  const code = `const content = {
  name:"${isName}",

  jobTitle:"${isPosition}",
  
  skills: ['javascript', 'react', 'css'],
  
  bio: "${isBio}"
  }`;
  return (
    <div className="w-[50%] xl:w-[35%] relative hidden lg:block">
      <img
        id="light1"
        src={green.src}
        alt="green"
        className="absolute scale-150"
      />
      <img
        id="light1"
        src={blue.src}
        alt="blue"
        className="absolute top-[-10rem] scale-150 left-[-10rem]"
      />
      <div
        id="code"
        className="bg-background block relative border border-Code/20 rounded-xl max-w-[700px] text-wrap overflow-hidden"
      >
        <SyntaxHighlighter
          language="javascript"
          lineProps={{
            style: { wordBreak: "break-all", whiteSpace: "pre-wrap" },
          }}
          wrapLines={true}
          style={codeStyle}
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default ContentJson;
