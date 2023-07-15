import React from "react";
import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { Heading } from "./SubComponents";
import { faqData } from "../Data/faqData";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}
export default function Faq() {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <>
      <div className="space-y-3 py-12">
        <Heading text="FAQ" />

        {faqData.map(({ id, que, ans }) => (
          <FaqSubComp
            handleOpen={handleOpen}
            open={open}
            id={id}
            que={que}
            ans={ans}
          />
        ))}
      </div>
    </>
  );
}

export const FaqSubComp = ({ handleOpen, open, que, ans, id }) => {
  return (
    <Accordion open={open === id} icon={<Icon id={id} open={open} />} key={id}>
      <AccordionHeader onClick={() => handleOpen(id)}>{que}</AccordionHeader>
      <AccordionBody className="text-base font-normal">{ans}</AccordionBody>
    </Accordion>
  );
};
