import green from "../../public/green.png";
import blue from "../../public/blue.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import react from "../../public/react-svgrepo-com.svg";
import Gsap from "../../public/gsap-greensock.svg";
import Astro from "../../public/astro-svgrepo-com.svg";
import Ts from "../../public/logo-ts-svgrepo-com.svg";
import Tw from "../../public/tailwind-svgrepo-com.svg";
import Sb from "../../public/storybook-icon-svgrepo-com.svg";
import next from "../../public/next-js.svg";
const ContentJson = () => {
  useGSAP(() => {
    gsap.from(`#light1`, { scale: 0, duration: 0.8, opacity: 0, delay: 1.5 });
    gsap.from(`#code`, { y: -100, duration: 1, opacity: 0, delay: 1.5 });
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
        className="absolute top-[-10rem] scale-150 left-[-10rem]"
      />

      <div id="code" className="rounded-full w-[80%] overflow-hidden relative">
        <div className="absolute w-full h-full bg-white opacity-10 backdrop-blur-lg"></div>
        <ul className=" border-teal-600 rounded-full border-4 p-[4rem] gap-[32px] relative justify-center flex flex-wrap ">
          <li>
            <a
              href=""
              target="_blank
"
            >
              <img src={react.src} className="w-[5rem]" alt="react" />
            </a>
          </li>
          <li>
            <a
              href=""
              target="_blank
"
            >
              <img src={next.src} className="w-[5rem]" alt="next" />
            </a>
          </li>
          <li>
            <a
              href=""
              target="_blank
"
            >
              <img src={Astro.src} className="w-[5rem]" alt="astro" />
            </a>
          </li>
          <li>
            <a
              href=""
              target="_blank
"
            >
              <img src={Gsap.src} className="w-[5rem]" alt="Gsap" />
            </a>
          </li>
          <li>
            <a
              href=""
              target="_blank
"
            >
              <img src={Ts.src} className="w-[5rem]" alt="Ts" />
            </a>
          </li>
          <li>
            <a
              href=""
              target="_blank
"
            >
              <img src={Tw.src} className="w-[5rem]" alt="Tw" />
            </a>
          </li>
          <li>
            <a
              href=""
              target="_blank
"
            >
              <img src={Sb.src} className="w-[5rem]" alt="Sb" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ContentJson;
