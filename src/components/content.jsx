import { useStore } from "@nanostores/react";
import { bio, name, position } from "../Store";
import green from "../../public/green.png";
import blue from "../../public/blue.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
const ContentJson = () => {
  const isName = useStore(name);
  const isPosition = useStore(position);
  const isBio = useStore(bio);
  useGSAP(() => {
    gsap.from(`#light1`, { scale: 0, duration: 0.8, opacity: 0, delay: 0.8 });
    gsap.from(`#code`, { y: -100, duration: 1, opacity: 0, delay: 0.8 });
  });
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
        className="absolute top-[-10rem] scale-150 left-[-15rem]"
      />
      <div id="code" className="rounded-lg bg-Cbg p-[1em] relative w-[70%] ">
        <p className="text-Code font-fira">
          <span>
            <span className="text-var">const </span>
            <span className="text-at">button </span>
            <span className="text-var">= </span>
            <span className="text-at">document</span>
            <span className="text-Code">.</span>
            <span className="text-at">querySelector</span>
            <span className="text-Code">
              (<span className="text-btn">'#saveBtn'</span>)
            </span>
          </span>
          <br />
          <br />
          <span>
            <span className="text-var">const </span>
            <span className="text-at">identity </span>
            <span className="text-var">= </span>
            <span className="text-Code">
              &#123;
              <br />
              <span className="text-Code">
                &nbsp;
                <span>
                  <span className="text-at">name</span> :
                  <span className=" capitalize text-btn"> "{isName}"</span>
                </span>
                ,
                <br />
                &nbsp;
                <span>
                  <span className="text-at">position</span> :
                  <span className=" capitalize text-btn"> "{isPosition}"</span>
                </span>
                ,
                <br />
                &nbsp;
                <span>
                  <span className="text-at">bio</span> :
                  <span className=" capitalize text-btn"> "{isBio}"</span>
                </span>
                ,
              </span>
              <br /> &#125;
            </span>
          </span>
        </p>
      </div>
    </div>
  );
};

export default ContentJson;
