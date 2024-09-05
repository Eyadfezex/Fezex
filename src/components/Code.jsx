import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { codeStyle } from "../index";
import { aboutContent } from "../Store";
import { useEffect, useState } from "react";
import { useStore } from "@nanostores/react";
import { aboutSectionState } from "../Store";
const Code = () => {
  const contentState = useStore(aboutSectionState);
  const [codeContent, setCodeContent] = useState("");
  useEffect(() => {
    const code = aboutContent.find((section) => section.id === contentState);
    setCodeContent(code ? code.content : "");
    console.log(code);
  }, [contentState]);

  return (
    <div className="grid grid-rows-20 h-full bg-Code gap-[1px] font-fira">
      <div className="row-span-1 bg-background grid grid-cols-6">
        <p className="flex col-span-2 items-center pl-3 text-Code border-r border-r-Code">
          personal-info
        </p>
      </div>
      <div className="row-span-19 bg-background">
        <SyntaxHighlighter
          wrapLines={true}
          lineProps={{
            style: { wordBreak: "break-all", whiteSpace: "pre-wrap" },
          }}
          language="javascript"
          style={codeStyle}
          showLineNumbers={true}
        >
          {codeContent}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default Code;
