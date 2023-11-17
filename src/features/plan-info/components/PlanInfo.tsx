import React from "react";
import Container from "./Container";
import IconBlock from "./IconBlock";
import ContentContainer from "./ContentContainer";
import FaqBlock from "./FAQBlock";

interface I_infoData {
    infoData: {
        earliestPurchaseDate: string;
        flashDiscount: string;
        remindTag: {
            type: string;
            text: string;
        }[];
        infoDetail: I_infoDetail<string | string[] | I_FAQData[]>[];
    };
}

export interface I_infoDetail<ContentType> {
    item: string;
    title: string;
    content: ContentType;
    precautions: string;
}

export interface I_FAQData {
    faqtitle: string;
    faqcontent: string;
}

export default function InfoBlock({ infoData }: I_infoData) {
    const { earliestPurchaseDate, flashDiscount, remindTag, infoDetail } =
        infoData;

    const renderContent = (
        detailData: I_infoDetail<string | string[] | I_FAQData[]>[]
    ) => {
        const objArrContent = ["常見問題"];
        const objArrStrContent = ["取消政策"];

        return detailData.map((item) => {
            if (objArrContent.includes(item.title)) {
                return <FaqBlock data={item as I_infoDetail<I_FAQData[]>} />;
            }

            if (objArrStrContent.includes(item.title)) {
                return (
                    <ContentContainer
                        title={item.title}
                        content={
                            Array.isArray(item.content)
                                ? item.content.map((item) =>
                                      typeof item === "string" ? (
                                          <div key={item}>{item}</div>
                                      ) : (
                                          <></>
                                      )
                                  )
                                : []
                        }
                    />
                );
            }

            return (
                <ContentContainer
                    title={item.title}
                    content={item.content as string}
                />
            );
        });
    };

    return (
        <Container>
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

            {renderContent(infoDetail)}
        </Container>
    );
}
