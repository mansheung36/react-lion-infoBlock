import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";

interface I_infoData {
    infoData: {
        infoDetail: {
            item: string;
            title: string;
            content: any;
            precautions: string;
        }[];
    };
}

const FaqBlock: React.FC<I_infoData> = ({ infoData }) => {
    const [showAnswer, setShowAnswer] = useState(
        Array(infoData.infoDetail[5].content.length).fill(false)
    );

    const toggleShowAnswer = (index: number) => {
        const updatedShowAnswer = [...showAnswer];
        updatedShowAnswer[index] = !updatedShowAnswer[index];
        setShowAnswer(updatedShowAnswer);
    };

    return (
        <div>
            {infoData.infoDetail[5].content.map((item:any, index:number) => (
                <div key={index} className="py-2">
                    <div
                        onClick={() => toggleShowAnswer(index)}
                        className="cursor-pointer"
                    >
                        {showAnswer[index] ? (
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
                        {` ` + item.faqtitle}
                    </div>
                    {showAnswer[index] ? (
                        <div className="text-[13px] bg-white py-3 px-3 ml-4 mt-1 rounded-[3px] border-l-[3px] border-[#3EA5D9]">
                            {item.faqcontent}
                        </div>
                    ) : (
                        ""
                    )}
                </div>
            ))}
        </div>
    );
};

export default FaqBlock;
