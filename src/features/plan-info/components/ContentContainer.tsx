import React, { ReactNode } from "react";

interface I_ContentContainer {
    title: string;
    content: ReactNode;
}

export default function ContentContainer(props: I_ContentContainer) {
    const { title, content } = props;
    return (
        <div className="inner-box">
            <div className="text-sm font-bold my-2">{title}</div>
            <div className="text-sm">{content}</div>
        </div>
    );
}
