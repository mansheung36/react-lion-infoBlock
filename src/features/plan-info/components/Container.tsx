import React, { useState } from "react";

interface I_Container {
    children: React.ReactNode;
}

export default function Container({ children }: I_Container) {
    const [scrollTop, setScrollTop] = useState(0);
    const handleScroll = (event: any) => {
        setScrollTop(event.currentTarget.scrollTop);
    };

    return (
        <div
            className="relative bg-[#f5f5f5] w-[400px] m-auto my-10 border-[20px] border-[#f5f5f5] border-solid h-[500px] overflow-auto"
            onScroll={handleScroll}
        >
            {scrollTop > 0 && (
                <div className="sticky top-0 h-[100px] bg-gradient-to-b from-[#f5f5f5] to-transparent z-10"></div>
            )}
            <div className="w-full absolute top-0">
                {children}
                <div className= "sticky bottom-0 right-0 width-[440px] h-[100px] bg-gradient-to-b from-transparent to-[#f5f5f5]"></div>
            </div>
        </div>
    );
}
