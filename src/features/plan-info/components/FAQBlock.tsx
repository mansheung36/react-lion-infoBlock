import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import type { I_FAQData, I_infoDetail } from "./PlanInfo";
import ContentContainer from "./ContentContainer";

type I_FAQDetail = I_infoDetail<I_FAQData[]>;

const FaqBlock = ({ data }: { data: I_FAQDetail }) => {
    const { content, title } = data;

    const FAQContent = content.map((item) => (
        <FAQ key={item.faqtitle} {...item} />
    ));

    return <ContentContainer title={title} content={FAQContent} />;
};

const FAQ = ({ faqtitle, faqcontent }: I_FAQData) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => setIsOpen((prevState) => !prevState);

    return (
        <div className="py-2">
            <div onClick={toggleOpen} className="cursor-pointer">
                {isOpen ? (
                    <FontAwesomeIcon
                        icon={faArrowUp}
                        style={{ color: "#3EA5D9" }}
                    />
                ) : (
                    <FontAwesomeIcon
                        icon={faArrowDown}
                        style={{ color: "#3EA5D9" }}
                    />
                )}
                {` ` + faqtitle}
            </div>
            {isOpen && (
                <div className="text-[13px] bg-white py-3 px-3 ml-4 mt-1 rounded-[3px] border-l-[3px] border-[#3EA5D9]">
                    {faqcontent}
                </div>
            )}
        </div>
    );
};

export default FaqBlock;
