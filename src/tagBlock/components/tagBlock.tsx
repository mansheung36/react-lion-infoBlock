import React from "react";
import { useState } from "react";
import data from "../../json/data.json";

function TagBlock() {

    const relatedData: string[] = [];
    data.forEach((type) => relatedData.push(type.TypeName));

    const [showMore, setShowMore] = useState(false);
    const toggleShowMore = () => setShowMore((show) => !show);

    return (
        <div className="flex w-[1190px] m-auto my-10 h-[37px]">
            <div className="flex-none font-bold text-sm pr-2 pt-2">
                相關分類
            </div>
            {showMore ? (
                <div className="">
                    {relatedData.map((tag) => (
                        <div className="border-[1px] border-solid border-[#BBBBBB] rounded-full px-2 py-1 m-1 inline-flex font-normal text-[13px]">
                            {tag}
                        </div>
                    ))}
                </div>
            ) : (
                <div className="whitespace-nowrap overflow-hidden">
                    {relatedData.map((tag) => (
                        <div className="border-[1px] border-solid border-[#BBBBBB] rounded-full px-2 py-1 m-1 inline-flex font-normal text-[13px]">
                            {tag}
                        </div>
                    ))}
                </div>
            )}
            <div
                className="flex-none border-l-[1px] border-[#DDDDDD] pl-2 pt-2 cursor-pointer text-[#3EA5D9] font-bold text-sm"
                onClick={toggleShowMore}
            >
                {showMore ? `顯示較少` : `顯示全部`}
            </div>
        </div>
    );
}

export default TagBlock;
