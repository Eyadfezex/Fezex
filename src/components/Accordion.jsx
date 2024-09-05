import { FaFolder } from "react-icons/fa6";

const Accordion = ({ order, color, heading, Children }) => {
  return (
    <div>
      <h2 id={`accordion-collapse-heading-${order}`}>
        <button
          type="button"
          className="flex items-center w-full gap-3 font-medium bg-background text-Code"
          data-accordion-target={`#accordion-collapse-body-${order}`}
          aria-controls={`accordion-collapse-body-${order}`}
        >
          <svg
            data-accordion-icon
            className="w-3 h-3 rotate-180 shrink-0"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5 5 1 1 5"
            />
          </svg>
          <div className={`flex items-center gap-2`}>
            <FaFolder className={`${color}`} />
            <span className="text-Code">{heading}</span>
          </div>
        </button>
      </h2>
      <div
        id={`accordion-collapse-body-${order}`}
        className="hidden"
        aria-labelledby={`accordion-collapse-heading-${order}`}
      >
        <div>{Children}</div>
      </div>
    </div>
  );
};

export default Accordion;
