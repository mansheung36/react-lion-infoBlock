import React from "react";
import { useState } from "react";
import TextBlock from "./TextBlock";
import FaqBlock from "./FAQBlock";
import IconBlock from "./IconBlock";

interface I_infoData {
    infoData: {
        earliestPurchaseDate: string;
        flashDiscount: string;
        remindTag: {
            type: string;
            text: string;
        }[];
        infoDetail: {
            item: string;
            title: string;
            content: any;
            precautions: string;
        }[];
    };
}

const InfoContainer: React.FC<I_infoData> = ({ infoData }) => {
    const { earliestPurchaseDate, flashDiscount, remindTag, infoDetail } =
        infoData;

    const [scrollTop, setScrollTop] = useState(0);

    const handleScroll = (event: any) => {
        setScrollTop(event.currentTarget.scrollTop);
    };

    return (
        <div
            className="relative bg-[#f5f5f5] w-[400px] m-auto my-10 border-[20px] border-[#f5f5f5] border-solid h-[500px] overflow-auto"
            onScroll={handleScroll}
        >
            {/* 頂部漸層區塊 */}
            {scrollTop > 0 ? (
                <div className="sticky top-0 h-[100px] bg-gradient-to-b from-[#f5f5f5] to-transparent z-10"></div>
            ) : null}

            <div className="w-full absolute top-0">
                <div className="border-b border-[#DDDDDD] border-solid">
                    <div className="text-lg font-bold pb-2">關於此方案</div>
                    <div className="text-xs text-[#444444] pb-2">
                        最早可使用日期：{earliestPurchaseDate}
                    </div>
                    <div className="text-sm text-[#FF7238] pb-2">
                        {flashDiscount}
                    </div>
                </div>

                <IconBlock />
                <TextBlock
                    title={infoDetail[0].title}
                    content={infoDetail[0].content}
                ></TextBlock>
                <TextBlock
                    title={infoDetail[1].title}
                    content={infoDetail[1].content}
                ></TextBlock>
                <TextBlock
                    title={infoDetail[2].title}
                    content={infoDetail[2].content}
                ></TextBlock>
                <TextBlock
                    title={infoDetail[3].title}
                    content={infoDetail[3].content}
                ></TextBlock>
                <TextBlock
                    title={infoDetail[4].title}
                    content={infoDetail[4].content.map((item: string) => (
                        <div>{item}</div>
                    ))}
                    // <div>
                    //     <div className="">
                    //         所選日期 5 天（含）之前取消，收取手續費 0%
                    //         <br />
                    //         所選日期 2 ~ 4 天之間取消，收取手續費 50%
                    //         <br />
                    //         所選日期 0 ~ 1 天之間取消，收取手續費 100%
                    //     </div>

                    //     <div className="text-xs text-[#666666] mt-3">
                    //         注意：由於站內商品來自全球各地，訂單取消時間將依該供應商所在時區判定。供應商需
                    //         2-5
                    //         個工作天進行取消流程，依照您購買的商品取消政策收取手續費，並於取消流程完成後14
                    //         個工作天內退款。
                    //     </div>
                    // </div>
                ></TextBlock>
                <TextBlock
                    title={infoDetail[5].title}
                    content={<FaqBlock infoData={infoData}/>}
                ></TextBlock>

                {/* 底部漸層區塊 */}
                <div className="sticky bottom-0 right-0 width-[440px] h-[100px] bg-gradient-to-b from-transparent to-[#f5f5f5]"></div>
            </div>
        </div>
    );
};

export default InfoContainer;
