import React from "react";
import "../src/css/tailwind.css";
import InfoBlock from "./InfoBlock";
import { PlanInfo } from "./features/plan-info";

const infoData = {
    earliestPurchaseDate: "2023/01/19",
    flashDiscount: "08/16 國旅聯票週三快閃下單享75折，限 08/16~09/27 搭乘。",
    remindTag: [
        { type: "readyToUse", text: "即買即用" },
        { type: "bookYourself", text: "需自行預約" },
        { type: "sendVoucher", text: "立即發送憑證" },
        { type: "double11", text: "雙11下殺" },
        { type: "highspeedRail25", text: "加購高鐵75折" },
    ],
    infoDetail: [
        {
            item: "1",
            title: "使用效期",
            content: "需要按照預訂日期及當天開放時間內兌換，逾期失效",
            precautions: "",
        },
        {
            item: "2",
            title: "適用年齡",
            content: "成人年齡 :10-65, 兒童年齡 : 2-9",
            precautions: "",
        },
        {
            item: "3",
            title: "產品規格",
            content:
                "體驗時間：03:30（海上日出團） / 08:00（上午陽光團） / 13:30（下午夕陽團）",
            precautions: "",
        },
        {
            item: "4",
            title: "憑證使用",
            content: "電子憑證（現場請出示 QR code）",
            precautions: "",
        },
        {
            item: "5",
            title: "取消政策",
            content: [
                "所選日期 5 天（含）之前取消，收取手續費 0%",
                "所選日期 2 ~ 4 天之間取消，收取手續費 50%",
                "所選日期 0 ~ 1 天之間取消，收取手續費 100%",
            ],
            precautions:
                "注意：由於站內商品來自全球各地，訂單取消時間將依該供應商所在時區判定。供應商需 2-5 個工作天進行取消流程，依照您購買的商品取消政策收取手續費，並於取消流程完成後14 個工作天內退款。",
        },
        {
            item: "6",
            title: "常見問題",
            content: [
                {
                    faqtitle: "票券是否有使用效期限制？",
                    faqcontent: "是的，使用效期：2033/01/01 內有效",
                },
                {
                    faqtitle: "票券是否可以直接至店家使用？",
                    faqcontent: "依 Serp『憑證持有及使用方式』文案顯示",
                },
                {
                    faqtitle: "現在購買票券是否享有折扣優惠？",
                    faqcontent: "是的，於雄獅旅遊購買可以享 200% 優惠",
                },
                {
                    faqtitle: "票券適用的範圍有哪些？",
                    faqcontent: "可以在台灣的服務據點使用",
                },
            ],
            precautions: "",
        },
    ],
};

function App() {
    return (
        <>
            {/* <InfoBlock /> */}
            <PlanInfo infoData={infoData} />
        </>
    );
}

export default App;
